import React from 'react'

const Hero = () => {
  return (

    <div className='w-full h-screen bg-black pt-2'>
    
      <div className=' textstructure mt-52  font-bold text-[7vw] font-["Founders_Grotesk_X-Cond "]  leading-none tracking-tighter top-1/2  left-1/2  -translate-x[1/2] -translate-y[1/2]'>
      
      {["we create","eye opening","presentations"].map((item,index)=>{
        return <div className=' uppercase '>
              <h1 className=' flex justify-start items-center leading-none tracking-tighter overflow-hidden'>
              
               {index==1 &&(<span className='inline-block  h-[7vw] w-[11vw] bg-red-300  rounded-xl overflow-hidden '>
              <img className=' h-full w-full object-cover object-center ' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" srcset="" /> </span> )}
               {item}
              
                </h1>
        </div>
      })}

      </div>

      <div className=' border-zinc-800  border-t-2 mt-32 flex justify-between items-center px-20 py-3  capitalize'> 

        {["for public and private campanies","from first pitch IPO"].map((elem,index)=>{

          return <p key={index} className='text-md font-light tracking-tight leading-none '>{elem}</p>

        })}
          
        <div className='startproject '>
        
            <button className=' px-4 py-2 border-zinc-300 border-[1px] rounded-full capitalize '>start the project</button>
         
        </div>




      </div>

      

    </div>
  )
}

export default Hero