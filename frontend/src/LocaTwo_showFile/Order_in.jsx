import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Order_in() {
    const[ orderIn, setOrderIn ] = useState('');
    
    useEffect(() => {
        const fetchOrderIn = async () => {
            const response = await fetch('https://dashboard-yfuz.onrender.com/api/orderIn_two');
            const data = await response.json();
            setOrderIn(data);
        };
        fetchOrderIn();
    }, []);

  return (
    <>
    <div>
        <h3 className='text-base font-semibold p-2 bg-gray-900 text-white mb-2 cursor-pointer'>အဝင်ပိုင်း</h3>
        {
            Array.isArray(orderIn) && orderIn.length > 0 ? (orderIn.map((orderIn_data, index) => (
                <Link to={`/OrderIn_loc2/Edit/${orderIn_data._id}`} key={orderIn_data._id}>
                    <p className={`
                        rounded-md m-1
                            ${orderIn_data.condition === 'condition1' ? 'bg-orange-300 border-l-4 border-indigo-500 ...' : ''} 
                            ${orderIn_data.condition === 'condition2' ? 'bg-green-200 border-l-4 border-green-600 ...' : ''} 
                            ${orderIn_data.condition === 'condition3' ? 'bg-green-500 border-l-4 border-green-800 ... text-white' : ''} 
                            ${orderIn_data.condition === 'condition4' ? 'bg-green-700 border-spacing-4 border-red-300... text-white' : ''} 
                            ${orderIn_data.condition === 'condition5' ? 'bg-red-500 text-white' : ''} 
                            ${orderIn_data.condition === 'condition6' ? 'bg-red-400 border-l-4 border-red-600 ... text-white' : ''}
                            ${orderIn_data.condition === 'condition7' ? 'bg-gray-700 border-l-4 border-black ... text-white' : ''}
                            ${orderIn_data.condition === 'condition8' ? 'bg-black text-white' : ''} '} 
                            ${orderIn_data.condition === 'condition9' ? 'bg-sky-100 border-l-4 border-green-600 text-black' : ''} '}
                        p-2 cursor-pointer font-bold
                    `}>({index + 1}) {orderIn_data.Name}</p>
                </Link>
            ))) : (
                <p className='text-red-500'>! အဝင်ပိုင်း data မရှိပါ။</p>
            )
        }
    </div>
    </>
  )
}
