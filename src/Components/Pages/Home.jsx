import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

import { BackgroundBeams } from "../Background/background-beams";

const Home = () => {
  return (
    
    <div id="home" className='bg-black  sm:py-[70px] py-16 sm:px-[150px] px-8  text-white flex flex-col gap-7 font-semibold text-xl sm:text-2xl   '>
<BackgroundBeams  />

      <h2 className='text-4xl pt-4 z-10'>Hi, <span className='text-3xl'>I'm</span> <span className='font-semibold text-3xl sm:text-3xl'> Akram Mazegh</span>  </h2>

      <p className='font-normal'>I'm passionate web developer</p>
      <div className=' text-lg pr-10 mb-4'>
        I'm a junior web developer based in Ottawa, focused on creating clean, responsive, and user-friendly websites.
        My journey into tech was shaped by hands-on experience in management, accounting,
        and digital marketing — which now inform my approach to building practical and business-oriented web solutions.
        I'm proficient in modern web technologies and design tools, and I'm always looking for opportunities to learn, grow,
        and contribute to exciting development projects.
      </div>

      <div className=' z-10 flex justify-center sm:justify-start gap-12 text-5xl' >
        <Link
          to="https://github.com/akram-99-amg?tab=repositories"
          target="_blank"
          >
          <FontAwesomeIcon
            className='hover:text-gray-300'
            icon={faGithub} />
        </Link>

        <Link
        to="https://www.linkedin.com/in/akram-mazegh-8a8741251/"
        target="_blank"
        >
          <FontAwesomeIcon
            className='hover:text-gray-300 '
            icon={faLinkedin} />
        </Link>

        <Link
        to="https://www.instagram.com/akram_mazegh/"
        target="_blank"
        >
          <FontAwesomeIcon
            className='hover:text-gray-300 '
            icon={faInstagram} />
        </Link>
      </div>



    </div>
    
  )
}

export default Home
