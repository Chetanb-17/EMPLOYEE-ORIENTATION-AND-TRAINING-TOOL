

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Table, Thead, Tbody, Tr, Th, Td } from '../../components/UI/table';
import Input from '../../components/UI/input';
import Button from '../../components/UI/button';
import Pulldown from '../../components/UI/pulldown';
import SearchField from '../../components/UI/searchInput';
import StripAlert from '../../components/UI/stripAlert';
import { baseURL } from '../../config/config';

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
  const [showStrip, setShowStrip] = useState(true);
  const [users, setUsers] = useState<TableData[]>([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<any>([]);

  // const fetchUsers = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch(`${baseURL}getAllUsers`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error(`Error fetching users: ${response.statusText}`);
  //     }


  //     const data = await response.json();
  //     console.log('data-----', data);

  //     const mappedUsers = data.map((user: any) => ({
  //       name: user.userName,
  //       email: user.email,
  //       employeeId: user.employeeId,
  //       roleType: user.roleType,
  //     }));

  //     setUsers(mappedUsers);
  //   } catch (error) {
  //     console.log('Failed to fetch users:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseURL}getAllUsers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error fetching users: ${response.statusText}`);
      }

      const { data, status } = await response.json();
      console.log('API response:', { data, status });

      if (status === 1 && Array.isArray(data)) {
        const mappedUsers = data.map((user) => ({
          userId: user.userId,
          employeeId: user.employeeId,
          name: user.userName,
          email: user.email,
          roleType: getRoleName(user.roleTypeId),
        }));

        setUsers(mappedUsers);
      } else {
        console.error('Unexpected API response:', { data, status });
        setUsers([]);
      }
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to convert roleTypeId to role name
  const getRoleName = (roleTypeId: number): string => {
    const role = roles.find((r) => r.id === roleTypeId);
    return role ? role.name : 'Unknown';
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const handleEdit = (user: TableData) => {
    console.log('Editing user:', user);
    // Implement edit functionality here
  };

  const handleDelete = (user: TableData) => {
    console.log('Deleting user:', user);
    // Implement delete functionality here
  };

  return (
    <>
      <div className="p-1">
        <div className="border-b border-gray-200 pb-1 mb-2">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-2">
              <h1 className="text-xl font-semibold text-gray-800">User Details</h1>
            </div>

            <div className="col-span-12 sm:col-span-6">
              {showStrip && (
                <StripAlert
                  message="Info Alert"
                  type="warning"
                  linkText="Check out this new course!"
                  linkUrl="XXXXXXXXXXXXXXXXXXX"
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
          {/* Left Side */}
          <div className="md:col-span-4 col-span-12 bg-white p-5 rounded shadow overflow-y-auto flex flex-col h-[calc(100vh-11.65rem)]">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Add User</h2>

            <div className="flex-1 overflow-y-auto pr-1 space-y-4">
              <Input
                id="employeeId"
                name="EmployeeId"
                label="Employee ID"
                placeholder="Enter Employee ID"
                onChange={(val) => console.log(val)}
                required
              />

              <Input
                id="email"
                name="email"
                label="Email address"
                placeholder="Enter email"
                onChange={(val) => console.log(val)}
                required
              />

              <Input
                id="Username"
                name="username"
                label="User name"
                placeholder="Enter username"
                onChange={(val) => console.log(val)}
                required
              />

              <Pulldown
                options={roles}
                value={value}
                selectType="multi"
                placeholder="Select a Role Type"
                label="Select a value"
                required
                onChange={(val) => {
                  console.log('Selected:', val);
                  setValue(val);
                }}
              />
            </div>

            <div className="mt-4">
              <Button type="info" fullwidth size="sm" onClick={() => setShowStrip(true)}>
                Add User
              </Button>
            </div>
          </div>

          {/* Right Side */}
          <div className="md:col-span-8 col-span-12 bg-white p-4 rounded shadow overflow-auto h-[calc(100vh-11.65rem)]">
            {/* You can choose either your custom Table component or the HTML table */}
            {/* Option 1: Using your custom Table component */}
            <Table border="true" height="h-[calc(100vh-14rem)]">
              <Thead>
                <Th>Employee ID</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role Type</Th>
                <Th>Edit</Th>
                <Th>Delete</Th>
              </Thead>
              <Tbody>
                {users.map((user, index) => (
                  <Tr key={index}>
                    <Td>{user.employeeId}</Td>
                    <Td>{user.name}</Td>
                    <Td>{user.email}</Td>
                    <Td>{user.roleType}</Td>
                    <Td>
                      <button
                        className="text-blue-600 hover:text-blue-800"
                        onClick={() => handleEdit(user)}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                    </Td>
                    <Td>
                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => handleDelete(user)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>

            {/* Option 2: Using standard HTML table (uncomment if you prefer this) */}
            {/*
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="border-b transition-colors cursor-pointer duration-200 bg-gray-800">
                  <th className="px-4 py-2 text-left font-semibold text-xs tracking-wider text-white">EmployeeId</th>
                  <th className="px-4 py-2 text-left font-semibold text-xs tracking-wider text-white">Name</th>
                  <th className="px-4 py-2 text-left font-semibold text-xs tracking-wider text-white">Email</th>
                  <th className="px-4 py-2 text-left font-semibold text-xs tracking-wider text-white">Role Type</th>
                  <th className="px-4 py-2 text-left font-semibold text-xs tracking-wider text-white">Edit</th>
                  <th className="px-4 py-2 text-left font-semibold text-xs tracking-wider text-white">Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={index}
                    className="border-b transition-colors cursor-pointer duration-200 hover:bg-gray-100"
                  >
                    <td className="px-4 py-2 text-sm text-gray-700">{user.employeeId}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{user.name}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{user.email}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">{user.roleType}</td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      <button
                        onClick={() => handleEdit(user)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      <button
                        onClick={() => handleDelete(user)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUser;