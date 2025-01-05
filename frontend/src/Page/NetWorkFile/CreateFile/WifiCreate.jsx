import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function WifiCreate() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [loca, setLoca] = useState('');
  const [name, setName] = useState('');
  const [ Id, setId ] = useState('');
  const [updateDate, setUpdateDate] = useState('');
  const [remark, setRemark] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        setLoading(true);
        try {
          const res = await axios.get(`https://dashboard-yfuz.onrender.com/api/wifi/${id}`);
          if (res.status === 200) {
            setLoca(res.data.loca);
            setName(res.data.name);
            setId(res.data.Id);
            setUpdateDate(res.data.update_date);
            setRemark(res.data.remark);
            setUpdateDate(res.data.update_date);
          }
        } catch (err) {
          setError('Error fetching data');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [id]);

  const updatedTime = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updatedPost = { loca, Id, name, update_date: updateDate, remark };
      const res = await axios.patch(`https://dashboard-yfuz.onrender.com/api/wifi/${id}`, updatedPost);
      if (res.status === 200) {
        navigate('/');
      }
    } catch (error) {
      setError('Update failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="pt-10">
          <div className='max-w-xl mx-auto pt-6 pb-6 bg-white rounded-lg shadow-lg'>
              <div className="sm:mx-autow-full border-b-2 border-b-gray-300">
                <h2 className="mt-0 ml-10 mb-2 text-2xl font-bold tracking-tight text-gray-500">
                  Update Network Date
                </h2>
              </div>
              
            <div className="m-10 ">
            {error && <div className="text-red-500 text-center">{error}</div>} {/* Error message */}
              <form action="#" onSubmit={updatedTime}  className="space-y-6">
                <div className='flex justify-between space-x-20 items-center'>
                  <label htmlFor="text" className="block text-sm font-medium text-gray-500">
                    ဌာနာ
                  </label>
                  <div className="mt-2">
                    <select
                      disabled
                      name="AG"
                      type="text"
                      required
                      value={loca}
                      onChange={(e) => setLoca(e.target.value)}
                      className="block w-72 rounded-sm px-3 py-2 text-base
                       text-gray-500 outline outline-1 outline-sky-300 placeholder:text-gray-400 
                       focus:outline focus:outline-2 focus:outline-sky-400 sm:text-sm"
                      >
                      <option value="Normal">Normal</option>
                      <option value="ဆိုင်(1)">ဆိုင်(1)</option>
                      <option value="ဆိုင်(2)">ဆိုင်(2)</option>
                      <option value="ဆိုင်(3)">ဆိုင်(3)</option>
                      <option value="အုတ်စက်">အုတ်စက်</option>
                      <option value="ကားဝပ်ရှော့">ကားဝပ်ရှော့</option>
                    </select>
                  </div>
                </div>

                <div className='flex justify-between space-x-20 items-center'>
                  <label htmlFor="Row" className="block text-sm font-medium text-gray-500">
                    Network Name
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder='Network Name'
                      disabled
                      name="Row"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="block w-72 rounded-sm px-3 py-2 text-base text-gray-500
                       outline outline-1 outline-sky-300 placeholder:text-gray-400 focus:outline 
                       focus:outline-2 focus:outline-sky-400 sm:text-sm"
                    />
                  </div>
                </div>

                <div className='flex justify-between space-x-20 items-center'>
                  <label htmlFor="score" className="block text-sm font-medium text-gray-500">
                    Network Id
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder='Network Id'
                      name="score"
                      type="number"
                      required
                      value={Id}
                      onChange={(e) => setId(e.target.value)}
                      className="block w-72 rounded-sm bg-white px-3 py-2 text-base text-black
                      outline outline-1 outline-sky-300 placeholder:text-gray-400 focus:outline
                       focus:outline-2 focus:outline-sky-400 sm:text-sm"
                    />
                  </div>
                </div>

                <div className='flex justify-between space-x-20 items-center'>
                  <label htmlFor="score" className="block text-sm font-medium text-gray-500">
                    Update Network Date
                  </label>
                  <div className="mt-2">
                    <input
                      required
                      value={updateDate}
                      onChange={(e) => setUpdateDate(e.target.value)}
                      type="date"
                      className="block w-72 rounded-sm bg-white px-3 py-2 text-base text-black
                      outline outline-1 outline-sky-300 placeholder:text-gray-400 focus:outline
                       focus:outline-2 focus:outline-sky-400 sm:text-sm"
                    />
                  </div>
                </div>

                <div className='flex justify-between space-x-20 items-center'>
                  <label htmlFor="score" className="block text-sm font-medium text-gray-500">
                    Remark
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder='remark'
                      required
                      value={remark}
                      onChange={(e) => setRemark(e.target.value)}
                      type="text"
                      className="block w-72 rounded-sm bg-white px-3 py-2 text-base text-black
                      outline outline-1 outline-sky-300 placeholder:text-gray-400 focus:outline
                       focus:outline-2 focus:outline-sky-400 sm:text-sm"
                    />
                  </div>
                </div>

                <div className='flex justify-end'>
                  <button
                    type="submit"
                    className="justify-center bg-sky-500 mt-4 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus:outline focus:outline-2 focus:outline-sky-600"
                    disabled={loading} 
                    >
                      {loading ? 'Updating...' : 'Network Date Updated'}
                  </button>
                </div>
              </form>
            </div>
          </div>
      </div>
    </>
  );
}
