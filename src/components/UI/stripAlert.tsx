 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : StripAlert.tsx
*
* Description      : Strip Alert Component
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
import React  from 'react'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';  
import { 
  faExclamationCircle, 
  faCheckCircle, 
  faExclamationTriangle, 
  faInfoCircle, 
  faTimes ,
  // faTimesCircle
} from '@fortawesome/free-solid-svg-icons';
// Strip Alert Component 
type StripAlertProps = {
  message: string;
  linkText?: string;
  linkUrl?: string;
  onClose: () => void;
  type?: 'error' | 'success' | 'warning' | 'info'| 'submit';
  customBgColor?: string;
  customTextColor?: string;
};

// Use 'IconDefinition' for FontAwesome icons
const typeStyles: Record<string, { bg: string; text: string; icon: IconDefinition }> = {
  error: { bg: 'bg-red-600', text: 'text-white', icon: faExclamationCircle },
  success: { bg: 'bg-green-600', text: 'text-white', icon: faCheckCircle },
  warning: { bg: 'bg-yellow-400', text: 'text-black', icon: faExclamationTriangle },
  info: { bg: 'bg-blue-500', text: 'text-white', icon: faInfoCircle },
  submit: { bg: 'bg-blue-500', text: 'text-white', icon: faInfoCircle },
};

const StripAlert: React.FC<StripAlertProps> = ({
  message,
  linkText,
  linkUrl = '#',
  onClose,
  type = 'info',
  customBgColor,
  customTextColor,
}) => {
  const bgColor = customBgColor || typeStyles[type].bg;
  const textColor = customTextColor || typeStyles[type].text;
  const icon = typeStyles[type].icon;

  return (
    <div className={`flex items-center justify-between gap-4 px-3 py-2 shadow-2xl rounded-md ${bgColor} ${textColor}`}>
      <div className="flex items-center gap-2">
        {/* FontAwesome Icon */}
        <FontAwesomeIcon icon={icon} className="w-5 h-5" />

        <p className="text-sm font-medium">
          {message}{' '}
          {linkText && (
            <a href={linkUrl} className="inline-block underline">
              {linkText}
            </a>
          )}
        </p>
      </div>

      {/* Close Button */}
      <button
        aria-label="Close"
        onClick={onClose}
        className="shrink-0 rounded-md bg-black/10 p-1 transition hover:bg-black/20 cursor-pointer"
      >
        <FontAwesomeIcon icon={faTimes} className="w-5 h-1" />
      </button>
    </div>
  );
};


export default StripAlert;