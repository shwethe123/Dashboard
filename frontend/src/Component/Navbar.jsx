import React from 'react';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-16 px-6 bg-white shadow-sm border-b border-gray-900">
      {/* Left section: Dashboard Title */}
      <div className="flex items-center ">
        <h1 className="text-2xl font-bold">My Dashboard</h1>
      </div>

      {/* Center section: Overview Title */}
      <div className="text-center flex-grow">
        <h2 className="text-3xl font-semibold">Overview</h2>
      </div>

      {/* Right section: Profile Image */}
      <div className="flex items-center">
        <img 
          src="https://www.techsmith.com/blog/wp-content/uploads/2022/03/resize-image.png" 
          alt="User Avatar" 
          width="40" 
          height="40" 
          className="rounded-full" 
        />
      </div>
    </div>
  );
}
