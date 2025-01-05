import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Worker_edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState('');
  const [loca, setLoca] = useState('');
  const [hard_worker, setHard_worker] = useState('');
  const [car_flaw, setCar_flaw] = useState('');
  const [d_w_h, setD_w_h] = useState('');
  const [h_red, setH_red] = useState('');
  const [h_blue, setH_blue] = useState('');

  useEffect(() => {
    const fetchWorker = async () => {
      try {
        const response = await axios.get(`https://dashboard-yfuz.onrender.com/api/worker/${id}`);
        if (response.status === 200) {
          const data = response.data;
          setLoca(data.loca || '');
          setHard_worker(data.hard_worker || '');
          setCar_flaw(data.car_flaw || '');
          setD_w_h(data.d_w_h || '');
          setH_red(data.h_red || '');
          setH_blue(data.h_blue || '');
        }
      } catch (err) {
        setError(`Error fetching worker data: ${err.message}`);
      }
    };

    if (id) {
      fetchWorker();
    }
  }, [id]);

  const UpdatePost = async (e) => {
    e.preventDefault();
    if (!loca || !hard_worker || !car_flaw || !d_w_h || !h_red || !h_blue) {
      setError('All fields are required.');
      return;
    }

    const updatedWorker = { loca, hard_worker, car_flaw, d_w_h, h_red, h_blue };
    try {
      const response = await axios.patch(`https://dashboard-yfuz.onrender.com/api/worker/${id}`, updatedWorker);
      if (response.status === 200) {
        alert('Worker updated successfully!');
        navigate('/')
      }
    } catch (err) {
      setError(`Error updating worker: ${err.message}`);
    }
  };

  return (
    <div className="pt-10">
      <div className="max-w-3xl mx-auto pt-6 pb-6 bg-white rounded-lg shadow-lg">
        <div className="w-full border-b-2 border-b-gray-300">
          <h2 className="mt-0 ml-10 mb-2 text-2xl font-bold tracking-tight text-gray-500">
            Edit Worker List
          </h2>
        </div>

        <div className="m-10">
          {error && <p className="text-red-500">{error}</p>}
          <form action="#" onSubmit={UpdatePost} className="flex flex-col space-y-6">
            <div className="flex justify-between items-center">
              <label htmlFor="loca" className="block text-sm font-medium text-gray-500">
                Location
              </label>
              <input
                type="text"
                value={loca}
                onChange={(e) => setLoca(e.target.value)}
                className="w-96 px-3 py-2 rounded-sm bg-white text-gray-500 outline outline-2 outline-blue-200 focus:outline-blue-400"
                required
              />
            </div>

            <div className="flex justify-between items-center">
              <label htmlFor="hard_worker" className="block text-sm font-medium text-gray-500">
                Hard Worker
              </label>
              <input
                id="hard_worker"
                type="number"
                value={hard_worker}
                onChange={(e) => setHard_worker(e.target.value)}
                className="w-96 px-3 py-2 rounded-sm bg-white text-gray-500 outline outline-2 outline-blue-200 focus:outline-blue-400"
                required
              />
            </div>

            <div className="flex justify-between items-center">
              <label htmlFor="car_flaw" className="block text-sm font-medium text-gray-500">
                Car Flaw
              </label>
              <input
                id="car_flaw"
                type="number"
                value={car_flaw}
                onChange={(e) => setCar_flaw(e.target.value)}
                className="w-96 px-3 py-2 rounded-sm bg-white text-gray-500 outline outline-2 outline-blue-200 focus:outline-blue-400"
                required
              />
            </div>

            <div className="flex justify-between items-center">
              <label htmlFor="d_w_h" className="block text-sm font-medium text-gray-500">
                Duty With Honor
              </label>
              <input
                id="d_w_h"
                type="number"
                value={d_w_h}
                onChange={(e) => setD_w_h(e.target.value)}
                className="w-96 px-3 py-2 rounded-sm bg-white text-gray-500 outline outline-2 outline-blue-200 focus:outline-blue-400"
                required
              />
            </div>

            <div className="flex justify-between items-center">
              <label htmlFor="h_red" className="block text-sm font-medium text-gray-500">
                Hat Red
              </label>
              <input
                id="h_red"
                type="number"
                value={h_red}
                onChange={(e) => setH_red(e.target.value)}
                className="w-96 px-3 py-2 rounded-sm bg-white text-gray-500 outline outline-2 outline-blue-200 focus:outline-blue-400"
                required
              />
            </div>

            <div className="flex justify-between items-center">
              <label htmlFor="h_blue" className="block text-sm font-medium text-gray-500">
                Hat Blue
              </label>
              <input
                id="h_blue"
                type="number"
                value={h_blue}
                onChange={(e) => setH_blue(e.target.value)}
                className="w-96 px-3 py-2 rounded-sm bg-white text-gray-500 outline outline-2 outline-blue-200 focus:outline-blue-400"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="rounded-sm bg-blue-600 px-3 py-2 text-white font-semibold shadow-sm hover:bg-blue-500 focus:outline-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
