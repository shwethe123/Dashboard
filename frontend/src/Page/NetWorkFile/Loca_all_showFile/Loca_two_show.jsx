import React from 'react'

import GghWifi from '../Loca_twoFile/GghWifi';
import IQNet from '../Loca_twoFile/IQNet';
import LongmaoWifi from '../Loca_twoFile/LongmaoWifi';
import TbbWifi from '../Loca_twoFile/TbbWifi';



export default function loca_two_show() {
  return (
    <div>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <GghWifi/>

        <IQNet/>

        <LongmaoWifi/>

        <TbbWifi/>
        </section>
    </div>
  )
}
