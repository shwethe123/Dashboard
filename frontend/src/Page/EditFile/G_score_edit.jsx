import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate,useParams } from 'react-router-dom';

export default function G_score_edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [error, setError] = useState('');
  const [isPassword, setIsPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [ag, setAg] = useState('');
  const [row, setRow] = useState('');
  const [loca, setLoca] = useState('');
  const [score, setScore] = useState('');

  useEffect(() => {
    const fetchG_score = async () => {
      if (id) {
        try {
          const response1 = await axios.get(`https://dashboard-yfuz.onrender.com/api/score/${id}`);
          if (response1.status === 200) {
            setAg(response1.data.ag);
            setRow(response1.data.row);
            setLoca(response1.data.loca);
            setScore(response1.data.score);
          }
        } catch (error) {
          setError('Failed to fetch score data.');
        }
      }
    };
    fetchG_score();
  }, [id]);

  const updateScore = async (e) => {
    e.preventDefault();
    setIsPassword(true);
  };

  const handlePasswordSubmit = async () => {
    if (password === '12345') {
      const UpdatePost = { ag, row, loca, score };
      try {
        const response = await axios.patch(`https://dashboard-yfuz.onrender.com/api/score/${id}`, UpdatePost);
        if (response.status === 200) {
          setError('Score updated successfully.');
          navigate('/GoutTable')
        } else {
          setError('Failed to update score.');
        }
      } catch (error) {
        setError('Update failed, please try again.');
      }
    } else {
      setError('Incorrect password. Please try again.');
    }
    setIsPassword(false);
    setPassword('');
  };

  const handleCancelPassword = () => {
    setIsPassword(false);
    setPassword('');
  };

  return (
  <>
    <div className="pt-10">
          <div className='max-w-xl mx-auto pt-6 pb-6 bg-white rounded-lg shadow-lg'>
              <div className="sm:mx-autow-full border-b-2 border-b-gray-300">
                <h2 className="mt-0 ml-10 mb-2 text-2xl font-bold tracking-tight text-gray-500">
                  Edit score
                </h2>
              </div>
              
            <div className="m-10 ">
            {error && (
                        <div className="bg-red-100 border border-red-400 text-red-500 px-4 py-3 rounded relative">
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}
              <form action="#" onSubmit={updateScore} className="space-y-6">
                <div className='flex justify-around space-x-20 items-center'>
                  <label htmlFor="text" className="block text-sm font-medium text-gray-500">
                    AG
                  </label>
                  <div className="mt-2 w-96">
                    <input
                      name="AG"
                      type="text"
                      required
                      value={ag}
                      onChange={(e) => setAg(e.target.value)}
                      className="block w-full rounded-sm px-3 py-2 text-base text-gray-500 outline outline-2 outline-blue-100 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-blue-400 sm:text-sm"
                    />
                  </div>
                </div>

                <div className='flex justify-around space-x-20 items-center'>
                  <label htmlFor="Row" className="block text-sm font-medium text-gray-500">
                    Row
                  </label>
                  <div className="mt-2 w-96">
                    <input
                      disabled
                      name="Row"
                      type="text"
                      required
                      value={row}
                      onChange={(e) => setRow(e.target.value)}
                      className="block w-full rounded-sm bg-gray-100 px-3 py-2 text-base text-gray-500 outline outline-2 outline-blue-100 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-blue-400 sm:text-sm"
                    />
                  </div>
                </div>

                <div className='flex justify-around space-x-20 items-center'>
                  <label htmlFor="Loca" className="block text-sm font-medium text-gray-500">
                    Loca
                  </label>
                  <div className="mt-2 w-96">
                    <input
                      disabled
                      name="Loca"
                      type="text"
                      required
                      value={loca}
                      onChange={(e) => setLoca(e.target.value)}
                      className="block w-full rounded-sm bg-gray-100 px-3 py-2 text-base text-gray-500 outline outline-2 outline-blue-100 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-blue-400 sm:text-sm"
                    />
                  </div>
                </div>

                <div className='flex justify-around space-x-20 items-center'>
                  <label htmlFor="score" className="block text-sm font-medium text-gray-500">
                    Score
                  </label>
                  <div className="mt-2 w-96">
                    <input
                      name="score"
                      type="number"
                      required
                      value={score}
                      onChange={(e) => setScore(e.target.value)}
                      className="block w-full rounded-sm px-3 py-2 text-base text-gray-500 outline outline-2 outline-blue-100 placeholder:text-gray-400 focus:outline focus:outline-2 focus:outline-blue-400 sm:text-sm"
                    />
                  </div>
                </div>

                <div className='flex justify-end'>
                  <button
                    type="submit"
                    className="justify-center rounded-sm bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline focus:outline-2 focus:outline-blue-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
      </div>

      {isPassword && (
        <div className="fixed inset-0 bg-black bg-opacity-20 flex ml-60 justify-center pt-64 z-50">
          <div className="w-72 bg-gray-200 flex flex-col justify-evenly items-center text-black p-4 h-52 rounded-lg">
            <label className='p-2' htmlFor="">Password ထည့်ပါ</label>
            <input
              type="password"
              placeholder='********'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              className="bg-green-500 w-full py-2 rounded-md text-white hover:bg-green-600 transition duration-200"
              onClick={handlePasswordSubmit}
            >
              Save
            </button>
            <button
              className="bg-red-500 w-full py-2 mt-2 rounded-md text-white hover:bg-red-600 transition duration-200"
              onClick={handleCancelPassword}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
