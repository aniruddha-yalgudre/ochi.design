import { motion } from "framer-motion"
import React from 'react'

const Marquee = () => {
  return (
    <div className='w-full py-14 bg-[#004D43] rounded-t-3xl mt-8'>
        <div className='marquee  font-bold flex  gap-2 whitespace-nowrap  flex-shrink-0 items-center  uppercase border-zinc-400 border-t-2 border-b-2  font-["Founders GroteskX-Cond"] overflow-hidden '>
           
            <motion.h1 initial={{x:"0%"}} animate={{x:"-100%"}} transition={{ease:'linear',duration:13, repeat:Infinity}} className='text-[12vw] leading-none py-2'>we are ochi  we are ochi</motion.h1>
            <motion.h1 initial={{x:"0%"}} animate={{x:"-100%"}} transition={{ease:'linear',duration:13, repeat:Infinity}} className='text-[12vw] leading-none py-2'>we are ochi  we are ochi</motion.h1>
        
        </div>
    </div>
  )
}

export default Marquee