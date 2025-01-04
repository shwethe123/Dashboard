import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import LocaNav from './LocaNav';

import Loca_one_show from '../../NetWorkFile/Loca_one_showFile/loca_one_show';
import MbtWifi from '../../NetWorkFile/Loca_oneFile/MbtWifiGet';
import LonmoWifi from '../../NetWorkFile/Loca_oneFile/LonmoWifi';
import IQWifi from '../../NetWorkFile/Loca_oneFile/IQWifi';
import RoyalWifi from '../../NetWorkFile/Loca_oneFile/RoyalWifi';

const router = createBrowserRouter([
    {
      path: "/",
      element: <LocaNav />,
      children : [
        {
          path : "/loCaone",
          element : <Loca_one_show/>
        }
      ]
    },
  ]);
  
  
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
  

// export default function 
// () {
//   return (
//     <div>
//         <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//         <WifiGet/>

//         <MbtWifi/>

//         <LonmoWifi/>

//         <IQWifi/>

//         <RoyalWifi/>
//         </section>
//     </div>
//   )
// }
