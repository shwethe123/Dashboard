import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Gout2Table() {

    const [GoutData2, setGoutData2] = useState('');
    const [ isDeletModal, setIsDeletModal ] = useState(false);

    useEffect(() => {
        const fetchData2 = async () => {
            const response = await fetch('https://dashboard-yfuz.onrender.com/api/score2');
            if (!response.status === 200) {
                throw new Error('Not fetchResponse your API')
            };
            const data = await response.json();
            setGoutData2(data);
        };
        fetchData2();
    }, [setGoutData2]);

    const delete_buttom = () => {
        setIsDeletModal(!isDeletModal);
    }

  return (
    <div className="bg-gray-100 text-gray-800 p-6 min-h-screen">
    <h1 className="text-3xl font-bold mb-6">User Management</h1>

    <div className="mb-6">
      <input
        type="text"
        placeholder="Search users..."
        className="w-full p-3 bg-white rounded-md border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div className="overflow-x-auto bg-gray-100 rounded-lg shadow-md">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Name/AG</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">အတန်း</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">တည်နေရာ</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">ဒါဏ်ကြေး</th>
            <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
            {Array.isArray(GoutData2) && GoutData2.length > 0 ? (
                GoutData2.map((gOut2_data, index) => (
                <tr key={gOut2_data._id} className="bg-white hover:bg-gray-100">
                    <td className="py-3 px-6 text-sm text-gray-800">{gOut2_data.ag}</td>
                    <td className="py-3 px-6 text-sm text-gray-800">{gOut2_data.row}</td>
                    <td className="py-3 px-6 text-sm text-gray-800">{gOut2_data.loca}</td>
                    <td className="py-3 px-6 text-sm text-gray-800">{gOut2_data.score}</td>
                    <td className="py-3 px-6 text-sm flex space-x-4">
                      <Link to={`/GoutScore2/Edit/${gOut2_data._id}`} className="text-blue-500 hover:text-blue-600">Edit</Link>
                      <button onClick={delete_buttom} className="text-red-500 hover:text-red-600">Delete</button>
                    </td>
                </tr>
                ))
            ) : (
                <tr>
                <td colSpan="5" className="py-3 px-6 text-center text-red-700 text-lg">
                    !No Data
                </td>
                </tr>
            )}
          </tbody>
      </table>
    </div>

    {isDeletModal && (
        <div className='fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50'>
            <div className='bg-white w-60 h-32 rounded-lg flex-col text-center pt-4 justify-center text-red-500 text-xl'>
                <p>! ဖျက်ခွင့်မရှိပါ</p>
                <button onClick={()=> setIsDeletModal(false)} className='bg-purple-600 rounded-md w-20 text-white mt-6'>OK</button>
            </div>
        </div>
      )}

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
  )
}
