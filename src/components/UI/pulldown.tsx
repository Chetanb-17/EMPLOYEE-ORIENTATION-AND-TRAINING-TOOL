 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : pulldown.tsx
*
* Description      : Select Component
*
* Author(s)        : Chetan Biradar
*
* Version History:
* <Version Number>                 <Author>                <date>        <defect Number>      <Modification
*                                                                                           made and the
*                                                                                           reason for
*                                                                                           modification >
*  1.0                            Chetan Biradar          14-04-2025         --              initial version
*
* References        :
*                     
* Assumption(s)     : None.
*                     
* Constraint(s)     : None.
*                     
 ****************************************************************************
*/
 
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions
} from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import { ChevronUpDownIcon } from '@heroicons/react/16/solid';

// Type definitions
interface dataProps {
  id: number;
  name: string;
}

interface SelectProps {
  options: dataProps[];
  selectType?: 'single' | 'multi';
  placeholder?: string;
  value?: dataProps | dataProps[];
  label?: string;
  required?: boolean;
  errorMsg?: string;
  disabled?: boolean;
  onChange: (value: { id: number; name: string } | undefined) => void; 
}

const Select: React.FC<SelectProps> = ({
  options,
  selectType = 'single',
  placeholder = 'Select Value',
  value,
  label,
  required,
  errorMsg,
  disabled,
  onChange // <-- NEW
}) => {
  const [selected, setSelected] = useState<dataProps | dataProps[] | null>(
    value !== undefined ? value : selectType === 'single' ? null : []
  );
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (value !== undefined) {
      setSelected(value);
    }
  }, [value]);

  const filteredOptions = query === ''
    ? options
    : options.filter(option =>
        option.name.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (option: dataProps) => {
    if (disabled) return;
    if (selectType === 'single') {
      setSelected(option);
      onChange?.(option);
    } else {
      setSelected(prev => {
        const prevArray = Array.isArray(prev) ? prev.filter(item => !Array.isArray(item)) : [];
        let updated: dataProps[];
        if (prevArray.some(item => item.id === option.id)) {
          updated = prevArray.filter(item => item.id !== option.id);
        } else {
          updated = [...prevArray, option];
        }
        onChange?.(updated);
        return updated;
      });
    }
  };

  const handleSelectAll = () => {
    if (disabled) return;
    if (isAllSelected) {
      setSelected([]);
      onChange?.([]);
    } else {
      setSelected([...options]);
      onChange?.([...options]);
    }
  };

  const isSelected = (option: dataProps) =>
    selectType === 'single'
      ? (selected as dataProps)?.id === option.id
      : Array.isArray(selected) &&
        selected.some(item => item.id === option.id);

  const displayValue = () => {
    if (!selected || (Array.isArray(selected) && selected.length === 0)) {
      return placeholder;
    }
    if (selectType === 'single') {
      return (selected as dataProps)?.name;
    }

    const selectedArray = Array.isArray(selected)
      ? selected.filter(item => !Array.isArray(item))
      : [];

    return selectedArray.length > 3
      ? `${selectedArray.length} selected`
      : selectedArray.map(s => s.name).join(', ');
  };

  const isAllSelected =
    Array.isArray(selected) &&
    selected.filter(item => !Array.isArray(item)).length === options.length;

  return (
    <div>
      <Listbox
        value={selected}
        onChange={handleSelect}
        multiple={selectType === 'multi'}
        disabled={disabled}
      >
        {label && (
          <Label className="block text-sm font-medium text-gray-900 font-serif">
            {label} {required && <span className="text-red-500">*</span>}
          </Label>
        )}
        <div className="relative mt-2 p-0.5">
          <ListboxButton
            className={`w-full rounded-md bg-white py-2 px-3 text-left text-gray-900 outline-1 focus:outline-none focus:ring-2 sm:text-sm ${
              errorMsg ? 'outline-red-500' : 'focus:ring-indigo-500'
            } ${disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
            disabled={disabled}
          >
            <span className="flex items-center justify-between gap-2">
              <span className="truncate max-w-full font-serif">{displayValue()}</span>
              <ChevronUpDownIcon className="size-5 text-gray-500" />
            </span>
          </ListboxButton>

          <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-gray-50 shadow-xl ring-1 rounded-lg ring-black/5 focus:outline-none sm:text-sm">
            <div className="p-2 sticky top-0 bg-white z-10 border-b border-gray-200">
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="w-full p-2 outline-1 rounded-md font-serif"
                onKeyDown={e => e.stopPropagation()}
                disabled={disabled}
              />
              {selectType === 'multi' && (
                <div
                  className="flex items-center gap-2 mt-2 cursor-pointer"
                  onClick={handleSelectAll}
                >
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    readOnly
                    className="cursor-pointer"
                    disabled={disabled}
                  />
                  <span className="font-serif font-bold">Select All</span>
                </div>
              )}
            </div>
            {filteredOptions.map(option => (
              <ListboxOption
                key={option.id}
                value={option}
                className={`select-none p-2 hover:bg-blue-400 border-gray-400 last:border-none font-serif cursor-pointer ${
                  isSelected(option) ? 'bg-blue-200' : ''
                }`}
                onClick={() => handleSelect(option)}
              >
                <div className="flex items-center gap-2 w-full cursor-pointer">
                  <input
                    type={selectType === 'single' ? 'radio' : 'checkbox'}
                    checked={isSelected(option)}
                    readOnly
                    disabled={disabled}
                  />
                  <span>{option.name}</span>
                </div>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
        {errorMsg && (
          <p className="text-red-500 text-sm font-serif mt-1">{errorMsg}</p>
        )}
      </Listbox>
    </div>
  );
};

export default Select;
