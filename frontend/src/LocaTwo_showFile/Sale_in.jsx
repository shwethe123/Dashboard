import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Sale_in() {
    const [ saleIn, setSaleIn ] = useState('');

    useEffect(() => {
        const fetchSaleIn = async () => {
            const response = await fetch('http://localhost:8000/api/salesIn_two');
            const data =await response.json();
            setSaleIn(data);
        };
        fetchSaleIn();
    }, []);

  return (
    <>
    <div>
        <h3 className='text-base font-semibold p-2 bg-gray-900 text-white mb-2 cursor-pointer'>လက်လီပိုင်း</h3>
        {
            Array.isArray(saleIn) && saleIn.length > 0 ? (saleIn.map((saleIn_data, index) => (
                <Link to={`/SaleIn2/Edit/${saleIn_data._id}`} key={saleIn_data._id}>
                    <p className={`
                        rounded-md m-1
                            ${saleIn_data.condition === 'condition1' ? 'bg-orange-300 border-l-4 border-indigo-500 ...' : ''} 
                            ${saleIn_data.condition === 'condition2' ? 'bg-green-200 border-l-4 border-green-600 ...' : ''} 
                            ${saleIn_data.condition === 'condition3' ? 'bg-green-500 border-l-4 border-green-800 ... text-white' : ''} 
                            ${saleIn_data.condition === 'condition4' ? 'bg-green-700 border-spacing-4 border-red-300... text-white' : ''} 
                            ${saleIn_data.condition === 'condition5' ? 'bg-red-500 text-white' : ''} 
                            ${saleIn_data.condition === 'condition6' ? 'bg-red-400 border-l-4 border-red-600 ... text-white' : ''}
                            ${saleIn_data.condition === 'condition7' ? 'bg-gray-700 border-l-4 border-black ... text-white' : ''}
                            ${saleIn_data.condition === 'condition8' ? 'bg-black text-white' : ''} '} 
                            ${saleIn_data.condition === 'condition9' ? 'bg-sky-100 border-l-4 border-green-600 text-black' : ''} '}
                        p-2 cursor-pointer font-bold
                    `}>({index + 1}) {saleIn_data.Name}</p>
                </Link>
            ))) : (
                <p className='text-red-500'>! No data</p>
            )
        }
    </div>
    </>
  )
}