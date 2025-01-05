import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function G_out() {
    const [ gOut, setGOut ] = useState('');
    
    useEffect(() => {
        const fetchGOut = async () => {
            const response = await fetch('https://dashboard-yfuz.onrender.com/api/gout_two');
            const data = await response.json();
            setGOut(data);
        };
        fetchGOut();
    }, []);

  return (
    <>
    <div>
        <h3 className='text-base font-semibold p-2 bg-gray-900 text-white mb-2 cursor-pointer'>Gထွက်</h3>
        {
            Array.isArray(gOut) && gOut.length > 0 ? (gOut.map((gOut_data, index) => (
                <Link to={`/Gout2/Edit/${gOut_data._id}`} key={gOut_data._id}>
                    <p className={`
                        rounded-md m-1
                            ${gOut_data.condition === 'condition1' ? 'bg-orange-300 border-l-4 border-indigo-500 ...' : ''} 
                            ${gOut_data.condition === 'condition2' ? 'bg-green-200 border-l-4 border-green-600 ...' : ''} 
                            ${gOut_data.condition === 'condition3' ? 'bg-green-500 border-l-4 border-green-800 ... text-white' : ''} 
                            ${gOut_data.condition === 'condition4' ? 'bg-green-700 border-spacing-4 border-red-300... text-white' : ''} 
                            ${gOut_data.condition === 'condition5' ? 'bg-red-500 text-white' : ''} 
                            ${gOut_data.condition === 'condition6' ? 'bg-red-400 border-l-4 border-red-600 ... text-white' : ''}
                            ${gOut_data.condition === 'condition7' ? 'bg-gray-700 border-l-4 border-black ... text-white' : ''}
                            ${gOut_data.condition === 'condition8' ? 'bg-black text-white' : ''} '} 
                            ${gOut_data.condition === 'condition9' ? 'bg-sky-100 border-l-4 border-green-600 text-black' : ''} '}
                        p-2 cursor-pointer font-bold
                    `}>({index + 1}) {gOut_data.Name}</p>
                </Link>
            ))) : (
                <p className='text-red-500'>! Gထွက် data မရှိပါ။</p>
            )
        }
    </div>
    </>
  )
}
