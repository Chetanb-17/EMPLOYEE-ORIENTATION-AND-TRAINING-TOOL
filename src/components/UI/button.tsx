 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : Button.tsx
*
* Description      : Button Component
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
 

import React from 'react';

export interface StandardButtonProps {
  text?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'base' | 'border';
  type?: 'error' | 'success' | 'warning' | 'info';
  customColor?: string;
  color?: string; // fallback when type is not used
  disabled?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullwidth?: boolean;
  className?: string; // ✅ custom class name prop
}

const Button: React.FC<StandardButtonProps> = ({
  text,
  children,
  onClick,
  href = '#',
  variant = 'base',
  type = 'info',
  customColor,
  color = 'blue',
  disabled = false,
  size = 'md',
  fullwidth = false,
  className = '', // ✅ default empty string
}) => {
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-md font-semibold transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none ${
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  } ${fullwidth ? 'w-full' : ''}`;

  const sizeClasses: Record<string, string> = {
    sm: 'px-2 py-1 text-sm md:px-4 md:py-2.5',
    md: 'px-4 py-2 text-base md:px-5 md:py-2.5',
    lg: 'px-5 py-2.5 text-lg md:px-6 md:py-3',
    xl: 'px-6 py-3 text-xl md:px-8 md:py-4',
  };

  const typeColorMap: Record<string, string> = {
    error: 'red',
    success: 'green',
    warning: 'yellow',
    info: 'blue',
  };

  const resolvedColor = customColor || typeColorMap[type] || color;

  const borderClasses: Record<string, string> = {
    red: 'border border-red-500 text-red-700',
    green: 'border border-green-500 text-green-700',
    yellow: 'border border-yellow-500 text-yellow-700',
    blue: 'border border-blue-500 text-blue-700',
  };

  const filledClasses: Record<string, string> = {
    red: 'bg-red-500 hover:bg-red-600 text-white',
    green: 'bg-green-500 hover:bg-green-600 text-white',
    yellow: 'bg-yellow-400 hover:bg-yellow-500 text-gray-700',
    blue: 'bg-blue-500 hover:bg-blue-600 text-white',
  };

  const variantClasses =
    variant === 'border'
      ? borderClasses[resolvedColor] || borderClasses.blue
      : filledClasses[resolvedColor] || filledClasses.blue;

  const Component = onClick ? 'button' : 'a';

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.();
  };

  return (
    <Component
      onClick={handleClick}
      href={Component === 'a' ? href : undefined}
      disabled={Component === 'button' ? disabled : undefined}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses} ${className}`} // ✅ merge user className
    >
      {children || text}
    </Component>
  );
};

export default Button;




