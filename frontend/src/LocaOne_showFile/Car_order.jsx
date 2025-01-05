import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Car_order() {

    const [ car_orders, setCar_order ] = useState([]);

    useEffect(() => {
        const car_orderFecth = async () => {
            const respons = await fetch('https://dashboard-yfuz.onrender.com/api/car_order');
            const data = await respons.json();
            setCar_order(data);
        };
        car_orderFecth();
    },[]);

  return (
    <>
        <div>
            <h3 className="text-base font-semibold p-2 bg-gray-900 text-white mb-2 cursor-pointer">ကားအော်ဒါ</h3>
            {
                car_orders.length && (car_orders.map((car_order, index) => (
                <Link to={`/CarOrder1/Edit/${car_order._id}`} key={car_order._id}>
                    <p className={`
                    rounded-lg m-1
                        ${car_order.condition === 'condition1' ? 'bg-orange-300 border-l-4 border-indigo-500 ...' : ''} 
                        ${car_order.condition === 'condition2' ? 'bg-green-200 border-l-4 border-green-600 ...' : ''} 
                        ${car_order.condition === 'condition3' ? 'bg-green-500 border-l-4 border-green-800 ... text-white' : ''} 
                        ${car_order.condition === 'condition4' ? 'bg-green-700 border-spacing-4 border-red-300... text-white' : ''} 
                        ${car_order.condition === 'condition5' ? 'bg-red-500 text-white' : ''} 
                        ${car_order.condition === 'condition6' ? 'bg-red-400 border-l-4 border-red-600 ... text-white' : ''}
                        ${car_order.condition === 'condition7' ? 'bg-gray-700 border-l-4 border-black ... text-white' : ''}
                        ${car_order.condition === 'condition8' ? 'bg-black text-white' : ''} 
                        ${car_order.condition === 'condition9' ? 'bg-sky-100 border-l-4 border-green-600 text-black' : ''} '}
                    p-2 cursor-pointer font-bold
                    `}>({index + 1}) {car_order.Name}</p>
                </Link>
                )))
            }
        </div>
    </>
  )
}
