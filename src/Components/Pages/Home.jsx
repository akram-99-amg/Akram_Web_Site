import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { BackgroundBeams } from "../Background/background-beams";

const Home = () => {
  return (
    <div
      id="home"
      className="bg-[#020818] min-h-screen sm:py-[70px] py-16 sm:px-[150px] px-6  text-white flex flex-col justify-center font-semibold text-xl sm:text-2xl animate-slideFadeDown    "
    >
      <BackgroundBeams />

      {/* <div className=' text-lg pr-10 mb-4'>
        I'm a junior web developer based in Ottawa, focused on creating clean, responsive, and user-friendly websites.
        My journey into tech was shaped by hands-on experience in management, accounting,
        and digital marketing — which now inform my approach to building practical and business-oriented web solutions.
        I'm proficient in modern web technologies and design tools, and I'm always looking for opportunities to learn, grow,
        and contribute to exciting development projects.
      </div> */}
      <div className="text-center z-10">
        <h1 className="text-5xl  sm:text-6xl font-bold mb-9">
          HI, I'm Akram Mazegh
        </h1>

        <div className=" text-xl sm:text-2xl mb-9">
          Junior Web Developer passionate about creating beautiful, functional
          web applications
        </div>
        <div className="mb-16 flex justify-center gap-6">
          <button className="bg-[#3b82f6] hover:bg-[#0950c2] duration-100 text-base py-3 px-4 rounded-lg text-black">
            <Link to="projects" smooth={true} duration={500}>
              View My Work
            </Link>
          </button>

          <button className="bg-[#0e2140] hover:bg-[#7790b2] duration-100 text-base py-3 px-4 rounded-lg">
            <Link to="contacts"> Get In Touch</Link>
          </button>
        </div>

        <div className=" z-10 flex justify-center  gap-12 text-5xl">
          <Link
            to="https://github.com/akram-99-amg?tab=repositories"
            target="_blank"
          >
            <FontAwesomeIcon
              className="hover:text-gray-400 duration-50"
              icon={faGithub}
            />
          </Link>
          <Link
            to="https://www.linkedin.com/in/akram-mazegh-8a8741251/"
            target="_blank"
          >
            <FontAwesomeIcon
              className="hover:text-gray-400 duration-50 "
              icon={faLinkedin}
            />
          </Link>
          <Link to="https://www.instagram.com/akram_mazegh/" target="_blank">
            <FontAwesomeIcon
              className="hover:text-gray-400 duration-50 "
              icon={faInstagram}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
