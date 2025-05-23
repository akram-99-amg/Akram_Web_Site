import { useState } from 'react'
import { Link } from "react-scroll"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';


const NavBar = () => {
  const [menu, setMenu] = useState(false)

  return (
    <div className='fixed top-1 left-0 right-0 mx-6  z-50  h-16 bg-gray-700 sm:bg-gray-800 rounded-md flex items-center justify-between sm:px-8 py-3 text-2xl text-white '>

      <div className='flex w-full justify-around items-center sm:w-auto sm:justify-start '>
        <p>Akram Mazegh</p>
        <FontAwesomeIcon
          icon={faBars}
          className='sm:hidden hover:text-blue-200 focus:text-blue-200 cursor-pointer text-3xl'
          onClick={() => setMenu(!menu)}
        />
      </div>

      <div >
        <ul className=' hidden sm:flex sm:gap-8 sm:text-xl '>
          {/* <li className='hover:text-blue-400 cursor-pointer'>
            <Link to="home" smooth={true} duration={500} >
              Home
            </Link>
          </li> */}

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
            <Link to="projects" smooth={true} duration={500} >
              Projects
            </Link>
          </li>

          <li className='hover:text-blue-400 cursor-pointer'>
            <Link to="contact" smooth={true} duration={500} >
              Contact
            </Link>
          </li>

          <li className='hover:text-blue-400 cursor-pointer'>
            <a
              href="/CV/CV.pdf"
              download >
              My CV
            </a>




          </li>
        </ul>
      </div>


      {menu && (
        
          <ul className=' pt-16 fixed top-0  -z-40 flex flex-col items-center justify-center gap-5 py-4 w-screen text-lg sm:hidden bg-gray-700 rounded-lg '>
            <li className='hover:text-blue-400 hover:bg-blue-100 focus:bg-blue-100 w-[80%] h-7 text-center rounded-md  cursor-pointer '>
              <Link to="home" smooth={true} duration={500} >
                Home
              </Link>
            </li>

            <li className='hover:text-blue-400 hover:bg-blue-100 focus:bg-blue-100 w-[80%] h-7 text-center rounded-md cursor-pointer'>
              <Link to="about" smooth={true} duration={500} >
                About
              </Link>
            </li>

            <li className='hover:text-blue-400 hover:bg-blue-100 focus:bg-blue-100 w-[80%] h-7 text-center rounded-md cursor-pointer'>
              <Link to="skills" smooth={true} duration={500} >
                Skills
              </Link>
            </li>

            <li className='hover:text-blue-400 hover:bg-blue-100 focus:bg-blue-100 w-[80%] h-7 text-center rounded-md cursor-pointer'>
              <Link to="projects" smooth={true} duration={500} >
                Projects
              </Link>
            </li>

            <li className='hover:text-blue-400 hover:bg-blue-100 focus:bg-blue-100 w-[80%] h-7 text-center rounded-md cursor-pointer'>
              <Link to="contact" smooth={true} duration={500} >
                Contact
              </Link>
            </li>

            <li className='hover:text-blue-400 hover:bg-blue-100 focus:bg-blue-100 w-[80%] h-7 text-center rounded-md cursor-pointer'>
              <a
                href="/CV/CV.pdf"
                download >
                My CV
              </a>
            </li>
          </ul>
        
      )}





    </div>
  )
}

export default NavBar
