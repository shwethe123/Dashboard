import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcWiFiLogo } from "react-icons/fc";

export default function IQNet() {
  const [getTime, setGetTime] = useState([]);
  const [selectedId, setSelectedId] = useState(1004);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getTimeDifference = (updateDate, createdAt) => {
    const update = new Date(updateDate);
    const created = new Date(createdAt);
    const diffInMs = update - created;
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    return `${diffInDays} days, ${diffInHours % 24} hours, ${diffInMinutes % 60} minutes`;
  };

  useEffect(() => {
    const fetchLocoData = async () => {
      setLoading(true);
      setError(null);

      try {
        const wifiData = await fetch('https://dashboard-yfuz.onrender.com/api/wifi');

        if (!wifiData.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await wifiData.json();
        const filteredData = data.filter((item) => item.Id === selectedId);
        setGetTime(filteredData);
      } catch (error) {
        setError('Error fetching data: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLocoData();
  }, [selectedId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="">
          {getTime.length > 0 ? (
            getTime.map((item) => (
            <div key={item._id} className="flex justify-between p-2 bg-white text-black pl-3 pt-3 pb-3 rounded-xl shadow-sm hover:shadow-md">
              {/* Left section: Total Day */}
              <div className="sm:mb-0">
                  <div className='flex items-center space-x-2'>
                    <FcWiFiLogo className='text-4xl'/>
                    <p>{item.loca}</p>
                  </div>
                  <h4 className="text-xl font-medium mb-2">Total Day</h4>
                <p className="text-gray-400 w-32 font-semibold text-sm">
                  {getTimeDifference(item.update_date, new Date())}
                </p>
              </div>


              <div className='flex-col text-end items-center sm:items-start m-2'>
                <h3 className="text-lg font-medium">{item.name} Network</h3>
                <p>ID : {item.Id}</p>
                <p className={`text-sm mt-1 ${new Date(item.update_date) > new Date() 
                  ? 'text-green-500' : 'text-red-500 font-bold'
                }`}>{new Date(item.update_date) > new Date() ? 'Active Now' : 'Inactive'}</p>
                <Link to={`/WifiCreate/Edit/${item._id}`} className='flex justify-end pt-3 cursor-pointer'>
                  <p className='bg-purple-600 pr-2 w-10 text-white rounded-md'>Edit</p>
                </Link>
              </div>
            </div>

            ))
          ) : (
            <p>! ဒေတာ မရှိပါ။</p>
          )}
        </div>
      )}
    </div>
  );
}
