import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcWiFiLogo } from 'react-icons/fc';

export default function WifiGet() {
  const [wifiData, setWifiData] = useState([]);
  const [selectedId, setSelectedId] = useState(1110);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to calculate time difference
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
    const fetchWifiData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch('http://localhost:8000/api/wifi');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const filteredData = data.filter((item) => item.Id === selectedId);
        setWifiData(filteredData);
      } catch (err) {
        setError(`Error fetching data: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchWifiData();
  }, [selectedId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="wifi-container">
          {wifiData.length > 0 ? (
            wifiData.map((item) => (
              <div
                key={item._id}
                className="flex justify-between p-2 border-2 border-white bg-white text-black pl-3 pt-3 pb-3 rounded-xl shadow-sm hover:shadow-md"
              >
                <div className="sm:mb-0">
                  <div className="flex items-center space-x-2">
                    <FcWiFiLogo className="text-4xl" />
                    <p>{item.loca}</p>
                  </div>
                  <h4 className="text-xl font-medium mb-2">Total Day</h4>
                  <p className="text-gray-400 w-32 font-semibold text-sm">
                    {getTimeDifference(item.update_date, new Date())}
                  </p>
                </div>

                <div className="flex-col text-end items-center sm:items-start m-2">
                  <h3 className="text-lg font-medium">{item.name} Network</h3>
                  <p>ID: {item.Id}</p>
                  <div className='flex justify-between items-center space-x-2'>
                    <p className="text-sm mt-1 text-gray-400">{item.remark}</p>
                    <p
                      className={`text-sm mt-1 ${
                        new Date(item.update_date) > new Date()
                          ? 'text-green-500'
                          : 'text-red-400 text font-bold'
                      }`}
                    >
                      {new Date(item.update_date) > new Date()
                        ? 'Active Now'
                        : 'Inactive'}
                    </p>
                  </div>
                  <Link
                    to={`/WifiCreate/Edit/${item._id}`}
                    className="flex justify-end pt-3 cursor-pointer"
                  >
                    <p className="bg-purple-600 pr-2 w-10 text-white rounded-md">
                      Edit
                    </p>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No data available.</p>
          )}
        </div>
      )}
    </div>
  );
}