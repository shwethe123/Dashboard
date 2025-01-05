import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Accounting() {

    const [ accountings, setAccounting ] = useState([]);

    useEffect(() => {
        const AccountingFecth = async () => {
            const respons = await fetch('https://dashboard-yfuz.onrender.com/api/accounting');
            const data = await respons.json();
            setAccounting(data);
        };
        AccountingFecth();
    },[]);

  return (
    <>
        <div>
            <h3 className="text-base font-semibold p-2 bg-gray-900 text-white mb-2 cursor-pointer">စာရင်းကိုင်</h3>
            {
                accountings.length && (accountings.map((accounting, index) => (
                <Link to={`/Account/Edit/${accounting._id}`} key={accounting._id}>
                    <p className={`
                        rounded-md m-1
                            ${accounting.condition === 'condition1' ? 'bg-orange-300 border-l-4 border-indigo-500 ...' : ''} 
                            ${accounting.condition === 'condition2' ? 'bg-green-200 border-l-4 border-green-600 ...' : ''} 
                            ${accounting.condition === 'condition3' ? 'bg-green-500 border-l-4 border-green-800 ... text-white' : ''} 
                            ${accounting.condition === 'condition4' ? 'bg-green-700 border-spacing-4 border-red-300... text-white' : ''} 
                            ${accounting.condition === 'condition5' ? 'bg-red-500 text-white' : ''} 
                            ${accounting.condition === 'condition6' ? 'bg-red-400 border-l-4 border-red-600 ... text-white' : ''}
                            ${accounting.condition === 'condition7' ? 'bg-gray-700 border-l-4 border-black ... text-white' : ''}
                            ${accounting.condition === 'condition8' ? 'bg-black text-white' : ''} '} 
                            ${accounting.condition === 'condition9' ? 'bg-sky-100 border-l-4 border-green-600 text-black' : ''} '}
                        p-2 cursor-pointer font-bold
                    `}>({index + 1}) {accounting.Name}</p>
                    </Link>
                )))
            }
        </div>
    </>
  )
}
