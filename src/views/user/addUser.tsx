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
  userId?: string;
  employeeId: string;
  name: string;
  email: string;
  roleType: string;
}

interface RoleOption {
  id: number;
  name: string;
}

const roles: RoleOption[] = [
  { id: 1, name: 'Admin' },
  { id: 2, name: 'Controller' },
  { id: 3, name: 'User' },
];

function AddUser() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showStrip, setShowStrip] = useState(true);
  const [users, setUsers] = useState<TableData[]>([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState<RoleOption[]>([]);

  const [newUser, setNewUser] = useState({
    employeeId: '',
    email: '',
    name: '',
    roleTypeIds: [] as number[],
  });

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
      if (status === 1 && Array.isArray(data)) {
        const mappedUsers = data.map((user: any) => ({
          userId: user.userId,
          employeeId: user.employeeId,
          name: user.userName,
          email: user.email,
          roleType: getRoleName(user.roleTypeId),
        }));

        setUsers(mappedUsers);
      } else {
        setUsers([]);
      }
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRoleName = (roleTypeId: number): string => {
    const role = roles.find((r) => r.id === roleTypeId);
    return role ? role.name : 'Unknown';
  };

 const handleAddUser = async () => {
  if (!newUser.employeeId || !newUser.name || !newUser.email || value.length === 0) {
    alert('Please fill all fields and select a role.');
    return;
  }

  const roleTypeId = value[0].id; // Assuming only one role is selected

  const createdBy = localStorage.getItem('userEmail') || 'system'; // Replace with actual key if different

  const payload = {
    employeeId: newUser.employeeId,
    email: newUser.email,
    roleTypeId: roleTypeId,
    userName: newUser.name,
    createdBy: createdBy,
  };

  try {
    const response = await fetch(`${baseURL}addUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();
    if (result.status === 1) {
      alert('User added successfully!');
      fetchUsers();
      setNewUser({ employeeId: '', email: '', name: '', roleTypeIds: [] });
      setValue([]);
    } else {
      alert(result.message || 'Failed to add user.');
    }
  } catch (error) {
    console.error('Error adding user:', error);
    alert('An error occurred while adding the user.');
  }
};

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
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
              onSubmit={() => console.log(searchTerm)}
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
              value={newUser.employeeId}
              onChange={(val) => setNewUser({ ...newUser, employeeId: val })}
              required
            />

            <Input
              id="email"
              name="email"
              label="Email address"
              placeholder="Enter email"
              value={newUser.email}
              onChange={(val) => setNewUser({ ...newUser, email: val })}
              required
            />

            <Input
              id="Username"
              name="username"
              label="User name"
              placeholder="Enter username"
              value={newUser.name}
              onChange={(val) => setNewUser({ ...newUser, name: val })}
              required
            />

            <Pulldown
              options={roles}
              value={value}
              selectType="multi"
              placeholder="Select a Role Type"
              label="Select a value"
              required
              onChange={(val) => setValue(val)}
            />
          </div>

          <div className="mt-4">
            <Button type="info" fullwidth size="sm" onClick={handleAddUser}>
              Add User
            </Button>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:col-span-8 col-span-12 bg-white p-4 rounded shadow overflow-auto h-[calc(100vh-11.65rem)]">
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
                      onClick={() => console.log('Edit user', user)}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                  </Td>
                  <Td>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => console.log('Delete user', user)}
                    >
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
