import React from 'react'

import GghWifi from '../Loca_three_showFile/GghWifi';
import MbtWifi from '../Loca_three_showFile/MbtWifi';
import RoyalWifi from '../Loca_three_showFile/RoyalWifi';
import TbLinkWifi from '../Loca_three_showFile/TbLinkWifi';



export default function loca_three_show() {
  return (
    <div>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <GghWifi/>

        <MbtWifi/>

        <RoyalWifi/>

        <TbLinkWifi/>
        </section>
    </div>
  )
}
