import React, { useState } from "react";
import { FiPlus, FiTrash2, FiEdit2 } from "react-icons/fi";

// Mock data initially (until API connected)
const initialUsers = [
  {
    id: 1,
    name: "Admin",
    email: "admin@growthikmedia.com",
    role: "ADMIN",
    status: "Active",
  },
];

export default function UserManager() {
  const [users, setUsers] = useState(initialUsers);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            User Management
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Manage admin access and roles
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          <FiPlus /> Add New User
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="py-4 px-4 text-sm font-semibold text-gray-500">
                User
              </th>
              <th className="py-4 px-4 text-sm font-semibold text-gray-500">
                Role
              </th>
              <th className="py-4 px-4 text-sm font-semibold text-gray-500">
                Status
              </th>
              <th className="py-4 px-4 text-sm font-semibold text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50"
              >
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-gray-100">
                        {user.name}
                      </div>
                      <div className="text-xs text-gray-500">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-medium">
                    {user.role}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium">
                    {user.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <button className="text-gray-400 hover:text-blue-500 transition-colors">
                      <FiEdit2 />
                    </button>
                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                      <FiTrash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md p-6">
            <h3 className="text-xl font-bold mb-4">Add New User</h3>
            {/* Form Placeholder */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
              />
              <select className="w-full p-3 rounded-lg border dark:bg-gray-700 dark:border-gray-600">
                <option value="ADMIN">Admin</option>
                <option value="EDITOR">Editor</option>
              </select>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-lg"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                Create User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
