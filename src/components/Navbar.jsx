import React from 'react'

const Navbar = () => {
  return (
    <>
    {/* hero text and navbar */}
      <div className='flex justify-between items-center pt-7 px-12'>
        <div className='text-3xl text-[#394C5B] tracking-tighter' id="navhero">hemank</div>
        <div className='text-xl flex gap-25' id="othertext">
          <div className="relative cursor-pointer ml-17 group inline-block">
            Home
            <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-[#394C5B] transition-all duration-300 group-hover:w-full'></span>
          </div>
          <div className="relative cursor-pointer group inline-block">
            Projects
            <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-[#394C5B] transition-all duration-300 group-hover:w-full'></span>
          </div>
          <div className="relative cursor-pointer group inline-block">
            About Me
            <span className='absolute left-0 -bottom-1 h-[2px] w-0 bg-[#394C5B] transition-all duration-300 group-hover:w-full'></span>
          </div>
        </div>
        <a href="mailto:hemankkumar24@gmail.com">
            <button className='p-2 px-7 rounded-xl bg-blue-500 text-white text-xl cursor-pointer hover:bg-blue-600'>
                Contact Me
            </button>
        </a>

      </div>
    </>
  )
}

export default Navbar