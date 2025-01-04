import React from 'react';

export default function Settings() {
  return (
    <div className="flex bg-gray-100 p-6 min-h-screen">
      <div className="flex-1 p-6">
        <div className="space-y-8">
          <section>
            <h3 className="text-3xl font-bold mb-4">Account Settings</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-lg mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full p-3 bg-gray-200 rounded-md border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-gray-200 rounded-md border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-lg mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 bg-gray-200 rounded-md border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter a new password"
                />
              </div>
              <button
                type="submit"
                className="w-full p-3 mt-4 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-semibold"
              >
                Save Changes
              </button>
            </form>
          </section>

          {/* Privacy Settings */}
          <section>
            <h3 className="text-3xl font-bold mb-4">Privacy Settings</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg">Allow Public Profile</span>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg">Share Activity Status</span>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
            </div>
          </section>

          {/* Theme Settings */}
          <section>
            <h3 className="text-3xl font-bold mb-4">Theme Settings</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg">Dark Mode</span>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg">Light Mode</span>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
            </div>
          </section>

          {/* Security Settings */}
          <section>
            <h3 className="text-3xl font-bold mb-4">Security Settings</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg">Two-Factor Authentication</span>
                <input type="checkbox" className="toggle-checkbox" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
