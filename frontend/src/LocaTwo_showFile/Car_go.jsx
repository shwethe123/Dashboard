import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Car_go() {
    const [carGo, setCarGo] = useState('');

    useEffect(() => {
        const fetchCarGo = async () => {
            const respons = await fetch('https://dashboard-yfuz.onrender.com/api/cargo_two');
            const data = await respons.json();
            setCarGo(data);
        };
        fetchCarGo();
    }, []);

  return (
    <>
    <div>
        <h3 className='text-base font-semibold p-2 bg-gray-900 text-white mb-2 cursor-pointer'>ကားတင်</h3>
        {
            Array.isArray(carGo) && carGo.length > 0 ? (carGo.map((carGo_data, index) => (
                <Link to={`/CarGo2/Edit/${carGo_data._id}`} key={carGo_data._id}>
                    <p className={`
                        rounded-md m-1
                            ${carGo_data.condition === 'condition1' ? 'bg-orange-300 border-l-4 border-indigo-500 ...' : ''} 
                            ${carGo_data.condition === 'condition2' ? 'bg-green-200 border-l-4 border-green-600 ...' : ''} 
                            ${carGo_data.condition === 'condition3' ? 'bg-green-500 border-l-4 border-green-800 ... text-white' : ''} 
                            ${carGo_data.condition === 'condition4' ? 'bg-green-700 border-spacing-4 border-red-300... text-white' : ''} 
                            ${carGo_data.condition === 'condition5' ? 'bg-red-500 text-white' : ''} 
                            ${carGo_data.condition === 'condition6' ? 'bg-red-400 border-l-4 border-red-600 ... text-white' : ''}
                            ${carGo_data.condition === 'condition7' ? 'bg-gray-700 border-l-4 border-black ... text-white' : ''}
                            ${carGo_data.condition === 'condition8' ? 'bg-black text-white' : ''} '} 
                            ${carGo_data.condition === 'condition9' ? 'bg-sky-100 border-l-4 border-green-600 text-black' : ''} '}
                        p-2 cursor-pointer font-bold
                    `}>({index + 1}) {carGo_data.Name}</p>
                </Link>
            ))) : (
                <div className='text-red-400'>! ကားတင် data မရှိပါ။</div>
            )
        }
    </div>
    </>
  )
}
