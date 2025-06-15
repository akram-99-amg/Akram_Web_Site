import { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { topNavBar } from "../utils/navbar";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="fixed left-0 right-0   z-50  h-16 bg-[#020818]  border-b border-b-white  flex items-center justify-between sm:px-8 py-3 text-2xl text-white ">
      <div className="flex w-full justify-around items-center sm:w-auto sm:justify-start ">
        <p className="font-bold">Akram Mazegh</p>
        <FontAwesomeIcon
          icon={faBars}
          className="sm:hidden hover:text-gray-400  cursor-pointer text-3xl"
          onClick={() => setMenu(!menu)}
        />
      </div>

      <div>
        {topNavBar.map((navbar) => (
          <div key={navbar.name}></div>
        ))}
      </div>

      <div>
        <ul className=" hidden sm:flex sm:gap-8 sm:text-xl ">
          <li className="hover:text-blue-400 cursor-pointer">
            <Link to="home" smooth={true} duration={500}>
              About
            </Link>
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            <a href="/CV/CV.pdf" download>
              My CV
            </a>
          </li>
        </ul>
      </div>

      {menu && (
        <ul className=" pt-16 fixed top-0  -z-40 flex flex-col items-center justify-center gap-5 py-4 w-screen text-lg sm:hidden bg-black border-x-black border-t-black border-2 ">
          {/* <li className='hover:text-blue-400 hover:bg-blue-100 focus:bg-blue-100 w-[90%] h-7 text-center rounded-md  cursor-pointer '>
              <Link to="home" smooth={true} duration={500} >
                Home
              </Link>
            </li> */}

          <li className="hover:text-black hover:bg-white focus:bg-blue-100 w-[90%] h-9 flex items-center justify-center py-3 rounded-md cursor-pointer">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>

          <li className="hover:text-black hover:bg-white focus:bg-blue-100 w-[90%] h-9 flex items-center justify-center py-3 rounded-md cursor-pointer">
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>

          <li className="hover:text-black hover:bg-white focus:bg-blue-100 w-[90%] h-9 flex items-center justify-center py-3 rounded-md cursor-pointer">
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>

          <li className="hover:text-black hover:bg-white focus:bg-blue-100 w-[90%] h-9 flex items-center justify-center py-3 rounded-md cursor-pointer">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>

          <li className="hover:text-black hover:bg-white focus:bg-blue-100 w-[90%] h-9 flex items-center justify-center py-3 rounded-md cursor-pointer ">
            <a href="/CV/CV.pdf" download>
              My CV
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
