import React, { useState } from 'react'
import Bgeyes from '../assets/Bgeyes.jpg'
import { useEffect } from 'react'

function Eyes() {

  const[rotate, setrotate] = useState(0);

  useEffect(() => {


    window.addEventListener('mousemove',(dets) =>{
     
      var X = dets.clientX;
      var Y = dets.clientY;

      var deltaX = X - window.innerWidth/2 ;
      var deltaY = Y - window.innerHeight/2;

      var angle = Math.atan2(deltaX , deltaY) * (180/ Math.PI);
      
      setrotate(angle);
      
    })
  })
  
 
  return (
    <div className='eyes relative w-full h-screen bg-white '>
         <div className='box absolute h-full w-full  bg-red-600  '>
                 <img className='absolute w-full h-full object-cover object-center' src={Bgeyes} alt=""  />

            <div className='eyes  absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-between items-center  gap-10 '>
                <div className=' relative h-[18vw] w-[18vw] bg-slate-50 rounded-full'>
                     <div className='black  absolute h-[12vw] w-[12vw] bg-black rounded-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] overflow-hidden '>
                      <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}   className='line absolute h-14 w-full  top-1/2 left-1/2 translate-x-[50%] translate-y-[50%]  '>
                        <div className='maineye red absolute h-full  w-14 bg-white top-1/2  -translate-y-[50%] rounded-full'></div>
                      </div> 
                     </div>
                </div>


                <div className='  relative h-[18vw] w-[18vw] bg-slate-50 rounded-full'>
                     <div className='black absolute h-[12vw] w-[12vw] bg-black rounded-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] overflow-hidden '>
                     <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}}   className='line absolute h-14 w-full top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  '>
                        <div className='maineye red absolute h-full  w-14 bg-white top-1/2  -translate-y-[50%] rounded-full'></div>
                      </div> 
                     </div>
                </div>

            </div>        
          
         
         
         
         
          </div>       
    </div>
  )
}

export default Eyes