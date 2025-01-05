import React, { useEffect, useState } from 'react'

export default function Loca2AllTable() {
    const [error, setError] = useState('')

    const [index1, setIndex1] = useState('');
    const [index2, setIndex2] = useState('');
    const [index3, setIndex3] = useState('');
    const [index4, setIndex4] = useState('');
    const [index5, setIndex5] = useState('');
    const [index6, setIndex6] = useState('');
    const [index7, setIndex7] = useState('');

    const headers = ["Gထွက်","လက်ကား","လက်လီ","ကားအော်ဒါ","အဝင်","ငွေကိုင်","ကားတင်"];

    useEffect(() => {
        try {
            const fetchIndex = async () => {
                const [res1, res2, res3, res4, res5, res6, res7] = await Promise.all([
                    fetch('https://dashboard-yfuz.onrender.com/api/gout_two'),
                    fetch('https://dashboard-yfuz.onrender.com/api/salesIn_two'),
                    fetch('https://dashboard-yfuz.onrender.com/api/saleOut_two'),
                    fetch('https://dashboard-yfuz.onrender.com/api/carOrder_two'),
                    fetch('https://dashboard-yfuz.onrender.com/api/orderIn_two'),
                    fetch('https://dashboard-yfuz.onrender.com/api/cashier_two'),
                    fetch('https://dashboard-yfuz.onrender.com/api/cargo_two'),
                ])
                if (!res1.status === 200 ||!res2.status === 200 ||!res3.status === 200 ||
                    !res4.status === 200 ||!res5.status === 200 ||!res6.status === 200 ||
                    !res7.status === 200
                ) {
                    throw new Error('Not response api');
                }
                const data1 = await res1.json();
                const data2 = await res2.json();
                const data3 = await res3.json();
                const data4 = await res4.json();
                const data5 = await res5.json();
                const data6 = await res6.json();
                const data7 = await res7.json();
                
                setIndex1(data1); setIndex2(data2); setIndex3(data3); setIndex4(data4);
                setIndex5(data5); setIndex6(data6); setIndex7(data7);
            }
            fetchIndex();
        } catch (error) {
            setError(error);
        }
    }, []);

  return (
    <div className='overflow-x-auto'>
        <table className='table-auto w-full border-collapse border-gray-300 text-center'>
            <thead className='bg-blue-400 hover:bg-green-400 transition-all duration-500 ease-in-out'>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index} className='px-0 py-2 text-xs text-white'>
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                    {index1.length||index2.length||index3.length||index4.length||
                        index5.length||index6.length||index7.length > 0? (
                            <tr>
                                <td className='cursor-pointer'>
                                    <div className='py-2 flex justify-center text-blue-600'>
                                        <p className='flex justify-center items-center w-8 h-8 bg-sky-100 rounded-full'>{index1.length - 1+1}</p>
                                    </div>
                                </td>
                                <td className='cursor-pointer'>
                                    <div className='py-2 flex justify-center text-blue-600'>
                                        <p className='flex justify-center items-center w-8 h-8 bg-sky-100 rounded-full'>{index2.length - 1+1}</p>
                                    </div>
                                </td>
                                <td className='cursor-pointer'>
                                    <div className='py-2 flex justify-center text-blue-600'>
                                        <p className='flex justify-center items-center w-8 h-8 bg-sky-100 rounded-full'>{index3.length - 1+1}</p>
                                    </div>
                                </td>
                                <td className='cursor-pointer'>
                                    <div className='py-2 flex justify-center text-blue-600'>
                                        <p className='flex justify-center items-center w-8 h-8 bg-sky-100 rounded-full'>{index4.length - 1+1}</p>
                                    </div>
                                </td>
                                <td className='cursor-pointer'>
                                    <div className='py-2 flex justify-center text-blue-600'>
                                        <p className='flex justify-center items-center w-8 h-8 bg-sky-100 rounded-full'>{index5.length - 1+1}</p>
                                    </div>
                                </td >
                                <td className='cursor-pointer'>
                                    <div className='py-2 flex justify-center text-blue-600'>
                                        <p className='flex justify-center items-center w-8 h-8 bg-sky-100 rounded-full'>{index6.length - 1+1}</p>
                                    </div>
                                </td>
                                <td className='cursor-pointer'>
                                    <div className='py-2 flex justify-center text-blue-600'>
                                        <p className='flex justify-center items-center w-8 h-8 bg-sky-100 rounded-full'>{index7.length - 1+1}</p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            <tr>
                                <td>{error}</td>
                            </tr>
                        )
                    }
            </tbody>
        </table>
    </div>
  )
}
