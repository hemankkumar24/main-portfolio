import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <div className="min-h-screen w-screen bg-cover bg-top flex flex-col"
     style={{ backgroundImage: "url('/images/background_2.png')" }}>
        <div className='w-full flex text-xl pt-15 justify-center' id="othertext">
            About Me
        </div>
        <div className='flex mx-15 mt-10'>
            <div class="flex-1 bg-neutral-300 mx-5 rounded-sm">
                <div className='text-4xl text-[#394C5B] px-5 pt-5' id="navhero">My Journey</div>
                <div className='px-6 py-2 leading-snug text-[#394C5B] text-xl'> 
                    My coding journey began back in 6th grade, when I got curious about how Discord bots worked. What started as simple tinkering quickly turned into a passion for programming. Around the same time, I was also learning After Effects through gaming edits, which taught me creativity, design sense, and the patience to bring ideas to life.
                </div>
                <div className='px-6 py-2 leading-snug text-[#394C5B] text-xl'> 
                    That early spark grew into a deeper fascination with how machines can actually learn and possess knowledge through AI and ML. Today, that curiosity has evolved into expertise I now work across both full-stack development and AI/ML, blending creativity, logic, and innovation to build impactful projects.
                </div>
                <div className='px-6 py-2 pb-6 leading-snug text-[#394C5B] text-xl'>
                    On the full-stack side, I specialize in the MERN stack building dynamic, responsive web applications. On the AI/ML side, I work extensively with TensorFlow for deep learning, scikit-learn for classical machine learning, and frameworks like LangChain for building intelligent applications that leverage natural language understanding. I’m also experienced in RAG pipelines and vector search, enabling AI systems to retrieve and reason over large amounts of information efficiently.
                </div>
            </div>
            <div class="flex-1 bg-neutral-300 rounded-sm">
                <div className='text-4xl text-[#394C5B] px-5 pt-5 pb-2' id="navhero">IEEE CS</div>
                <div className='flex justify-between px-5 items-center'>
                <div className='text-2xl text-[#394C5B]' id="navhero">
                    Head of Technical Projects
                </div>
                <div className='text-xl text-[#394C5B]' id="navhero">
                    Present
                </div>
                </div>
                <div className='px-6 pb-6 leading-snug text-[#394C5B] text-xl'>
                    As the Head of Technical Projects, I hold the responsibility of overseeing the planning, coordination, execution, and successful delivery of all technical initiatives, projects, and events undertaken by our team, ensuring they meet both strategic objectives and high-quality standards.
                </div>

                <div className='flex justify-between px-5 items-center'>
                <div className='text-2xl text-[#394C5B]' id="navhero">
                    Junior Technical Team
                </div>
                <div className='text-xl text-[#394C5B]' id="navhero">
                    Nov 2024 - May 2025
                </div>
                </div>
                <div className='mx-6 pb-6 leading-snug text-[#394C5B] text-xl border-b-1 border-dashed border-[#394C5B]'>
                    As a member of the Junior Technical Working Team, I contribute to the planning, coordination, and execution of various technical events and initiatives.
                </div>

                <div className='px-6 pt-6 text-2xl text-[#394C5B]' id="navhero">
                    Connect With Me
                </div>
                <div className="flex gap-2 px-6 pt-4">
                <a href="https://www.linkedin.com/in/hemankkumar24" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={30} color="#333" />
                </a>
                <a href="https://github.com/hemankkumar24" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={30} color="#333" />
                </a>
                </div>
            </div>
        </div>
     </div>
  )
}

export default AboutMe