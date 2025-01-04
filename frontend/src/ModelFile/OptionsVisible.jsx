import React, { useState } from 'react';
import { FcMenu } from "react-icons/fc";
import { Link } from 'react-router-dom';

export default function OptionsVisible() {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [isParmitModel, setIsParmitModel] = useState(false);

  const toggleOptions = () => {
    setIsOptionsVisible(!isOptionsVisible);
  };

  const openParmitModel = () => {
    setIsParmitModel(!isParmitModel);
    setIsOptionsVisible(false);
  };

  return (
    <div className="text-lg cursor-pointer">
      <FcMenu onClick={toggleOptions} />
      {isOptionsVisible && (
        <div className="absolute mt-2 w-40 p-4 bg-white shadow-lg rounded-lg select-none">
          <ul>
            <Link to={'/LocaOne'}>
            <li className="py-2 px-4 text-gray-700 cursor-pointer hover:bg-gray-200">Edit</li>
            </Link>
            <li onClick={openParmitModel} className="py-2 px-4 text-gray-700 cursor-pointer hover:bg-gray-200">
              See More
            </li>
            <li onClick={toggleOptions} className="py-2 px-4 text-gray-700 cursor-pointer hover:bg-gray-200">
              Cancel
            </li>
          </ul>
        </div>
      )}

      {isParmitModel && (
        <div className="fixed top-0 left-0 right-0 bottom-52 ml-64 mr-2 flex items-center justify-center bg-black bg-opacity-5">
          <div className="w-full h-96 bg-white flex items-center justify-center rounded-lg">
            <button className="bg-purple-600 px-6 py-2 text-white" onClick={openParmitModel}>
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
