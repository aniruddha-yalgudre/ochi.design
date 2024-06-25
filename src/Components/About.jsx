import React from 'react'
import photo from '../assets/photo.jpg'
const About = () => {
  return (
    <div className='about relative w-full bg-[#CDEA68] border-b-[1px] border-zinc-600  rounded-t-3xl    font-["Neue Montreal"]  '>
         
         <h1 className=' text-black text-[3.4vw]  leading-[1.1]  tracking-tight  px-16 py-28 w-[80%]   '>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, <br /> ex­plain com­plex ideas, and hire great peo­ple.</h1>

         
         <div className=' bottom about border-t-[1px] border-zinc-600 -mt-6  relative  px-16 flex w-full  justify-between  py-20 '>
           
              <div className='approach  w-1/2  mt-7' >
           
                  <h2 className=' text-black text-[3.5vw] '>Our approach :</h2>
                  <button className=' px-8 py-4   bg-zinc-800 text-white rounded-full uppercase mt-5'> read more  </button>

              </div>

             <div className='photo relative  mt-10 h-[30vw]  w-[75%] rounded-3xl overflow-hidden '>
               <img className=' absolute w-full h-full object-cover object-center ' src={photo} alt="" srcset="" />
             
             </div>


         </div>

    </div>
  )
}

export default About