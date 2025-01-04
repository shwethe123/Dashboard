import React from 'react'
import Gghwifi from '../Loca_fourFile/GghWifi'
import GghwifiE1 from '../Loca_fourFile/GghWifi_e1'
import AddNew from '../Loca_fourFile/AddNew'

export default function Loca_four_show() {
  return (
    <div>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Gghwifi/>

            <GghwifiE1/>

            <AddNew/>
        </section>
    </div>
  )
}
