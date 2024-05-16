import React from 'react'
import Search from './Search'

import { FaBell, FaUser } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='bg-sky-200 ml-64 pt-6 px-4 flex justify-between items-center pb-8'>
        <Search className="px-4"/>
        <div className='space-x-4 items-center flex text-white transition-all'>
        <FaBell className=' hover:text-sky-400 hover:scale-110 ml-2'/>
        <FaUser className=' hover:text-sky-400 hover:scale-110 ml-2'/>
        </div>
       
       
    </div>
  )
}

export default Header