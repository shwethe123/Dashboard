// src/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
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
  
  const data = {
    labels: ['Aတန်း', 'Bတန်း', 'Cတန်း', 'Dတန်း', 'Eတန်း', 'Fတန်း', 'အပြင်တန်း'], // Labels for the x-axis
    datasets: [
      {
        label: 'ဆိုင်(1)',  // First dataset
        data: [25, 19, 30, 31, 36, 35, 40],  // Example data points
        fill: false,
        borderColor: 'rgb(75, 192, 192)', // Line color
        tension: 0.1,
      },
      {
        label: 'ဆိုင်(2)',  // Second dataset
        data: [28, 22, 33, 30, 39, 37, 45],  // Example data points (different from the first)
        fill: false,
        borderColor: 'rgb(255, 99, 132)', // Line color
        tension: 0.1,
      },
      {
        label: 'ဆိုင်(3)',  // Third dataset
        data: [18, 24, 29, 32, 33, 38, 44],  // Example data points for the third line
        fill: false,
        borderColor: 'rgb(53, 162, 235)', // Line color for third dataset
        tension: 0.1,
      },
    ],
  };

  // Options for the chart (optional)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'အတန်းပြင်ဆင်မှု့',  // Title in Burmese
      },
    },
  };

  return (
    <div className='pl-2 pb-2 pr-1'>
      <Line data={data} options={options} />
    </div>
  )
};

export default LineChart;
