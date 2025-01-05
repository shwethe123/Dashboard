import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { BiAlignRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export default function Audit_edit() {
    const navigate = useNavigate();
    const {id} = useParams();
    const [error, setError] = useState('');
    const [Id, setId] = useState('');
    const [Ag, setAg] = useState('');
    const [Name, setName] = useState('');
    const [Phone, setPhone] = useState('');
    const [condition, setCondition] = useState('');
    const [selection, setSelection] = useState('');
    const [reason, setReason] = useState('');
    const [data, setData] = useState([]);
    const [isUserModal, setIsUserModal] = useState(false);
    const [isOpenVisible, setIsOpenVisible] = useState(false);

    useEffect(() => {
        try {
            if (id) {
                const fetch_api = async () => {
                    const res = await axios.get(`https://dashboard-yfuz.onrender.com/api/audit/${id}`);
                    if (res.status === 200) {
                        const data = res.data;
                        setId(data.Id);
                        setAg(data.Ag);
                        setName(data.Name);
                        setPhone(data.Phone);
                        setCondition(data.condition);
                        setSelection(data.selection);
                        setReason(data.reason || '');
                        setData([data]);
                    };
                };
                fetch_api();
            };
        } catch (error) {
            setError('Not found post id');
        }
    }, [id]);

    const UpdatePost = async (e) => {
        e.preventDefault();
        if (!Id || !Ag || !Name || !Phone || !condition || !selection || !reason) {
            setError('All fields are required. Please try again.');
            return;
        }
        try {
            const addPost = { Id, Ag, Name, Phone, condition, selection, reason };
                let res;
            if (id) {
                res = await axios.patch(`https://dashboard-yfuz.onrender.com/api/audit/${id}`, addPost);
            } else {
                res = await axios.post(`https://dashboard-yfuz.onrender.com/api/audit`, addPost);
                if (res.status === 200) {
                    navigate('/LocaOne');
                }
            }
            setIsUserModal(false);
            setError('');
        } catch (error) {
            setError(`Failed to update post: ${error.message}`);
        }
    };
    

    const openVisible = () => {
        setIsOpenVisible(!isOpenVisible);
    }

    const openAddNew = () => {
        setId('');
        setAg('');
        setName('');
        setPhone('');
        setCondition('');
        setSelection('');
        setReason('');
        navigate('/Audit/Edit');
        setIsUserModal(!isUserModal);
    }

    const openModal = () => {
        setIsUserModal(!isUserModal);
        setIsOpenVisible(false)
    }
    const goBack = () => {
        navigate('/LocaOne');
    }

  return (
    <>
        <div className='max-w-5xl mx-auto p-16 mt-10 bg-white rounded-lg shadow-lg'>
            <div className='flex justify-between items-center'>
                <div className=''>
                    <h3 className='text-gray-600 text-2xl font-bold'>Individual Information</h3>
                    <p className='text-gray-400 pl-2'>Your Information is now confirmed</p>
                </div>
                <div>
                <BiAlignRight onClick={openVisible} className='text-3xl cursor-pointer text-gray-600 hover:text-gray-400'/>
                    {isOpenVisible && (
                        <div className="absolute mt-2 w-40 p-4 bg-white shadow-lg rounded-lg select-none">
                            <ul>
                                <li onClick={openModal} className="py-2 px-4 text-gray-700 cursor-pointer hover:bg-sky-100">Edit</li>
                                {/* <Link to={`/Account/Edit`}> */}
                                    <li onClick={openAddNew} className="py-2 px-4 text-gray-700 cursor-pointer hover:bg-sky-100">
                                        Add New
                                    </li>
                                {/* </Link> */}
                                <li onClick={openVisible} className="py-2 px-4 text-gray-700 cursor-pointer hover:bg-sky-100">
                                Cancel
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {Array.isArray(data) && data.length > 0 ? (
                data.map((item, index) => (
                    <div key={index} className='pt-6'>
                        <div className='flex justify-between space-y-6 items-center'>
                            <p className='text-gray-400 font-semibold'>ID</p>
                            <p>{item.Id}</p>
                        </div>
                        <div className='flex justify-between space-y-6 items-center'>
                            <p className='text-gray-400 font-semibold'>Ag</p>
                            <p>{item.Ag}</p>
                        </div>
                        <div className='flex justify-between space-y-6 items-center'>
                            <p className='text-gray-400 font-semibold'>Name</p>
                            <p>{item.Name}</p>
                        </div>
                        <div className='flex justify-between space-y-6 items-center'>
                            <p className='text-gray-400 font-semibold'>Phone</p>
                            <p>{item.Phone}</p>
                        </div>
                        <div className='flex justify-between space-y-6 items-center'>
                            <p className='text-gray-400 font-semibold'>Condition</p>
                            <p>{item.condition}</p>
                        </div>
                        <div className='flex justify-between space-y-6 items-center'>
                            <p className='text-gray-400 font-semibold'>ဆိုင်တည်နေရာ</p>
                            <p>{item.selection}</p>
                        </div>
                        <div className='flex-row space-y-6 border-t-2 mt-3 border-gray-500'>
                            <p className='mt-6'>Reason Comment</p>
                            <p className='border-2 border-sky-100 rounded-md p-6 text-gray-400'>
                                {item.reason}
                            </p>
                        </div>
                        <p onClick={goBack} className='bg-sky-500 text-white p-2 mt-3 w-16 text-center hover:bg-sky-400 cursor-pointer'>Back</p>
                    </div>
                ))
            ) : (
                <div>!No Data မရှိပါ</div>
        )}

    </div>
        {isUserModal && (
            <div className='fixed inset-0 bg-slate-200 bg-opacity-40 ml-60 flex justify-center items-center z-50'>
            <form action="" className='bg-white w-5/12'  onSubmit={UpdatePost}>
                <div onClick={openModal} className='flex justify-end m-3 cursor-pointer text-sky-500 hover:text-sky-300 text-2xl'>
                    <AiOutlineClose/>
                </div>
                <h3 className='text-gray-600 text-2xl font-bold text-center'>{id? 'Edit' : 'Create'} form </h3>
                <div className='m-16'>
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-500 px-4 py-3 rounded relative">
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}
                <div className='flex justify-between items-center'>
                    <label htmlFor="">ID</label>
                    <input
                        placeholder='ID'
                        className='border-2 min-w-80 border-sky-200 p-2 m-2 focus:outline-none focus:ring-1 shadow-sm focus:ring-sky-200'
                        type="number"
                        value={Id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <div className='flex justify-between items-center'>
                    <label htmlFor="">Ag</label>
                    <input
                        placeholder='Ag'
                        className='border-2 min-w-80 border-sky-200 p-2 m-2 focus:outline-none focus:ring-1 shadow-sm focus:ring-sky-200'
                        type="text"
                        value={Ag}
                        onChange={(e) => setAg(e.target.value)}
                    />
                </div>
                <div className='flex justify-between items-center'>
                    <label htmlFor="">Name</label>
                    <input
                        placeholder='Name'
                        className='border-2 min-w-80 border-sky-200 p-2 m-2 focus:outline-none focus:ring-1 shadow-sm focus:ring-sky-200'
                        type="text"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='flex justify-between items-center'>
                    <label htmlFor="">Phone</label>
                    <input
                        placeholder='Phone'
                        className='border-2 min-w-80 border-sky-200 p-2 m-2 focus:outline-none focus:ring-1 shadow-sm focus:ring-sky-200'
                        type="number"
                        value={Phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className='flex justify-between items-center'>
                    <label htmlFor="">Condition</label>
                    <select
                        id="condition"
                        className="border-2 w-80 border-sky-200 p-2 m-2 focus:outline-none focus:ring-1 shadow-sm focus:ring-sky-200"
                        value={condition}
                        onChange={(e) => setCondition(e.target.value)}
                    >
                        <option value="Normal">Normal</option>
                        <option value="condition1">အလုပ်နောက်ကျ</option>
                        <option value="condition2">ခွင့် တစ်ပိုင်း</option>
                        <option value="condition3">ခွင့် တစ်ရက်</option>
                        <option value="condition4">ခွင့်ရက်ရှည်</option>
                        <option value="condition5">ခွင့်မဲ့</option>
                        <option value="condition6">ဖိုင်း အပြစ်ပေး</option>
                        <option value="condition7">အလုပ်ထွက်မည့်သူ</option>
                        <option value="condition8">အလုပ်ထွက်သူ</option>
                        <option value="condition9">ကြိုတင်ခွင့်တိုင်သူ</option>
                    </select>
                </div>
                <div className='flex justify-between items-center'>
                    <label htmlFor="">ဌာနတည်နေရာ</label>
                    <select
                        className='border-2 w-80 border-sky-200 p-2 m-2 focus:outline-none focus:ring-1 shadow-sm focus:ring-sky-200'
                        type="text"
                        value={selection}
                        onChange={(e) => setSelection(e.target.value)}
                    >
                        <option value="Normal">Normal</option>
                        <option value="Gထွက်">Gထွက်</option>
                        <option value="လက်လီ">လက်လီ</option>
                        <option value="လက်ကား">လက်ကား</option>
                        <option value="ကားအောင်">ကားအောင်</option>
                        <option value="အဝင်ပိုင်း">အဝင်ပိုင်း</option>
                        <option value="ပစ္စည်းမှာ">ပစ္စည်းမှာ</option>
                        <option value="စာရင်းကိုင်">စာရင်းကိုင်</option>
                        <option value="စက်ကိုင်">စက်ကိုင်</option>
                        <option value="အပြင်သွား">အပြင်သွား</option>
                        <option value="စီစစ်ရေး">စီစစ်ရေး</option>
                    </select>
                </div>
                <div className='flex-row space-y-6'>
                    <p className='mt-6'>Reason Comment</p>
                    <textarea 
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        placeholder='Write Reson comment'
                        className='border-2 border-sky-100 rounded-md p-3 text-gray-400 w-full focus:outline-none focus:ring-2 shadow-sm focus:ring-sky-200'>
                    </textarea>
                </div>
                <div className='flex justify-end'>
                    <button className='bg-sky-500 p-2 m-3 text-white hover:bg-sky-400' type='submit'>Update</button>
                </div>
                </div>
            </form>
        </div>
        )}
    </>
  )
}
