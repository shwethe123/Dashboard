import React from 'react';
import axios from 'axios';

export default function User() {
  // Example User Data (you could fetch this data from an API)
  const users = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', role: 'User', status: 'Inactive' },
    { id: 3, name: 'Mike Johnson', email: 'mikej@example.com', role: 'User', status: 'Active' },
    { id: 4, name: 'Alice Brown', email: 'aliceb@example.com', role: 'Moderator', status: 'Active' },
  ];

  return (
    <div className="bg-gray-100 text-gray-800 p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">User Management</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full p-3 bg-gray-200 rounded-md border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* User Table */}
      <div className="overflow-x-auto bg-gray-100 rounded-lg shadow-md">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Role</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="bg-gray-100 hover:bg-white">
                <td className="py-3 px-6 text-sm text-gray-800">{user.name}</td>
                <td className="py-3 px-6 text-sm text-gray-800">{user.email}</td>
                <td className="py-3 px-6 text-sm text-gray-800">{user.role}</td>
                <td
                  className={`py-3 px-6 text-sm font-semibold ${
                    user.status === 'Active' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {user.status}
                </td>
                <td className="py-3 px-6 text-sm flex space-x-4">
                  <button className="text-blue-500 hover:text-blue-600">Edit</button>
                  <button className="text-red-500 hover:text-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action Panel */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">User Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button className="py-3 px-6 bg-green-600 hover:bg-green-700 rounded-md text-white font-semibold">
            Add New User
          </button>
          <button className="py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold">
            Import Users
          </button>
          <button className="py-3 px-6 bg-yellow-600 hover:bg-yellow-700 rounded-md text-white font-semibold">
            Export Users
          </button>
        </div>
      </div>
    </div>
  );
}
