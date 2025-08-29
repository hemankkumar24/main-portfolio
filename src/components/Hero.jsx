import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    // background image
    <div className="min-h-screen w-screen bg-cover bg-bottom flex flex-col"
     style={{ backgroundImage: "url('/images/hero_background.png')" }}>
      {/* Navbar Imported */}
      <Navbar />
      {/* Main Content */}
      <div className='flex-1 flex justify-between items-center mb-20 text-[#394C5B]'>
        {/* The Text */}
        <div className='w-1/3 pl-25'>
          <div className='text-4xl' id='herotext'>Hello I'm</div>
          <div className='text-8xl leading-15' id='herobold'>HEMANK</div>
          <div className='pt-10 text-xl' id="othertext">AI/ML Developer with expertise in Machine Learning, Deep Learning, Generative AI, and Full-Stack (MERN) development.
          </div>
          <div className='font-bold cursor-pointer hover:underline'>
            <a href="/resume/Hemank_Resume.pdf" target="_blank" rel="noopener noreferrer" className="font-bold cursor-pointer hover:underline">Resume.pdf</a>
          </div>
        </div>
        {/* Image */}
        <div className='w-1/3'>
          <img src="./images/hero_image.png" className='scale-75' alt="main_image" />
        </div>
        <div className='w-1/3 pl-25'>
          <img src="./images/skills.png" className='scale-75' alt="main_image" />
        </div>
      </div>
    </div>
  )
}

export default Hero