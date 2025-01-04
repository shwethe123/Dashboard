import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function LocaNav() {
  return (
    <>
    <nav className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        <Outlet/>
        <ul className='w-4 text-center text-white'>
            <Link className='bg-purple-500 rounded-full w-7 h-7 m-2 cursor-pointer hover:bg-purple-600 font-bold'>1</Link>
            <Link className='bg-purple-500 rounded-full w-7 h-7 m-2 cursor-pointer hover:bg-purple-600 font-bold'>2</Link>
            <Link className='bg-purple-500 rounded-full w-7 h-7 m-2 cursor-pointer hover:bg-purple-600 font-bold'>3</Link>
            <Link className='bg-purple-500 rounded-full w-7 h-7 m-2 cursor-pointer hover:bg-purple-600 font-bold'>4</Link>
        </ul>
    </nav>
    </>
  )
}
