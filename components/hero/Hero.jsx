import React from 'react'
import "@/styles/hero.css"
function Hero() {
  return ( 
    <div className='w-full h-[39rem] bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col justify-center items-center  p-16   '>
        <div className=' glass-container z-0 border-2 h-[full] border-black rounded-3xl flex flex-col text-center gap-2 p-8'>
            <p className='text-[1rem] md:text-[2rem] xl:text-[2rem] font-semibold'>Easy and Cheap Intercity Travelling With Us! Call and Get Your Ride On Spot.</p>
            <div> 
                <p className='text-[1rem] font-medium'>Call and Get Your Ride On Spot.</p>
                <p className='text-[1rem] font-medium mb-2'>Plan your trip now</p>
            </div>
        </div>
       <button className='p-4 w-[12rem] -mt-7 text-xl bg-blue-500 z-10 rounded-full font-medium hover:bg-purple-500 border-2'>Book now</button>

    </div>
  )
}

export default Hero