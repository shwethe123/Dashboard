import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
  const {id} = useParams();
  const [gOutScore1, setGOutScore1 ] = useState('');
  const [error, setError ] = useState(null);

  useEffect(() => {
      const fetchGOutScroe1 = async () => {
        try {
              const fetchResponse = await fetch('https://dashboard-yfuz.onrender.com/api/score');
            if (!fetchResponse.ok) {
              throw new Error('Not fetchResponse your API');
            };
            const data = await fetchResponse.json();
            setGOutScore1(data);
        } catch (error) {
          setError('Error fetching data');
        }
      };
      fetchGOutScroe1();
  }, [setGOutScore1])

  return (
    <>
    <div className=" text-gray-800  pl-60 pt-48 w-2/3 min-h-screen ">
      <h1 className="text-3xl text-white p-2 bg-black text-center">User Management</h1>

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
                {Array.isArray(gOutScore1) && gOutScore1.length > 0 ? (
                    gOutScore1.map((gOut1_data, index) => (
                    <tr key={gOut1_data._id} className="bg-white hover:bg-gray-100">
                        <td className="py-3 px-6 text-sm text-gray-800">{gOut1_data.ag}</td>
                        <td className="py-3 px-6 text-sm text-gray-800">{gOut1_data.row}</td>
                        <td className="py-3 px-6 text-sm text-gray-800">{gOut1_data.loca}</td>
                        <td className="py-3 px-6 text-sm text-gray-800">{gOut1_data.score}</td>
                        <td className="py-3 px-6 text-sm flex space-x-4">
                        <button className="text-blue-500 hover:text-blue-600">Edit</button>
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
    </div>
    </>
  );
}
