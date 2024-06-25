import React from 'react'
import fyde from '../assets/fyde.png'
import vise from '../assets/vise.jpg'

function Card(data) {
 
  return (
    <div className='card'>
      <div className=' relative w-[45vw] h-[35vw]  bg-slate-500 rounded-2xl '>
           <img className=' absolute w-full h-full object-cover ' src={data} alt="" srcset="" />           
      </div>

    </div>
  )
}

export default Card