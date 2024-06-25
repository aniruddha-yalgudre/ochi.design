  import React from 'react'
  import fyde from '../assets/fyde.png'
  import vise from '../assets/vise.jpg'

const Featured = () => {
  return (

    <div className='w-full bg-green-500 h-screen  '>
      <div className='head  border-b-2 border-zinc-600 px-16 pt-10 pb-5 font-["Neue Montreal"]'>
         <h2  className='font-semibold text-black text-[3.5vw] '>Featured projects</h2>
      </div>
        <div className='cards px-16 mt-10 flex  gap-8 justify-between items-center '>
        <div className='relative w-[45vw] h-[35vw]  bg-slate-500 rounded-2xl'>
          <img className=' h-full w-full object-cover object-center  rounded-2xl' src={fyde} alt="" srcset="" />
        </div>
        <div className='relative w-[45vw] h-[35vw]  bg-slate-500 rounded-2xl'>
          <img className=' h-full w-full object-cover object-center rounded-2xl' src={vise} alt="" srcset="" />
        </div>
        </div>
    </div>
  )
}

export default Featured