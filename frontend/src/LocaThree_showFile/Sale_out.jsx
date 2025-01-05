import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Sale_out() {
    const [saleOut, setSaleOut ] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchSaleOut = async () => {
            try {
                const response = await fetch('https://dashboard-yfuz.onrender.com/api/saleOut_three');
                if (!response.ok) {
                    throw new Error('not response api');
                };
                const data = await response.json();
                setSaleOut(data);
            } catch (error) {
                console.error('Error fetching saleOut data:', error);
            }
        };
        fetchSaleOut();
    }, [setSaleOut]);

  return (
    <>
    <div>
    <h3 className='text-base font-semibold p-2 bg-gray-900 text-white mb-2 cursor-pointer'>လက်ကားပိုင်း</h3>
        {
            Array.isArray(saleOut) && saleOut.length > 0 ? (saleOut.map((saleOutData, index) => (
                <Link to={`/Sale_out3/Edit/${saleOutData._id}`} key={saleOutData._id}>
                    <p className='text-red-500'>{error}</p>
                    <p className={`
                        rounded-md m-1
                            ${saleOutData.condition === 'condition1' ? 'bg-orange-300 border-l-4 border-indigo-500 ...' : ''} 
                            ${saleOutData.condition === 'condition2' ? 'bg-green-200 border-l-4 border-green-600 ...' : ''} 
                            ${saleOutData.condition === 'condition3' ? 'bg-green-500 border-l-4 border-green-800 ... text-white' : ''} 
                            ${saleOutData.condition === 'condition4' ? 'bg-green-700 border-spacing-4 border-red-300... text-white' : ''} 
                            ${saleOutData.condition === 'condition5' ? 'bg-red-500 text-white' : ''} 
                            ${saleOutData.condition === 'condition6' ? 'bg-red-400 border-l-4 border-red-600 ... text-white' : ''}
                            ${saleOutData.condition === 'condition7' ? 'bg-gray-700 border-l-4 border-black ... text-white' : ''}
                            ${saleOutData.condition === 'condition8' ? 'bg-black text-white' : ''} '} 
                            ${saleOutData.condition === 'condition9' ? 'bg-sky-100 border-l-4 border-green-600 text-black' : ''} '}
                        p-2 cursor-pointer font-bold
                    `}>({index + 1}) {saleOutData.Name}</p>
                </Link>
            ))) : (
                <p className='text-red-500'>!No Data</p>
            )
        }
    </div>
    </>
  )
}
