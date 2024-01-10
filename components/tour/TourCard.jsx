import React from 'react'
import "@/styles/Tour.css"
function TourCard({location,detail,from,to}) {
    
  return (
    <div className=' flex flex-wrap justify-center gap-20'>
     <div className='flex border-2 h-[32rem] rounded-2xl justify-center items-center w-[90%] p-3   border-black '>
        <div className='tour  h-[30rem] w-[30rem] bg-no-repeat  rounded-2xl    p-[5%] flex flex-col justify-between transform transition-all duration-200  hover:scale-105' >
            <div className='text-white text-md font-medium'>{location}</div>
            <div className=' flex flex-col gap-7'>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm text-white'>{detail}</p>
                    <p className='text-[1.8rem] w-[100%] text-white'>{from} to {to}</p>
                </div>
                <button className='p-2 w-40 text-2xl mb-4 text-white font-medium border-2 border-white rounded-full'>Book Now</button>
            </div>
        </div>
    </div>
 
  </div>
  )
}

export default TourCard