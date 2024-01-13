import React from 'react'
import "@/styles/contact.css"

function Contact() {
  return (
    <div className='contact  flex justify-center items-center flex-col  p-16 gap-6 text-white text-center'>
        <p className='text-[2rem] font-bold ' >Let Us Help You Book!</p>
        <p className=' text-md'>We will work with you to book a taxi that fits your needs and budget.</p>
        <button  className='px-10 border-2 font-semibold  py-4 rounded-full' >Contact Us</button>
    </div>
  )
}

export default Contact