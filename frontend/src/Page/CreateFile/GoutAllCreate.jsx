import React, { useEffect, useState } from 'react'
import { BiX } from "react-icons/bi";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function GoutAllCreate({createClose}) {
    const navigate = useNavigate();
    const {id} = useParams();
    const [ag, setAg] = useState('');
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [score, setScore] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (id) {
            try {
                const fetchData = async () => {
                    const response = await axios.get(`https://dashboard-yfuz.onrender.com/api/allScore/${id}`);
                    if (response.status === 200) {
                        const data = response.data;
                        setAg(data.ag || '');
                        setName(data.name || '');
                        setLocation(data.location || '');
                        setScore(data.score || '')
                    }
                }
                fetchData();
            } catch (error) {
                setError('not response data in allScore', error);
            }
        }
    },[])

    const AddPost = async (e) => {
        e.preventDefault();
        try {
            if (!ag || !name || !location || !score) {
                setError('Input required, please try again');
            }else{
                let res;
                const newPost = {ag, name, location, score};
                if (id) {
                    res = await axios.patch(`https://dashboard-yfuz.onrender.com/api/allScore/${id}`, newPost);
                    if (res.status === 200) {
                        navigate('/GoutAllTable')
                    };
                } else {
                    res = await axios.post('https://dashboard-yfuz.onrender.com/api/allScore', newPost);
                    if (res.status === 201) {
                        createClose();
                    };
                }
            };
        } catch (error) {
            setError('Failed new create', error)
        };
    };

    const goBack = () => {
        navigate('/GoutAllTable')
    }


  return (
    <>
        <div className='bg-white w-2/6 mx-auto space-x-2 border-2 border-gray-200 rounded-lg shadow-lg'>
            <div className='flex justify-end pr-4 pt-4'>
                {!id && <p className='text-blue-500 text-3xl cursor-pointer hover:bg-gray-200 rounded-full' onClick={createClose}>
                    <BiX />
                </p>}
            </div>
            <div className='pl-10 pr-10 pb-10 space-y-6'>
                <h1 className="text-3xl font-bold mb-6">{id? 'Edit' : 'Create New'} User</h1>
                {error && (
                    <p className='text-red-500 border-2 border-red-400 bg-red-100 p-4'>{error}</p>
                )}
                <form action="" onSubmit={AddPost}>
                    <div className='flex justify-between  items-center'>
                        <label htmlFor="text" className="block text-sm font-medium text-gray-500 ">
                            AG
                        </label>
                        <div className="mt-2 w-96">
                            <input
                                value={ag}
                                onChange={(e) =>setAg(e.target.value)}
                                placeholder='AG'
                                name="AG"
                                type="text"
                                // required
                                className="block w-full rounded-sm bg-white px-3 py-2 text-base text-gray-500 outline outline-1 outline-blue-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-blue-400 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className='flex justify-between  items-center'>
                        <label htmlFor="Name" className="block text-sm font-medium text-gray-500">
                            Name
                        </label>
                        <div className="mt-2 w-96">
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Name'
                                name="Name"
                                type="text"
                                // required
                                className="block w-full rounded-sm bg-white px-3 py-2 text-base text-gray-500 outline outline-1 outline-blue-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-blue-400 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className='flex justify-between  items-center'>
                        <label htmlFor="Loca" className="block text-sm font-medium text-gray-500">
                            တည်နေရာ
                        </label>
                        <div className="mt-2 w-96">
                            <input
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder='တည်နေရာ'
                                name="Loca"
                                type="text"
                                // required
                                className="block w-full rounded-sm bg-white px-3 py-2 text-base text-gray-500 outline outline-1 outline-blue-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-blue-400 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className='flex justify-between  items-center'>
                        <label htmlFor="score" className="block text-sm font-medium text-gray-500">
                        ဒါဏ်ကြေး
                        </label>
                        <div className="mt-2 w-96">
                            <input
                                value={score}
                                onChange={(e) => setScore(e.target.value)}
                                placeholder='฿'
                                name="score"
                                type="number"
                                // required
                                className="block w-full rounded-sm bg-white px-3 py-2 text-base text-gray-500 outline outline-1 outline-blue-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-blue-400 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className='flex justify-between pt-4 items-center'>
                        <p onClick={goBack} className='bg-blue-600 font-bold cursor-pointer text-white pl-4 pr-4 p-2 rounded-full hover:bg-blue-500'>Back</p>
                        <button type='submit' className='bg-blue-600 font-bold text-white pl-4 pr-4 p-2 rounded-full hover:bg-blue-500'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}
