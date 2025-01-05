import React, { useEffect, useState } from 'react'
import GoutAllCreate from '../../CreateFile/GoutAllCreate';
import { Link } from 'react-router-dom';
import { FcFolder } from "react-icons/fc";
import Gout1Table from '../GoutAllTable/Gout1Table';
import Gout2Table from '../GoutAllTable/Gout2Table';
import Gout3Table from '../GoutAllTable/Gout3Table';

export default function GoutAllTable() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isOpenCreate, setIsOpenCreate] = useState(false);
    const [fillterLocation, setFillterLocation] = useState('');
    const [loca1Filter, setLoca1Filter] = useState('ဆိုင်(၁)');
    const [getloca1, setGetLoca1] = useState([])
    const [loca2Filter, setLoca2Filter] = useState('ဆိုင်(၂)');
    const [getloca2, setGetLoca2] = useState([]);
    const [loca3Filter, setLoca3Filter] = useState('ဆိုင်(၃)');
    const [getloca3, setGetLoca3] = useState([]);

    const [gout1_show, setGout1_show] = useState(true);
    const [gout2_show, setGout2_show] = useState(false);
    const [gout3_show, setGout3_show] = useState(false);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await fetch('https://dashboard-yfuz.onrender.com/api/allScore');
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }else{
                    const data = await response.json();
                    setData(data);
                    const filter1loca = data.filter((item) => item.location === loca1Filter);
                    setGetLoca1(filter1loca);
                    const filter2loca = data.filter((item) => item.location === loca2Filter);
                    setGetLoca2(filter2loca);
                    const filter3loca = data.filter((item) => item.location === loca3Filter);
                    setGetLoca3(filter3loca);
                };
            };
            fetchData();
        } catch (error) {
            console.log(error);
        }
    },[loca1Filter,loca2Filter]);

    const chooseLocation = data.filter((report) => {
        return (
            (fillterLocation? report.location === fillterLocation : true)
        )
    });

    const openCreate = () => { 
        setIsOpenCreate(!isOpenCreate);
    };
    const createClose = () => {
        setIsOpenCreate(false);
    };

    const clickId = () => {
        console.log(data._id)
        setIsOpenCreate(!isOpenCreate);
    };

    const show_1 = () => {
        setGout1_show(true);
        setGout2_show(false);
        setGout3_show(false);
    }
    const show_2 = () => {
        setGout2_show(true);
        setGout1_show(false);
        setGout3_show(false);
    }
    const show_3 = () => {
        setGout1_show(false);
        setGout2_show(false);
        setGout3_show(true);
    }

    return (
        <div className='flex p-4 space-x-10 bg-white h-full'>
            <div className='flex-1'>
                <div className='flex justify-between'>
                    <h1 className="text-3xl font-bold mb-6">User Management</h1>
                    <button onClick={openCreate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-10 py-2 px-4 rounded-full">Add</button>
                </div>
                <div className='flex space-x-4'>
                    <select
                        id='location'
                        value={fillterLocation}
                        onChange={(e) => setFillterLocation(e.target.value)}
                        className="block w-full rounded-sm bg-white px-3 py-2 text-base text-gray-500 outline outline-1 outline-blue-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-blue-400 sm:text-sm mb-4"
                    >
                        <option value="">All</option>
                        <option value="ဆိုင်(၁)">ဆိုင်(၁)</option>
                        <option value="ဆိုင်(၂)">ဆိုင်(၂)</option>
                        <option value="ဆိုင်(၃)">ဆိုင်(၃)</option>
                    </select>
                    <input
                        type="text"
                        placeholder='Search'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="block w-full rounded-sm bg-white px-3 py-2 text-base text-gray-500 outline outline-1 outline-blue-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-blue-400 sm:text-sm mb-4"
                    />
                </div>
                <form action="" className="pt-6 h-5/6 bg-white rounded-lg pb-2 shadow-md">
                    <div style={{ maxHeight: '680px', overflow: 'auto'}}>
                    {Array.isArray(chooseLocation) && chooseLocation.length > 0 ? (
                        chooseLocation.map((item) => (
                            <div
                                key={item._id}
                                className="flex items-center text-sm justify-between m-4 border-b border-sky-100"
                            >
                                <div className="flex pb-2 space-x-20">
                                    <div className='flex items-center space-x-4'>
                                        <FcFolder  className='text-2xl'/>
                                        <p className={`text-gray-700
                                            ${item.location === 'ဆိုင်(၁)' ? 'bg-orange-100  text-orange-500 rounded-full pl-3 pr-3 pt-1 pb-1' : ''}
                                            ${item.location === 'ဆိုင်(၂)' ? 'bg-red-100  text-red-500 rounded-full pl-3 pr-3 pt-1 pb-1' : ''}
                                            ${item.location === 'ဆိုင်(၃)' ? 'bg-green-100  text-green-600 rounded-full pl-3 pr-3 pt-1 pb-1' : ''}
                                            `}>{item.location}</p>
                                    </div>
                                    <p className={`font-medium flex w-16 justify-center items-center text-gray-700
                                        ${item.ag.includes('AM')  ? 'bg-pink-100 text-purple-500 rounded-full pl-2 pr-2' : ''}
                                        ${item.ag.includes('AG') ? 'bg-blue-100 text-blue-400 rounded-full pl-2 pr-2' : ''}
                                        `}>{item.ag}</p>
                                    <p className="text-gray-700">{item.name}</p>
                                </div>
                                <div className='flex space-x-16'>
                                    <p className='text-gray-400'>{item.updatedAt}</p>
                                    <Link to={`/GoutAllCreate/Edit/${item._id}`}>
                                    <p
                                        onClick={clickId}
                                        className="pl-2 text-sky-500 pr-2 font-bold cursor-pointer hover:underline hover:bg-gray-100 rounded-full"
                                    >
                                        Edit
                                    </p>
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex justify-center py-6">
                        <p className="text-red-500">No data found</p>
                        </div>
                    )}
                    </div>
                </form>

            </div>
            <div className='flex-1'>
                <div className='flex pl-2 pr-2 ml-4 mr-4 justify-between items-center'>
                    <h1 className="flex items-center text-3xl font-bold">Score Overview</h1>
                    <ul className='flex items-center justify-center space-x-4'>
                        <li onClick={show_1} className={`cursor-pointer hover:bg-blue-400 pt-1 pb-2 pr-2 pl-2 rounded-full hover:text-white ${gout1_show ? 'bg-blue-500 pt-1 pb-2 pr-2 pl-2 rounded-full text-white' : ''}`}>ဆိုင်(၁)</li>
                        <li onClick={show_2} className={`cursor-pointer hover:bg-blue-400 pt-1 pb-2 pr-2 pl-2 rounded-full hover:text-white ${gout2_show ? 'bg-blue-500 pt-1 pb-2 pr-2 pl-2 rounded-full text-white' : ''}`}>ဆိုင်(၂)</li>
                        <li onClick={show_3} className={`cursor-pointer hover:bg-blue-400 pt-1 pb-2 pr-2 pl-2 rounded-full hover:text-white ${gout3_show ? 'bg-blue-500 pt-1 pb-2 pr-2 pl-2 rounded-full text-white' : ''}`}>ဆိုင်(၃)</li>
                    </ul>
                </div>
                    {gout1_show && <Gout1Table getloca1={getloca1}/>}
                    {gout2_show && <Gout2Table getloca2={getloca2}/>}
                    {gout3_show && <Gout3Table getloca3={getloca3}/>}
            </div>  
            {isOpenCreate && (
                <div className='fixed inset-0 bg-blue-400 bg-opacity-5 flex justify-center items-center z-50'>
                    <GoutAllCreate createClose={createClose}/>
                </div>
            )}
        </div>
    );
}