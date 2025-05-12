

const About = () => {
  return (
    <div id='about' className='px-6 flex flex-col-reverse gap-6 sm:gap-0 items-center sm:flex-row-reverse sm:justify-around text-white   '> 
        
          <div className='flex flex-col '>
            <div className='sm:w-96 text-lg mb-8 text-justify'>
              I'm a graduate in commercial sciences specializing in management. I have gained valuable experience in management,
              accounting, and digital marketing through various internships and jobs. Passionate about technology,
              I am proficient in several programming languages and design tools. I am always looking for new opportunities to learn and collaborate.
            </div>
            <ul className='text-lg'>
              <li>Name : Akram Mazegh</li>
              <li>Address : Ottawa, Canada </li>
              <li>E-mail : mazakram04@gmail.com</li>
            </ul>
          </div>
        
        <img
        src="Images/ak.jpg"
        alt="ak"
        className='sm:w-80 sm:h-96 w-64 rounded-lg'
        />
      
    </div>
  )
}

export default About
