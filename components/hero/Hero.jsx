import React from 'react'
import "@/styles/hero.css"
import Link from 'next/link'
function Hero() {
  return ( 
    <div className=' home  w-full h-[40rem]  flex flex-col justify-center items-center  p-16   '>
        <div className=' glass-container z-0 border-2 h-[full] text-black  xl:text-white 2xl:text-white border-black rounded-3xl flex flex-col text-center gap-2 p-8'>
            <p className='text-[1.5rem] md:text-[2rem] xl:text-[2rem] font-semibold'>Easy and Cheap Intercity Travelling With Us! Call and Get Your Ride On Spot.</p>
            <div> 
                <p className='text-[1rem] font-semibold'>Call and Get Your Ride On Spot.</p>
                <p className='text-[1rem] font-semibold mb-2'>Plan your trip now</p>
            </div>
        </div>
       <Link href={"/booknow"} className='p-4 w-[12rem]  -mt-7 text-xl text-center bg-[#FEFD05] text-black hover:border-[orange] border-2 h z-10 rounded-full font-medium   border-[orange] '>Book now</Link>

    </div>
  )
}

export default Hero
//bg-gradient-to-r from-blue-500 to-purple-500