import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Condition1 from '../LocaOne_showFile/ConditionFile/condition1';
import Condition2 from '../LocaOne_showFile/ConditionFile/condition2';
import Condition3 from '../LocaOne_showFile/ConditionFile/condition3';
import Condition4 from '../LocaOne_showFile/ConditionFile/condition4';
import Condition5 from '../LocaOne_showFile/ConditionFile/condition5';
import Condition6 from '../LocaOne_showFile/ConditionFile/condition6';
import Condition8 from '../LocaOne_showFile/ConditionFile/condition8';
import Condition7 from '../LocaOne_showFile/ConditionFile/condition7';
import Condition9 from '../LocaOne_showFile/ConditionFile/condition9';
import Recharts from '../RechartFile/recharts';
import Loca_one_show from './NetWorkFile/Loca_all_showFile/loca_one_show';
import Loca_two_show from './NetWorkFile/Loca_all_showFile/Loca_two_show';
import Loca_three_show from './NetWorkFile/Loca_all_showFile/Loca_three_show';
import Loca_four_show from './NetWorkFile/Loca_all_showFile/Loca_four_show';
import OptionsVisible from '../ModelFile/OptionsVisible';
import Chart from '../RechartFile/chart'
import Loca1AllTable from './TableFile/Loca1AllTable';
import Loca2AllTable from './TableFile/Loca2AllTable';
import Loca3AllTable from './TableFile/Loca3AllTable';
import WorkerTable from './TableFile/WorkerTable'

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wifiLoca_one_show, setWifiLoca_one_show] = useState(true);
  const [wifiLoca_two_show, setWifiLoca_two_show] = useState(false);
  const [wifiLoca_three_show, setWifiLoca_three_show] = useState(false);
  const [wifiLoca_four_show, setWifiLoca_four_show] = useState(false);

  const click_one = () => {
    setWifiLoca_one_show(true);
    setWifiLoca_two_show(false);
    setWifiLoca_three_show(false);
    setWifiLoca_four_show(false);
  }

  const click_two = () => {
    setWifiLoca_one_show(false);
    setWifiLoca_two_show(true);
    setWifiLoca_three_show(false);
    setWifiLoca_four_show(false);
  }

  const click_three = () => {
    setWifiLoca_one_show(false);
    setWifiLoca_two_show(false);
    setWifiLoca_three_show(true);
    setWifiLoca_four_show(false);
  }

  const click_four = () => {
    setWifiLoca_one_show(false);
    setWifiLoca_two_show(false);
    setWifiLoca_three_show(false);
    setWifiLoca_four_show(true);
  }

  // const showRechart = () => {
  //   setIsModalOpen(!isModalOpen);
  // }

  return (
    <>
      <div className="p-2 text-gray-800">
        <div className="flex justify-around border-b-2 border-white pb-4">
          <div className="w-screen">
            {wifiLoca_one_show && <Loca_one_show />}
            {wifiLoca_two_show && <Loca_two_show />}
            {wifiLoca_three_show && <Loca_three_show />}
            {wifiLoca_four_show && <Loca_four_show />}
          </div>

          <div className="flex flex-col justify-center text-end select-none w-32 text-sm text-white">
            <p 
              onClick={click_one} 
              className={`rounded-full mr-4 mb-3 cursor-pointer font-bold
                ${wifiLoca_one_show ? "text-purple-600 border-gray-200" : "hover:text-purple-400 text-gray-400 "}`}>
              ဆန်ဆိုင်း
            </p>
            <p 
              onClick={click_two} 
              className={`rounded-full mr-4 mb-3 cursor-pointer font-bold
                ${wifiLoca_two_show ? "text-purple-600 border-gray-200" : "hover:text-purple-400 text-gray-400"}`}>
              ဝမ်လုံး
            </p>
            <p 
              onClick={click_three} 
              className={`rounded-full mr-4 mb-3 cursor-pointer font-bold
                ${wifiLoca_three_show ? "text-purple-600 border-gray-200" : "hover:text-purple-400 text-gray-400"}`}>
              ဟောင်လိတ်
            </p>
            <p 
              onClick={click_four} 
              className={`rounded-full mr-3 mb-3 cursor-pointer font-bold
                ${wifiLoca_four_show ? "text-purple-600 border-gray-200" : "hover:text-purple-400 text-gray-400"}`}>
              အုတ်စက်/E1
            </p>
          </div>


        </div>

        {/* <h3 className="text-2xl font-semibold mb-3 mt-5 text-gray-900">Performance Overview</h3> */}
        <section className="grid grid-cols-1 sm:grid-cols-2 pt-4 lg:grid-cols-3 gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 pr-3 pb-4 pl-3 bg-white text-black rounded-xl shadow-sm hover:shadow-md">
              <div className="flex flex-col justify-between">
                <Condition1 />
                <Condition2 />
                <Condition6 />
              </div>
              <div className="flex flex-col justify-between">
                <Condition3 />
                <Condition5 />
                <Condition9 />
              </div>
              <div className="flex flex-col justify-between">
                <div className='flex justify-end'>
                  <OptionsVisible/>
                </div>
                  <Condition7 />
                  <Condition8 />
                  <Condition4 />
              </div>
          </div>

          <div className="grid grid-rows-1 sm:grid-rows-2 lg:grid-cols-1 gap-4 pt-4 pr-4 pb-4 pl-3 bg-white  text-black rounded-xl shadow-sm hover:shadow-md">
              
              <Loca1AllTable />
              <Loca2AllTable />
              <Loca3AllTable />
              
          </div>


          <div
            className="bg-white p-1 rounded-lg ">
            <Chart/>
          </div>
          
          
        </section>

        {/* Recent Updates */}
        <section className='pt-4'>
          {/* <h3 className="text-2xl font-semibold mt-4 text-gray-900">Recent Updates</h3> */}
          <div className='flex flex-row justify-between'>
              <div className='w-full'>
              <Recharts />
              </div>

            
              <div className='w-full'>
              <WorkerTable />
              </div>
          </div>

        </section>
      </div>
    </>
  );
}
