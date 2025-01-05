import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Chack() {
  const [chack, setChack] = useState([]);

  useEffect(() => {
    const fetchChack = async () => {
      const response = await fetch('https://dashboard-yfuz.onrender.com/api/chack');
      const data = await response.json();
      setChack(data);
      // console.log(data);
    };

    fetchChack();
  }, []);

  return (
    <div>
      <h3 className="text-base font-semibold p-2 bg-gray-900 text-white mb-2 cursor-pointer">စီစစ်ရေး</h3>
      {chack.map((data, index) => (
        <Link to={`/Chack/Edit/${data._id}`} key={data._id}>
              <p className={`
                rounded-lg m-1
                    ${data.condition === 'condition1' ? 'bg-orange-300 border-l-4 border-indigo-500 ...' : ''} 
                    ${data.condition === 'condition2' ? 'bg-green-200 border-l-4 border-green-600 ...' : ''} 
                    ${data.condition === 'condition3' ? 'bg-green-500 border-l-4 border-green-800 ... text-white' : ''} 
                    ${data.condition === 'condition4' ? 'bg-green-700 border-spacing-4 border-red-300... text-white' : ''} 
                    ${data.condition === 'condition5' ? 'bg-red-500 text-white' : ''} 
                    ${data.condition === 'condition6' ? 'bg-red-400 border-l-4 border-red-600 ... text-white' : ''}
                    ${data.condition === 'condition7' ? 'bg-gray-700 border-l-4 border-black ... text-white' : ''}
                    ${data.condition === 'condition8' ? 'bg-black text-white' : ''} 
                    ${data.condition === 'condition9' ? 'bg-sky-100 border-l-4 border-green-600 text-black' : ''} '}
                p-2 cursor-pointer font-bold
              `}>({index + 1}) {data.Name}</p>
        </Link>
      ))}
    </div>
  );
}
