import React from 'react'
import NavBar from '../Components/Pages/NavBar'
import Home from '../Components/pages/Home'
import Skills from '../Components/pages/Skills'
import About from '../Components/pages/About'
import Contact from '../Components/pages/Contact'


const MainPage = () => {
  return (
    <div className='min-w-screen min-h-screen bg-gray-800'>
        <div>
          <NavBar />
          <Home />
          <About />
          <Skills />
        </div>
      
    </div>
  )
}

export default MainPage
