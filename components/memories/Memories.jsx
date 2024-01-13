import React from 'react'
import "@/styles/memories.css"
function Memories() {
  return (
    <div className='flex flex-col gap-1 mb-3'>
        <p className='text-[3rem] text-center font-semibold'>Booking Memories</p>
    <div className='flex justify-center flex-wrap gap-5 p-4'>
         <div className='border-2  rounded-2xl border-[#003C82] p-5 '>
            <div className='first text-white h-[24rem] xl:h-[41rem] w-[19rem] xl:w-[17rem] flex flex-col rounded-xl  justify-end p-8 transform transition-all duration-200  hover:scale-105'>
                <p className='text-xl'>DELHI</p>
                <div>
                    <li>3 trips </li>
                    <li>60 travelers</li>
                </div>
            </div>
        </div>
        <div className=' flex flex-wrap flex-col gap-4 m-7 md:m-0 xl:m-0 2xl:m-0'>
            <div className='border-2  rounded-2xl border-[#003C82] p-5'>
                <div className='second w-[100%] text-white flex flex-col justify-end p-6 rounded-2xl  h-[20rem] transform transition-all duration-200  hover:scale-105'>
                    <p className='text-xl'>DELHI</p>
                    <div>
                        <li>3 trips </li>
                        <li>60 travelers</li>
                    </div>
                </div>
            </div>
            <div className='flex h-[20rem] justify-center flex-wrap gap-2 w-[100%] '>
            <div className='border-2  rounded-2xl border-[#003C82] p-3'>
                <div  className='third text-white flex flex-col justify-end p-6 h-[100%] rounded-2xl w-[20rem] transform transition-all duration-200  hover:scale-105'>
                    <p className='text-xl'>DELHI</p>
                    <div>
                        <li>3 trips </li>
                        <li>60 travelers</li>
                    </div>
                </div>
             </div>   
             <div className='border-2  rounded-2xl border-[#003C82] p-3'>
                <div  className='forth text-white flex flex-col justify-end p-6 h-[100%] rounded-2xl w-[20rem] transform transition-all duration-200  hover:scale-105'>
                    <p className='text-xl'>DELHI</p>
                    <div>
                        <li>3 trips </li>
                        <li>60 travelers</li>
                    </div>
                </div>
             </div>   
            </div>
        </div>


    </div>
    </div>
  )
}

export default Memories