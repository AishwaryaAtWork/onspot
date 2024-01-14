"use client"
import React, { useState } from 'react'
import "@/styles/hero.css"
import Link from 'next/link'
import BookForm from '../form/BookForm';
function Hero() {
  const [showOrderForm , setShowOrderForm] = useState(false);
  const handleFilter = () => {
    setShowOrderForm(true)
   }
  return ( 
    <div className=' home  w-full h-[40rem]  flex flex-col justify-center items-center  p-16   '>
        <div className=' glass-container z-0 border-2 h-[full] text-white  xl:text-white 2xl:text-white border-black rounded-3xl flex flex-col text-center gap-2 p-8'>
            <p className='text-[1.5rem] md:text-[2rem] xl:text-[2rem] font-semibold'>Easy and Cheap Intercity Travelling With Us! Call and Get Your Ride On Spot.</p>
            <div> 
                <p className='text-[1rem] font-semibold'>Call and Get Your Ride On Spot.</p>
                <p className='text-[1rem] font-semibold mb-2'>Plan your trip now</p>
            </div>
        </div>
       <button  onClick={handleFilter} className='p-4 w-[12rem]  -mt-7 text-xl text-center  bg-[#003C82] text-white  border-2 h z-10 rounded-full font-medium    '>Book now</button>
       {showOrderForm && <BookForm setShowOrderForm={setShowOrderForm} />}
       
    </div>
  )
}

export default Hero
//bg-gradient-to-r from-blue-500 to-purple-500