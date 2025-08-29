import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <div className='overflow-hidden'>
    <Hero />
    <Projects />
    <AboutMe />
    <Footer />
    </div>
    </>
  )
}

export default App