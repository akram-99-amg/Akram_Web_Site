import { useState } from 'react'
import { Link } from "react-scroll"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <div className='fixed top-0 left-0 z-50 w-full h-16 bg-gray-700 sm:bg-gray-800 rounded-b-md flex items-center justify-between sm:px-8 py-3 text-2xl text-white '>

      <div className='flex w-full justify-around items-center sm:w-auto sm:justify-start '>
        <p>Akram Mazegh</p>
        <FontAwesomeIcon
          icon={faBars}
          className='sm:hidden cursor-pointer'
          onClick={() => setMenu(!menu)}
        />
      </div>

      <div >
        <ul className=' hidden sm:flex sm:gap-8 sm:text-xl '>
          <li className='hover:text-blue-400 cursor-pointer'>
            <Link to="home" smooth={true} duration={500} >
              Home
            </Link>
          </li>

          <li className='hover:text-blue-400 cursor-pointer'>
            <Link to="home" smooth={true} duration={500} >
              About
            </Link>
          </li>

          <li className='hover:text-blue-400 cursor-pointer'>
            <Link to="skills" smooth={true} duration={500} >
              Skills
            </Link>
          </li>

          <li className='hover:text-blue-400 cursor-pointer'>
            <Link to="contact" smooth={true} duration={500} >
              Contact
            </Link>
          </li>

          <li className='hover:text-blue-400 cursor-pointer'>
            My CV
          </li>
        </ul>
      </div>


      {menu && (
        <ul className=' pt-16 fixed top-0 left-0 -z-40 flex flex-col items-center gap-5 py-4 w-screen text-lg sm:hidden bg-gray-700 rounded-md '>
          <li className='hover:text-blue-400 cursor-pointer'>
            <Link to="home" smooth={true} duration={500} >
              Home
            </Link>
          </li>

          <li className='hover:text-blue-400 cursor-pointer'>
            <Link to="about" smooth={true} duration={500} >
              About
            </Link>
          </li>

          <li className='hover:text-blue-400 cursor-pointer'>
            <Link to="skills" smooth={true} duration={500} >
              Skills
            </Link>
          </li>

          <li className='hover:text-blue-400 cursor-pointer'>
            <Link to="contact" smooth={true} duration={500} >
              Contact
            </Link>
          </li>

          <li className='hover:text-blue-400 cursor-pointer'>
            My CV
          </li>
        </ul>
      )}





    </div>
  )
}

export default NavBar
