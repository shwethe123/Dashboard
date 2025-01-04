import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [active, setActive] = useState("/");

  return (
    <div>
      <nav className="h-screen w-60 bg-white shadow-xl text-gray-800 flex flex-col">

        <ul className="flex-1 overflow-y-auto pt-2">
          <li>
            <Link
              to="/"
              onClick={() => setActive("/")}
              className={`flex items-center px-4 py-3 cursor-pointer ${
                active === "/" ? "bg-blue-500 mr-4 ml-4 rounded-md border-solid border-2 text-white border-gray-200" : "hover:bg-blue-200 mr-4 ml-4 rounded-md"
              }`}
            >
              🏠 Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/User"
              onClick={() => setActive("/User")}
              className={`flex items-center px-4 py-3 cursor-pointer ${
                active === "/User" ? "bg-blue-500 mr-4 ml-4 rounded-md border-solid border-2 text-white border-gray-200" : "hover:bg-blue-200 mr-4 ml-4 rounded-md"
              }`}
            >
              👤 Users
            </Link>
          </li>
          <li>
            <Link
              to="/Settings"
              onClick={() => setActive("/Settings")}
              className={`flex items-center px-4 py-3 cursor-pointer ${
                active === "/Settings" ? "bg-blue-500 mr-4 ml-4 rounded-md border-solid border-2 text-white border-gray-200" : "hover:bg-sky-300 mr-4 ml-4 rounded-md"
              }`}
            >
              ⚙️ Settings
            </Link>
          </li>
          <li>
            <Link
              to="/Reports"
              onClick={() => setActive("/Reports")}
              className={`flex items-center px-4 py-3 cursor-pointer ${
                active === "/Reports" ? "bg-blue-500 mr-4 ml-4 rounded-md border-solid border-2 text-white border-gray-200" : "hover:bg-sky-300 mr-4 ml-4 rounded-md"
              }`}
            >
              📊 Reports
            </Link>
          </li>
          <li>
            <Link
              to="/Logout"
              onClick={() => setActive("/Logout")}
              className={`flex items-center px-4 py-3 cursor-pointer ${
                active === "/Logout" ? "bg-blue-500 mr-4 ml-4 rounded-md border-solid border-2 text-white border-gray-200" : "hover:bg-sky-300 mr-4 ml-4 rounded-md"
              }`}
            >
              🚪 Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
