import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Sale_in() {
  const [saleInData, setSaleInData] = useState([]);

  useEffect(() => {
    const fetchSaleInData = async () => {
      const response = await fetch('https://dashboard-yfuz.onrender.com/api/sales_in');
      const data = await response.json();
      setSaleInData(data);
    };

    fetchSaleInData();
  }, []);

  return (
    <div>
      <h3 className="text-base font-semibold p-2 bg-gray-900 text-white mb-2 cursor-pointer">လက်ကား</h3>
      {saleInData.map((item, index) => (
        <div key={item._id}>
          <Link to={`/Sale_in_edit/edit/${item._id}`}>
          <p className={`
              rounded-lg m-1 font-bold
                ${item.condition === 'condition1' ? 'bg-orange-300 border-l-4 border-indigo-500 ...' : ''} 
                ${item.condition === 'condition2' ? 'bg-green-200 border-l-4 border-green-600 ...' : ''} 
                ${item.condition === 'condition3' ? 'bg-green-500 border-l-4 border-green-800 ... text-white' : ''} 
                ${item.condition === 'condition4' ? 'bg-green-700 border-spacing-4 border-red-300... text-white' : ''} 
                ${item.condition === 'condition5' ? 'bg-red-500 text-white' : ''} 
                ${item.condition === 'condition6' ? 'bg-red-400 border-l-4 border-red-600 ... text-white' : ''}
                ${item.condition === 'condition7' ? 'bg-gray-700 border-l-4 border-black ... text-white' : ''}
                ${item.condition === 'condition8' ? 'bg-black text-white' : ''}
                ${item.condition === 'condition9' ? 'bg-sky-100 border-l-4 border-green-600 text-black' : ''} '}
              p-2 cursor-pointer
          `}>({index + 1}) {item.Name}</p>
          </Link >
        </div>
      ))}
    </div>
  );
}
