import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <div className='fixed top-0 z-50 w-full h-16 bg-gray-700 sm:bg-gray-800 rounded-b-md flex items-center justify-between sm:px-8 py-3 text-2xl text-white '>
      
        <div className='flex w-full justify-around items-center sm:w-auto sm:justify-start '>
          <p>Akram Mazegh</p>
          <FontAwesomeIcon
          icon={faBars}
          className='sm:hidden'
          />
        </div>
      
      <div >
          <ul className=' hidden sm:flex sm:gap-8 sm:text-xl '>
            <li className='hover:text-blue-400 cursor-pointer'>Home</li>
            <li className='hover:text-blue-400 cursor-pointer'>About</li>
            <li className='hover:text-blue-400 cursor-pointer'>Skills</li>
            <li className='hover:text-blue-400 cursor-pointer'>Contact</li>
            <li className='hover:text-blue-400 cursor-pointer'>My CV</li>
          </ul>
      </div>
    </div>
  )
}

export default NavBar
