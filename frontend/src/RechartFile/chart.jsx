import React, { useEffect, useState } from 'react';
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { FiX } from "react-icons/fi";
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const [gLoca1, setGLoca1] = useState([]);
  const [ gLoca2, setGLoca2 ] = useState([]);
  const [ gLoca3, setGLoca3 ] = useState([]);
  const [error, setError] = useState(null);
  const [isGoutScoreOpen, setIsGoutScoreOpen] = useState(false);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [isOptionsEdit, sttIsOptionsEdit] = useState(false);
  const [scoreEdit, setScoreEdit] = useState(false);

  useEffect(() => {
    const fetchGLoca1 = async () => {
      try {
        const [Loca1_response, Loca2_response, Loca3_response] = await Promise.all([
          fetch('https://dashboard-yfuz.onrender.com/api/score'),
          fetch('https://dashboard-yfuz.onrender.com/api/score2'),
          fetch('https://dashboard-yfuz.onrender.com/api/score3')
        ]);
        if (!Loca1_response.ok || !Loca2_response.ok || !Loca3_response) {
          throw new Error('Network response is not ok');
        }
        const data = await Loca1_response.json();
        const data2 = await Loca2_response.json();
        const data3 = await Loca3_response.json();
        setGLoca1(data);
        setGLoca2(data2);
        setGLoca3(data3);
      } catch (error) {
        setError('Failed to fetch data');
        console.error('Error fetching data:', error);
      }
    };
    fetchGLoca1();
  }, [setGLoca1,setGLoca2]);

  const isVisibleModal = () => {
    setIsOptionsVisible(!isOptionsVisible);
  }

  const isScoreModal = () => {
    setIsGoutScoreOpen(!isGoutScoreOpen);
    setIsOptionsVisible(false);
  }

  const isOpenEdit = () => {
    sttIsOptionsEdit(!isOptionsEdit);
    setIsOptionsVisible(false)
  }
  
  const showModalFile = () => {
    setScoreEdit(!scoreEdit);
  }

  const loca_row = gLoca1.map(gLoca1_data => gLoca1_data.row);
  const loca2_row = gLoca2.map(gLoca2_data => gLoca2_data.row);

  const data = {
    labels: loca2_row,
    datasets: [
      {
        label: 'ဆိုင်(1)', 
        data: gLoca1.map(gLoca1_data => gLoca1_data.score),
        fill: false,
        borderColor: 'rgb(75, 192, 192)', 
        tension: 0.1,
      },
      {
        label: 'ဆိုင်(2)', 
        data: gLoca2.map(gLoca2_data => gLoca2_data.score),
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
      {
        label: 'ဆိုင်(3)',
        data: gLoca3.map(gLoca3_data => gLoca3_data.score),
        fill: false,
        borderColor: 'rgb(53, 162, 235)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'အတန်းပြင်ဆင်မှု့အပိုင်း',  // Title in Burmese
      },
    },
  };

  return (
      <>
        <div className='flex pb-2'>
          {error && <div className="error-message">{error}</div>}
          <div className='text-base mt-3 w-3 h-7 text-sky-400 cursor-pointer'>
            <IoEllipsisVerticalSharp onClick={isVisibleModal}/>
            {isOptionsVisible && (
              <div className="absolute mt-2 w-40 p-4 bg-white shadow-lg rounded-lg select-none">
                <ul>
                  <li onClick={isOpenEdit} className="py-1 px-4 text-gray-700 cursor-pointer hover:bg-gray-200">Edit</li>
                  <li onClick={isScoreModal} className="py-1 px-4 text-gray-700 cursor-pointer hover:bg-gray-200">
                    See More
                  </li>
                  <li onClick={isVisibleModal} className="py-1 px-4 text-gray-700 cursor-pointer hover:bg-gray-200">
                    Cancel
                  </li>
                </ul>
              </div>
              )}

              {isOptionsEdit && ( //ဒုတိယ လုပ်ဆောင်ချက် box
              <div className="absolute mt-2 w-40 p-4 text-sm bg-white shadow-lg rounded-lg select-none border-2 border-gray-50">
                <ul>
                  <Link to={`/GoutTable`}>
                    <li className="py-2 px-4 text-gray-700 cursor-pointer hover:bg-gray-200">
                      ဆိုင်(1)
                    </li>
                  </Link>
                  <Link to={`/GoutTable2`}>
                    <li className="py-2 px-4 text-gray-700 cursor-pointer hover:bg-gray-200">
                    ဆိုင်(2)
                    </li>
                  </Link>
                  <Link to={`/Gouttable3`}>
                    <li onClick={isVisibleModal} className="py-2 px-4 text-gray-700 cursor-pointer hover:bg-gray-200 w-full">
                    ဆိုင်(3)
                    </li>
                  </Link>  
                  <li onClick={isOpenEdit} className="py-2 px-4 text-gray-700 cursor-pointer hover:bg-gray-200">
                    Cancel
                  </li>
                </ul>
              </div>
              )}

          </div>
          <Line data={data} options={options} />
        </div>

        {isGoutScoreOpen && ( // ပထမ လုပ်ဆောင်ချက် box
          <div className='fixed top-0 left-0 right-0 bottom-72 flex items-center justify-center'>
            <div className='h-2/3 w-2/4 flex justify-center border-2 border-purple-100 rounded-md bg-white p-4 shadow-2xl hover:shadow-xl'>
              <Line data={data} options={options} />
              <div className='text-2xl h-6 text-sky-500 cursor-pointer hover:bg-gray-100 rounded-full'>
                  <FiX onClick={isScoreModal}/>
              </div>
            </div>
          </div>
        )}
      </>
  );
};

export default LineChart;
