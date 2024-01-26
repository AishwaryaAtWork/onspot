"use client"
import React, { useState } from 'react'
import "@/styles/hero.css"
import Link from 'next/link'
function Hero() {
 
  const handleFilter = () => {
   
   }
  return ( 
    <div className=' home  w-full h-[60rem] xl:h-[40rem] 2xl:h-[40rem] justify-center items-center   gap-8 flex flex-col     '>
      
      <div className='p-16 flex flex-col justify-center items-center '>
        <div className=' glass-container w-full   border-2 h-[full] text-white  xl:text-white 2xl:text-white border-none rounded-3xl flex flex-col text-center gap-2 p-8'>
            <p className='text-[1.5rem] md:text-[2rem] xl:text-[2rem] font-semibold'>Easy & affordable Intercity Travelling With Us! Call and Get Your Ride On Spot.</p>
            <div> 
                <p className='text-[1rem] font-semibold'>Call and Get Your Ride On Spot.</p>
                <p className='text-[1rem] font-semibold mb-2'>Plan your trip now</p>
            </div>
        </div>
       
       <Link  href={"#BookForm"}  className='p-4 w-[12rem] text-xl text-center -mt-[2rem] z-10 bg-[#003C82] text-white  border-2 h  rounded-full font-medium'>Book now</Link>
      
       
        </div>
    </div>
  )
}

export default Hero
