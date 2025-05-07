// /*
// *****************************************************************************
// * License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

// *                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

// *                      Domlur,Bangalore - 560071, INDIA                     *

// *                      Licensed software and All rights reserved.           *

// *****************************************************************************

// * File             : adduser.tsx
// *
// * Description      : Add User file
// *
// * Author(s)        : Chetan Biradar
// *
// * Version History:
// * <Version Number>                 <Author>                <date>        <defect Number>      <Modification
// *                                                                                           made and the
// *                                                                                           reason for
// *                                                                                           modification >
// *  1.0                            Chetan Biradar          14-04-2025         --              initial version
// *
// * References        :
// *                     
// * Assumption(s)     : None.
// *                     
// * Constraint(s)     : None.
// *                     
// ****************************************************************************
// */
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
// import { Table, Thead, Tbody, Tr, Th, Td } from '../../components/UI/table';
// import Input from '../../components/UI/input';
// import Button from '../../components/UI/button';
// import Pulldown from '../../components/UI/pulldown';
// import SearchField from '../../components/UI/searchInput';
// import StripAlert from '../../components/UI/stripAlert';
// import {MAX_EMPLOYEE_ID_LENGTH} from "../../config/config"
// interface TableData {
//   [key: string]: string;
//   employeeId: string;
//   name: string;
//   email: string;
//   roleType: string;
// }
// const roles = [
//   { id: 1, name: 'Admin' },
//   { id: 2, name: 'Controller' },
//   { id: 3, name: 'User' },

// ];
// function AddUser() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showStrip, setShowStrip] = useState(true);
//   const [employeeId, setEmployeeId] = useState('');
//   const [email, setEmail] = useState('');
//   const [userName, setUserName] = useState('');
//   const [roleType, setRoleType] = useState('');

//   const handleSignupValidation = () => {
//     // let formIsValid = true;
//     const emailId = email || "";
//     const roleType = roleTypeValue || [];

//     if (!employeeId || !email || !userName || !roleType) {
//       setStripMessage('Please fill all required fields.');
//       setStripType('warning');
//       setShowStrip(true);
//       return;
//     }

//     if (employeeId.length > MAX_EMPLOYEE_ID_LENGTH) {
//       setStripMessage(`Employee ID cannot exceed ${MAX_EMPLOYEE_ID_LENGTH} characters.`);
//       setStripType('warning');
//       setShowStrip(true);
//       return;
//     }


//     //  validation for email addresses
//     if (emailId === undefined || emailId.trim() === "") {
//       formIsValid = false;
//       setEmailError("Enter email");
//       setStripMessage(`Enter email`);
//       setStripType('error');
//       setShowStrip(true);
//     } else if (
//       !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailId)
//     ) {
//       formIsValid = false;
//       setEmailError("Enter valid email id");
//       setStripMessage(`Enter valid email id`);
//       setStripType('error');
//       setShowStrip(true);
//     } else {

//       setStripMessage(`Not able to register`);
//       setStripType('error');
//       setShowStrip(true);
//     }




//     // validation for Access type
//     if (roleType === undefined || roleType.length === 0) {
//      setAccessTypeError(true);
//     }


//     return formIsValid;
//   };





//   handleAddUser = () => {
//     handleSignupValidation()

//   try {
//     const response = await fetch('/api/add-user', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(payload),
//     });

//     if (response.ok) {
//       setStripMessage('User added successfully!');
//       setStripType('success');
//       setShowStrip(true);

//       setEmployeeId('');
//       setEmail('');
//       setUserName('');
//       setRoleType('');
//     } else {
//       setStripMessage('Failed to add user. Please try again.');
//       setStripType('error');
//       setShowStrip(true);
//     }
//   } catch (error) {
//     console.error('Add user error:', error);
//     setStripMessage('Something went wrong. Please try again.');
//     setStripType('error');
//     setShowStrip(true);
//   }
// };

//   }
//   const handleSearch = () => {
//     console.log('Searching for:', searchTerm);
//   };
//   // Dummy data with dynamic properties
//   const data: TableData[] = Array.from({ length: 30 }, (_, i) => ({
//     name: `User ${i + 1}`,
//     email: `user${i + 1}@alten.com`,
//     employeeId: `${22000 + i + 1}`,
//     roleType: i % 3 === 0 ? 'Admin' : i % 3 === 1 ? 'Manager' : 'Employee',
//   }));

//   // Extract headers dynamically by getting the keys from the first object in the data
//   const headers = data.length > 0 ? Object.keys(data[0]) : [];

//   return (
//     <>
//       <div className="p-1">
//         <div className="border-b pb-1 mb-1">
//           <div className="grid grid-cols-12 gap-4">
//             {/* Page Header */}
//             <div className="col-span-12 sm:col-span-2">
//               <h1 className="text-xl font-semibold text-gray-800">
//                 User Details
//               </h1>
//             </div>

//             {/* StripAlert */}
//             <div className="col-span-12 sm:col-span-6">
//               {showStrip && (
//                 <StripAlert
//                   message="Info Alert"
//                   type="warning"
//                   linkText="Check out this new course!"
//                   linkUrl="XXXXXXXXXXXXXXXXXXX"
//                   onClose={() => setShowStrip(false)}
//                 />
//               )}
//             </div>

//             {/* SearchField */}
//             <div className="col-span-12 sm:col-span-4">
//               <SearchField
//                 name="search"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 onSubmit={handleSearch}
//                 placeholder="Type something to search..."
//               />
//             </div>
//           </div>
//         </div>


//         <div className="grid grid-cols-1 md:grid-cols-12 gap-2 h-full">
//           {/* Left Side */}
//           <div className="md:col-span-4 col-span-12 bg-white p-5 rounded shadow overflow-y-auto flex flex-col h-[calc(100vh-11.65rem)]">
//             {/* Title */}
//             <h2 className="text-lg font-semibold text-gray-700 mb-4">
//               Add User
//             </h2>

//             {/* Scrollable Input Section */}
//             <div className="flex-1 overflow-y-auto pr-1 space-y-4">
//               <Input
//                 id="employeeId"
//                 name="EmployeeId"
//                 label="Employee ID"
//                 placeholder="EnterEmployee ID"
//                 onChange={setEmployeeId}
//                 required
//               />

//               <Input
//                 id="email"
//                 name="email"
//                 label="Email address"
//                 placeholder="Enter email"
//                 onChange={setEmail}
//                 required
//               />
//               <Input
//                 id="Username"
//                 name="username"
//                 label="User name"
//                 placeholder="Enter username"
//                 onChange={setUserName}
//                 required
//               />

//               <Pulldown
//                 options={roles}
//                 value={{ id: 1, name: 'Admin' }}
//                 selectType="single"
//                 placeholder="Select a Role Type"
//                 label='Select a value'
//                 required
//               />

//               {/* Add more inputs as needed */}
//             </div>

//             {/* Fixed Button */}
//             <div className="mt-4">
//               <Button type='info' fullwidth size='sm' 
//               onClick={() => {
//                 handleAddUser()
//                 setShowStrip(true)}}>
//                 Add User
//               </Button>
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="md:col-span-8 col-span-12 bg-white p-4 rounded shadow overflow-auto  h-[calc(100vh-11.65rem)]">
//             <Table border="true" height=' h-[calc(100vh-14rem)]'>
//               <Thead  >
//                 {headers.map((header, index) => (
//                   <Th key={index}>{header}</Th>
//                 ))}
//                 <Th>Edit</Th>
//                 <Th>Delete</Th>
//               </Thead>
//               <Tbody>
//                 {data.map((item, index) => (
//                   <Tr key={index}>
//                     {headers.map((header, i) => (
//                       <Td key={i}>{item[header as keyof TableData]}</Td>
//                     ))}
//                     <Td>
//                       <button className="text-blue-600 hover:text-blue-800">
//                         <FontAwesomeIcon icon={faEdit} />
//                       </button>
//                     </Td>
//                     <Td>
//                       <button className="text-red-600 hover:text-red-800">
//                         <FontAwesomeIcon icon={faTrash} />
//                       </button>
//                     </Td>
//                   </Tr>
//                 ))}
//               </Tbody>
//             </Table>


//           </div>

//         </div>
//       </div>

//     </>



//   );
// }
import React, { useState, } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Table, Thead, Tbody, Tr, Th, Td } from '../../components/UI/table';
import Input from '../../components/UI/input';
import Button from '../../components/UI/button';
import Pulldown from '../../components/UI/pulldown';
import SearchField from '../../components/UI/searchInput';
import StripAlert from '../../components/UI/stripAlert';
import { MAX_EMPLOYEE_ID_LENGTH } from "../../config/config";
import { baseURL } from '../../config/config';
import { useUserContext } from '../../contextApi/loginContext';
interface TableData {
  [key: string]: string;
  employeeId: string;
  name: string;
  email: string;
  roleType: string;
}

const roles = [
  { id: 1, name: 'Admin' },
  { id: 2, name: 'Controller' },
  { id: 3, name: 'User' },
];

function AddUser() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showStrip, setShowStrip] = useState(false);
  const [stripMessage, setStripMessage] = useState('');
  const [stripType, setStripType] = useState<'success' | 'warning' | 'error'>('warning');

  const [employeeId, setEmployeeId] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [roleType, setRoleType] = useState<{ id: number; name: string } | undefined>(undefined);
    const { user } = useUserContext();


    // useEffect(() => {
    //   if (value !== undefined) {
    //     setRoleType(value);
    //   }
    // }, [value]);
  const handleSignupValidation = () => {
   console.log("handleSignupValidation");
   console.log("userdetails",employeeId,email, userName, roleType);
   
   
    if (!employeeId || !email || !userName || !roleType) {
      setStripMessage('Please fill all required fields.');
      setStripType('warning');
      setShowStrip(true);
      return false;
    }

    if (employeeId.length > MAX_EMPLOYEE_ID_LENGTH) {
      setStripMessage(`Employee ID cannot exceed ${MAX_EMPLOYEE_ID_LENGTH} characters.`);
      setStripType('warning');
      setShowStrip(true);
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email.trim()) {
      setStripMessage('Enter email');
      setStripType('error');
      setShowStrip(true);
      return false;
    } else if (!emailRegex.test(email)) {
      setStripMessage('Enter valid email id');
      setStripType('error');
      setShowStrip(true);
      return false;
    }
    if (!roleType) {
      setStripMessage('Please select a role type');
      setStripType('warning');
      setShowStrip(true);
      return false;
    }

    return true;
  };

  const handleAddUser = async () => {
    if (!handleSignupValidation()) return;

    const payload = {
      employeeId: employeeId.trim(),
      email: email.trim(),
      userName: userName.trim(),
      roleType: roleType?.name || '',
      createdBy: user?.userName,
      token: user?.token
    };
    console.log("payload", payload);
    
    try {
      const response = await fetch(baseURL + "addUser", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStripMessage('User added successfully!');
        setStripType('success');
        setEmployeeId('');
        setEmail('');
        setUserName('');
        setRoleType(undefined);
      } else {
        setStripMessage('Failed to add user. Please try again.');
        setStripType('error');
      }
    } catch (error) {
      console.error('Add user error:', error);
      setStripMessage('Something went wrong. Please try again.');
      setStripType('error');
    }

    setShowStrip(true);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    const namePart = value.split('@')[0] || '';
    setUserName(namePart);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const data: TableData[] = Array.from({ length: 10 }, (_, i) => ({
    name: `User ${i + 1}`,
    email: `user${i + 1}@alten.com`,
    employeeId: `${22000 + i + 1}`,
    roleType: i % 3 === 0 ? 'Admin' : i % 3 === 1 ? 'Manager' : 'Employee',
  }));

  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    <div className="p-1">
      <div className="border-b pb-1 mb-1">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-2">
            <h1 className="text-xl font-semibold text-gray-800">User Details</h1>
          </div>

          <div className="col-span-12 sm:col-span-6">
            {showStrip && (
              <StripAlert
                message={stripMessage}
                type={stripType}
                linkText=""
                linkUrl=""
                onClose={() => setShowStrip(false)}
              />
            )}
          </div>

          <div className="col-span-12 sm:col-span-4">
            <SearchField
              name="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onSubmit={handleSearch}
              placeholder="Type something to search..."
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-2 h-full">
        <div className="md:col-span-4 col-span-12 bg-white p-5 rounded shadow overflow-y-auto flex flex-col h-[calc(100vh-11.65rem)]">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Add User</h2>
          <div className="flex-1 overflow-y-auto pr-1 space-y-4">
            <Input
              id="employeeId"
              name="employeeId"
              label="Employee ID"
              placeholder="Enter Employee ID"
              value={employeeId}
              onChange={setEmployeeId}
              required
            />

            <Input
              id="email"
              name="email"
              label="Email address"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
              required
            />

            <Input
              id="username"
              name="username"
              label="User name"
              placeholder="Enter username"
              value={userName}
              onChange={setUserName}
              required
            />

            <Pulldown
              options={roles}
              value={roleType}
             onChange={(value: { id: number; name: string } | undefined) => {
                console.log("Selected role value:", roles);
                setRoleType(value ?? undefined);
              }}
              selectType="single"
              placeholder="Select a Role Type"
              label="Select a value"
              required
            />
          </div>

          <div className="mt-4">
            <Button type="info" fullwidth size="sm" onClick={handleAddUser }>
              Add User
            </Button>
          </div>
        </div>

        <div className="md:col-span-8 col-span-12 bg-white p-4 rounded shadow overflow-auto h-[calc(100vh-11.65rem)]">
          <Table border="true" height="h-[calc(100vh-14rem)]">
            <Thead>
              {headers.map((header, index) => (
                <Th key={index}>{header}</Th>
              ))}
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Thead>
            <Tbody>
              {data.map((item, index) => (
                <Tr key={index}>
                  {headers.map((header, i) => (
                    <Td key={i}>{item[header as keyof TableData]}</Td>
                  ))}
                  <Td>
                    <button className="text-blue-600 hover:text-blue-800">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                  </Td>
                  <Td>
                    <button className="text-red-600 hover:text-red-800">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
