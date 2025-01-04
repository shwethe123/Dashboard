import React, { useState } from 'react';

export default function ModalOpen() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    // Logout logic here
    console.log('User logged out');
    alert('User logged out');
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Main Content */}
      <div className="text-center">
        <p className="mb-4 text-lg font-medium text-gray-700">
          Are you sure you want to log out of your account?
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold"
        >
          Log Out
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg ml-60 shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4 text-gray-900">Confirm Logout</h2>
            <p className="text-sm text-gray-700 mb-6">
              Are you sure you want to log out of your account?
            </p>
            <div className="flex justify-between">
              <button
                onClick={handleLogout}
                className="py-2 px-6 bg-red-500 hover:bg-red-600 rounded-lg text-white font-semibold"
              >
                Yes, Log Out
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="py-2 px-6 bg-gray-300 hover:bg-gray-400 rounded-lg text-gray-800 font-semibold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
