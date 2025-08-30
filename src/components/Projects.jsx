import React from 'react'

const Projects = () => {
  return (
    <div className="h-screen w-full bg-cover bg-top flex flex-col"
     style={{ backgroundImage: "url('/images/background_2.png')" }}>
        {/* Heading */}
        <div className='w-full flex text-xl pt-15 justify-center' id="othertext">
            Featured Projects
        </div>
        {/* Clear Report Project */}
        <div className='flex flex-wrap mt-15 mx-3 xl:mt-15 xl:m-15 overflow-hidden gap-5 justify-center'>
            <div className='w-full md:w-3/7  bg-neutral-300 rounded-xl'>
                <span className="absolute top-0 right-[-15px] h-full w-[1px] bg-black"></span>
                <img src="./images/projects/Clearreport.png" alt="ClearReport Image" 
                className='h-116 object-cover'/>
                <div className='text-3xl text-[#394C5B] bg-neutral-300 px-5 pt-5 -tracking-tightest' id="navhero">Clear Report</div>
                <div className='px-5 pb-2 text-[#394C5B] bg-neutral-300' id="othertext">ClearReport is a full-stack Retrieval-Augmented Generation (RAG) application designed to process health reports, extract structured data, and provide AI-powered insights in natural language.</div>
                <div className='py-3 px-5 pb-5 bg-neutral-300 rounded-b-2xl'>
                <button className='px-3 py-2 bg-neutral-500 text-neutral-50
                outline-none rounded-xl cursor-pointer hover:bg-neutral-600'><a href="https://github.com/hemankkumar24/clearreport-full-stack-rag-application" target="_blank">Source Code</a></button>
                </div>
            </div>

            {/* Transformer From Scratch */}
            <div className='w-full md:w-3/7 bg-neutral-300 rounded-xl'>
                <img 
                src="https://opengraph.githubassets.com/1/hemankkumar24/transformer-decoder-from-scratch" 
                alt="GitHub Repo Preview" className='h-116 w-full object-cover'
                />
                <div className='text-3xl text-[#394C5B] bg-neutral-300 px-5 pt-5 -tracking-tightest' id="navhero">Transformer Decoder from Scratch</div>
                <div className='px-5 pb-2 text-[#394C5B] bg-neutral-300 ' id="othertext">A step-by-step TensorFlow implementation of the Transformer decoder architecture, built entirely from scratch. Includes positional encoding, multi-head self-attention, and feed-forward networks.</div>
                <div className='py-3 px-5 pb-5 bg-neutral-300 rounded-b-2xl'>
                <button className='px-3 py-2 bg-neutral-500 text-neutral-50
                outline-none rounded-xl cursor-pointer hover:bg-neutral-600'><a href="https://github.com/hemankkumar24/transformer-decoder-from-scratch" target="_blank">Source Code</a></button>
                </div>
            </div>
        </div>
     </div>
  )
}

export default Projects