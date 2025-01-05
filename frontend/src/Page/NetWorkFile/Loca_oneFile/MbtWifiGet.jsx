import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function MbtWifiGet() {
  const [getTime, setGetTime] = useState([]);
  const [selectedNetwork, setSelectedNetwork] = useState("MBT");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to calculate the time difference between two dates
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
        const filteredData = data.filter((item) => item.name === selectedNetwork);
        setGetTime(filteredData);
      } catch (error) {
        setError('Error fetching data: ' + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLocoData();
  }, [selectedNetwork]);

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
              <div key={item._id} className="space-x-10 flex justify-between bg-gradient-to-r from-green-500 to-lime-400 text-white pl-3 pt-3 pb-3 rounded-xl shadow-lg hover:shadow-xl cursor-pointer">
                <div>
                  <h3 className="text-xl font-medium mb-2">Total Day</h3>
                  <p className="text-white font-semibold">
                    {getTimeDifference(item.update_date, new Date())}
                  </p>
                </div>
                <Link to={`/wifiCreate/Edit/${item._id}`} className=' cursor-pointer m-2'>
                  <h3 className="text-lg font-medium">
                    {item.name} Network
                  </h3>
                  <p className="text-sm mt-1">Active Now</p>
                </Link>
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
