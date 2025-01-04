import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import G_out from '../LocaOne_showFile/G_out';
import Sale_in from '../LocaOne_showFile/Sale_in';
import Sale_out from '../LocaOne_showFile/Sale_out';
import Car_order from '../LocaOne_showFile/Car_order';
import Order_in_one from '../LocaOne_showFile/Order_in_one';
import Order_in_two from '../LocaOne_showFile/Order_in_two';
import Accounting from '../LocaOne_showFile/Accounting';
import Audit from '../LocaOne_showFile/Audit';
import Out_juty from '../LocaOne_showFile/Out_juty';
import Chack from '../LocaOne_showFile/Chack';
import TableCreate from '../Page/CreateFile/TableCreate';

import Account_loca2 from '../LocaTwo_showFile/Accounting';
import CarGo_loca2 from '../LocaTwo_showFile/Car_go';
import Car_order2 from '../LocaTwo_showFile/Car_order';
import G_out2 from '../LocaTwo_showFile/G_out';
import Order_in2 from '../LocaTwo_showFile/Order_in';
import Sale_in2 from '../LocaTwo_showFile/Sale_in';
import Sale_out2 from '../LocaTwo_showFile/Sale_out';

import Accounting3 from '../LocaThree_showFile/Accounting';
import Car_go3 from '../LocaThree_showFile/Car_go';
import Car_order3 from '../LocaThree_showFile/Car_order';
import G_out3 from '../LocaThree_showFile/G_out';
import Order_in3 from '../LocaThree_showFile/Order_in';
import Sale_in3 from '../LocaThree_showFile/Sale_in';
import Sale_out3 from '../LocaThree_showFile/Sale_out';

export default function LocaOne() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-50 h-screen text-gray-900 p-6">
      {/* Header */}
      {/* <div className="flex justify-between items-center mb-6">
        <h3 className="text-3xl font-semibold">LocaOne Table</h3>

        <button onClick={() => setIsModalOpen(true)}>Add Post</button>

      </div> */}


      { isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50'
         >
          <div className='w-screen'>
          <p className='text-center cursor-pointer hover:font-bold text-white' onClick={() => setIsModalOpen(false)}>⨉</p>
            <TableCreate/>
          </div>
        </div>
      )}


      {/* <div className="grid grid-cols-1 sm:grid-cols-1 gap-6"> */}
        {/* <div className="overflow-x-auto bg-white rounded-md shadow-md"> */}
        <div >
          <div>
            <div className='grid grid-cols-[repeat(auto-fit,_minmax(60px,_2fr))] gap-0 p-8 text-xs bg-white shadow-xl'>
                <div ><G_out/></div>
                {/* <Link onClick={() => setIsModalOpen(true)}><div  className='cursor-pointer'><Sale_in/></div></Link> */}
                <div ><Sale_in/></div>
                <div><Sale_out/></div>
                <div><Car_order/></div>
                <div><Order_in_one/></div>
                <div><Order_in_two/></div>
                <div><Accounting/></div>
                <div><Audit/></div>
                <div><Out_juty/></div>
                <div><Chack/></div>
            </div>
          </div>
          <div className='grid grid-cols-[repeat(auto-fit,_minmax(140px,_2fr))] pt-2 text-xs'>
            <div className='grid grid-cols-[repeat(auto-fit,_minmax(60px,_2fr))] p-8 text-xs bg-white shadow-xl'>
                <div><G_out2/></div>
                <div><Sale_in2/></div>
                <div><Sale_out2/></div>
                <div><Order_in2/></div>
                <div><Car_order2/></div>
                <div><CarGo_loca2/></div>
                <div><Account_loca2/></div>
            </div>
          </div>
          <div className='grid grid-cols-[repeat(auto-fit,_minmax(16px,_2fr))] p-8 text-xs bg-white shadow-xl'>
                <div><G_out3/></div>
                <div><Sale_in3/></div>
                <div><Sale_out3/></div>
                <div><Car_order3/></div>
                <div><Accounting3/></div>
            </div>
        </div>
        
      </div>
    // </div>
  );
}
