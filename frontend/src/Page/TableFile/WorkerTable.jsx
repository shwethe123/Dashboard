import React, { useEffect, useState } from "react";
import { BiAlignLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Logout() {
  const [worker, setWorker] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("https://dashboard-yfuz.onrender.com/api/worker");
        if (!response.ok) {
          throw new Error("Failed to fetch data from API");
        }
        const data = await response.json();
        setWorker(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchdata();
  }, []);

  const headers = [
    "တည်နေရာ",
    "အလုပ်ကြမ်း",
    "ကားနောက်လိုက်",
    "ဂိုဒေါင်မှူး",
    "ဦးထုပ်နီ",
    "ဦးထုပ်ပြာ",
  ];

  return (
    <div className="p-6 bg-gray-50 h-auto">
      <Link to={`/Worker/Edit/:id`} className="flex space-x-3">
        <BiAlignLeft className="text-sky-400 text-2xl" />
        <h1 className="text-1xl items-center font-bold mb-4 text-gray-700">Employee Data</h1>
      </Link>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 bg-white shadow-md">
          <thead className="bg-gray-100">
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left font-medium text-gray-600"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {worker.length > 0 ? (
              worker.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100`}
                >
                  <td className="flex px-6 py-4 ">
                    <Link  to={`/Worker/Edit/${item._id}`}>
                      <p className="pr-3 text-green-600 cursor-pointer hover:text-green-400">Edit</p>
                    </Link>
                    {item.loca || "N/A"}
                  </td>
                  <td className="px-6 py-4 ">
                    {item.hard_worker || "N/A"}
                  </td>
                  <td className="px-6 py-4 ">
                    {item.car_flaw || "N/A"}
                  </td>
                  <td className="px-6 py-4 ">
                    {item.d_w_h || "N/A"}
                  </td>
                  <td className="px-6 py-4 ">
                    {item.h_red || "N/A"}
                  </td>
                  <td className="px-6 py-4 ">
                    {item.h_blue || "N/A"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={headers.length}
                  className="px-6 py-4 text-center text-red-600 border border-gray-200"
                >
                  {error || "No data available"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
