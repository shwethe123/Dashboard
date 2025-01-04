import React from 'react';

const data = [
  { ag: "AG262", name: "အောင်ဇေဖြိုး", location: "ဆိုင်(၁)", score: 25 },
  { ag: "AG252", name: "နေမျိုးဦး", location: "ဆိုင်(၁)", score: 15 },
  { ag: "AM376", name: "စန္ဒာထွန်း", location: "ဆိုင်(၁)", score: 25 },
];

export default function Gout2Table({ getloca2 }) {
  return (
    <div className="overflow-x-auto p-4 bg-white rounded-xl shadow-md">
      <table className="min-w-full table-auto border-separate border-spacing-0">
        <thead>
          <tr className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <th className="px-6 py-4 text-left font-extrabold">AG</th>
            <th className="px-6 py-4 text-left font-extrabold">Name</th>
            <th className="px-6 py-4 text-left font-extrabold">Score</th>
            <th className="px-6 py-4 text-left font-extrabold">Location</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(getloca2) && getloca2.length > 0 ? (
            getloca2.map((item, index) => (
              <tr
                key={item._id}
                className={`hover:bg-gray-100 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-6 py-2 text-gray-800">{item.ag}</td>
                <td className="px-6 py-2 text-gray-800">{item.name}</td>
                <td className="px-6 py-2 text-gray-800">
                  <span
                    className={`flex justify-center w-14 rounded-full py-1 ${
                      item.score <= 10
                        ? "bg-green-200 text-green-500"
                        : item.score >= 11 && item.score <= 40
                        ? "bg-yellow-200 text-orange-400"
                        : item.score >= 41 && item.score <= 80
                        ? "bg-red-200 text-red-500"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {item.score} ฿
                  </span>
                </td>
                <td className="px-6 py-2 text-gray-800">{item.location}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4">
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
