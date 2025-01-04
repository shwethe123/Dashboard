import React, { useState } from 'react';
import Loca1_score from '../GoutScoreFile/Loca1_score';

export default function Logout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);


  const handleLogout = () => {
    alert('You have been logged out');
  };


  return (
    <div className="bg-gray-100 h-screen text-gray-800 flex justify-center items-center">


      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-6 text-gray-900">Are you sure you want to log out?</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="py-3 px-6 bg-red-500 hover:bg-red-600 rounded-lg text-white font-semibold"
        >
          Log Out
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
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
