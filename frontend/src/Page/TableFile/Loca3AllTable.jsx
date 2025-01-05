import React, { useEffect, useState } from 'react'

export default function Loca3AllTable() {

    const headers = ['Gထွက်','စလစ်မြို့ပြင်','မြို့တွင်းရောင်း','ကားအော်ဒါ','ငွေကိုင်']
    const [error, setError] = useState('');

    const [index1, setIndex1] = useState('');
    const [index2, setIndex2] = useState('');
    const [index3, setIndex3] = useState('');
    const [index4, setIndex4] = useState('');
    const [index5, setIndex5] = useState('');

    useEffect(() => {
        try {
            const fetchForIndex = async () => {
                const [indexRes1, indexRes2, indexRes3,indexRes4,indexRex5] = await
                Promise.all([
                    fetch('https://dashboard-yfuz.onrender.com/api/gout_three'),
                    fetch('https://dashboard-yfuz.onrender.com/api/salesIn_three'),
                    fetch('https://dashboard-yfuz.onrender.com/api/saleOut_three'),
                    fetch('https://dashboard-yfuz.onrender.com/api/carOrder_three'),
                    fetch('https://dashboard-yfuz.onrender.com/api/cashier_three'),
                ]);
                if (!indexRes1.status === 200 ||!indexRes2.status === 200||!indexRes3.status === 200
                    || !indexRes4.status ==200 || !indexRex5.status === 200 ) {
                    throw new Error('Not response API.')
                };
                const data1 = await indexRes1.json();
                const data2 = await indexRes2.json();
                const data3 = await indexRes3.json();
                const data4 = await indexRes4.json();
                const data5 = await indexRex5.json();
                setIndex1(data1); setIndex2(data2); setIndex3(data3); setIndex4(data4); setIndex5(data5);
            };
            fetchForIndex();
        } catch (error) {
            setError(error)
        }
    },[])

  return (
    <div className='overflow-x-auto'>
        <table className='table-auto w-full border-collapse text-center'>
            <thead className='bg-blue-400 hover:bg-green-400 transition-all duration-500 ease-in-out'>
                <tr>
                    {headers.map((header,index) => (
                        <th key={index} className='px-0 py-2 text-xs text-white'>
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                    {index1.length||index2.length||index3.length||index4.length||index5.length
                        > 0? (
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
                                    <div className="py-2 flex justify-center text-blue-600">
                                     <p className='flex justify-center items-center w-8 h-8 bg-sky-100 rounded-full'>{index4.length - 1+1}</p>
                                    </div>
                                </td>
                                <td className='cursor-pointer'>
                                    <div className='py-2 flex justify-center text-blue-600'>
                                        <p className='flex justify-center items-center w-8 h-8 bg-sky-100 rounded-full'>{index5.length - 1+1}</p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            <tr>
                                <td>Loading.......</td>
                            </tr>
                        )
                    }
            </tbody>
        </table>
    </div>
  )
}
