import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between px-8 py-3 text-2xl text-white'>
      <p>Portfolio</p>

      <div >
          <ul className='flex gap-8 '>
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
