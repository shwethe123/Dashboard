import React from 'react'

import WifiGet from '../Loca_oneFile/GghWifiGet';
// import MbtWifi from '../../NetWorkFile/Loca_oneFile/MbtWifiGet';
import LonmoWifi from '../Loca_oneFile/LonmoWifi';
import IQWifi from '../Loca_oneFile/IQWifi';
import RoyalWifi from '../Loca_oneFile/RoyalWifi';



export default function Loca_one_show() {
  return (
    <div>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <WifiGet/>

        {/* <MbtWifi/> */}

        <LonmoWifi/>

        <IQWifi/>

        <RoyalWifi/>
        </section>
    </div>
  )
}
