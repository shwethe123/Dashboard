import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function G_out() {
  const [gOutData, setGOutData] = useState([]);
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle any potential errors

  useEffect(() => {
    const fetchGOutData = async () => {
      try {
        const response = await fetch('https://dashboard-yfuz.onrender.com/api/dashboard');{/* data fetch */}
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data)
        setGOutData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGOutData();
  }, []);

  if (loading) return <div>Loading...</div>; 
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h3 className="text-base font-semibold p-2 bg-gray-900 text-white mb-2 cursor-pointer">အဝင်ပိုင်း</h3>
            {gOutData.length > 0 ? (
              gOutData.map((item, index) => (
                <div key={item._id} className='flax'>
                  
                <Link to={`/G_edit/Edit/${item._id}`}>
                  <p className={`
                      rounded-md m-1 hover:bg-gray-100
                        ${item.condition === 'condition1' ? 'bg-orange-300 border-l-4 border-indigo-500 ...' : ''} 
                        ${item.condition === 'condition2' ? 'bg-green-200 border-l-4 border-green-600 ...' : ''} 
                        ${item.condition === 'condition3' ? 'bg-green-500 border-l-4 border-green-800 ... text-white' : ''} 
                        ${item.condition === 'condition4' ? 'bg-green-700 border-spacing-4 border-red-300... text-white' : ''} 
                        ${item.condition === 'condition5' ? 'bg-red-500 text-white' : ''} 
                        ${item.condition === 'condition6' ? 'bg-red-400 border-l-4 border-red-600 ... text-white' : ''}
                        ${item.condition === 'condition7' ? 'bg-gray-700 border-l-4 border-black ... text-white' : ''}
                        ${item.condition === 'condition8' ? 'bg-black text-white' : ''} 
                        ${item.condition === 'condition9' ? 'bg-sky-100 border-l-4 border-green-600 text-black' : ''} '}
                      p-2 cursor-pointer font-bold
                    `}>
                    ({index+1}) {item.Name}
                  </p>
                </Link>
          </div>
        ))
      ) : (
        <div>No data available</div> // In case the response is empty
      )}
    </div>
  );
}
