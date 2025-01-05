import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function audit() {

    const [ audits, setAudit ] = useState([]);

    useEffect(() => {
        const auditFecth = async () => {
            const respons = await fetch('https://dashboard-yfuz.onrender.com/api/audit');
            const data = await respons.json();
            setAudit(data);
        };
        auditFecth();
    },[]);

  return (
    <>
        <div>
            <h3 className="text-base font-semibold p-2 bg-gray-900 text-white mb-2 cursor-pointer">စက်ကိုင်</h3>
            {
                audits.length > 0 && (audits.map((audit, index) => (
                <Link to={`/Audit/Edit/${audit._id}`} key={audit._id}>
                    <p className={`
                        rounded-lg m-1
                        ${audit.condition === 'condition1' ? 'bg-orange-300 border-l-4 border-indigo-500 ...' : ''} 
                        ${audit.condition === 'condition2' ? 'bg-green-200 border-l-4 border-green-600 ...' : ''} 
                        ${audit.condition === 'condition3' ? 'bg-green-500 border-l-4 border-green-800 ... text-white' : ''} 
                        ${audit.condition === 'condition4' ? 'bg-green-700 border-spacing-4 border-red-300... text-white' : ''} 
                        ${audit.condition === 'condition5' ? 'bg-red-500 text-white' : ''} 
                        ${audit.condition === 'condition6' ? 'bg-red-400 border-l-4 border-red-600 ... text-white' : ''}
                        ${audit.condition === 'condition7' ? 'bg-gray-700 border-l-4 border-black ... text-white' : ''}
                        ${audit.condition === 'condition8' ? 'bg-black text-white' : ''} '} 
                        ${audit.condition === 'condition9' ? 'bg-sky-100 border-l-4 border-green-600 text-black' : ''} '}
                    p-2 cursor-pointer font-bold
                    `}>({index + 1}) {audit.Name}</p>
                </Link>
                )))
            }
        </div>
    </>
  )
}
