import NavBar from '../Components/Pages/NavBar'
import Home from '../Components/Pages/Home'
import Skills from '../Components/Pages/Skills'
import About from '../Components/Pages/About'
import Contact from '../Components/Pages/Contact'
import Projects from '../Components/Pages/Projects'



const MainPage = () => {
  return (
    <div className='relative min-w-screen min-h-screen bg-black overflow-hidden'>
        <div>
          
          <NavBar />
          
          <Home />
          
          {/* <About /> */}
          <Skills />
          <Projects />
          <Contact />
          
        </div>
      
    </div>
  )
}

export default MainPage
