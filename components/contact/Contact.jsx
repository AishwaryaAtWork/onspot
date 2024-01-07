import React from 'react'

function Contact() {
  return (
    <div className='bg-[black] flex justify-center items-center flex-col p-10 gap-6 text-white text-center'>
        <p className='text-[2rem] font-semibold ' >Let Us Help You Book!</p>
        <p className=' text-sm'>We will work with you to book a taxi that fits your needs and budget.</p>
        <button  className='px-10 border-2  py-4 rounded-full' >Contact Us</button>
    </div>
  )
}

export default Contact