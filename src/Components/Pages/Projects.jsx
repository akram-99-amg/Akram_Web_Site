import {Link} from "react-router-dom"

const Projects = () => {
  return (
    <div id='projects'
    className="animate-slideFadeLeft"
    >
      <h1 className='mb-8 pt-9 text-center text-6xl sm:text-8xl text-white font-semibold '>
        Projects
      </h1>
      <div className='sm:flex sm:justify-around  gap-8 grid  '>

        <Link 
        to="https://akram-music-weld.vercel.app/"
        target="_blank"
        className="transition duration-300 hover:bg-gray-300"
        >
          <img
          src="Images/Musicapp.jpg"
          alt="Musicapp"
          
          className=' sm:w-[40em] sm:h-[22em] rounded-lg  '
          />
        </Link>
        
        <Link>
          <img
          src="Images/ak.jpg"
          alt="ak"
          className=' sm:w-[40em] sm:h-[22em]'
          />
        </Link>

      </div>
      
    </div>
  )
}

export default Projects
