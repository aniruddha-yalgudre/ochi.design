import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'

const App = () => {
  return (
    <div className=' w-full min-h-screen bg-black text-white'>
        
        <Navbar/>
        <Hero/>
        <Marquee/>
        <About/>
        <Eyes/>
        <Featured/>
        

    </div>
  )
}

export default App