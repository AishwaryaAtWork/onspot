import React from 'react'
import Image from 'next/image'
import cab from "@/public/images/cab.png"
function Feature() {
  return (
    <div className='flex justify-evenly flex-wrap '>
        <div className='  w-[40rem]  p-4 flex flex-col gap-4 '>
            <p className='font-semibold  text-[3rem]'>Get immediate intercity cabs at Best Price</p>
            <p className='text-[1rem]  font-medium leading-normal '>Discover seamless intercity travel solutions at unmatched prices with our prompt and reliable cab services. We offer immediate availability, ensuring you reach your destination hassle-free at the best rates possible. Our skilled drivers, diverse vehicle options, and 24/7 service guarantee a comfortable journey every time. Whether it&apos;s city-to-city travel, airport transfers, tailored packages, corporate needs, or tourist explorations, we&apos;ve got you covered. Booking is easy—call us, book online, or walk in. Contact us now at [Insert Phone Number] or [Insert Email Address] to experience convenience, affordability, and comfort in your intercity travels.</p>
            <div className='flex  gap-8'>
                <div className='text-[1rem] font-semibold'>
                    <p>1000+</p>
                    <p>Clients</p>
                </div>
                <div  className='text-[1rem] font-semibold'>
                    <p>500+</p>
                    <p>Bookings</p>
                </div>
            </div>
            <button className='border-2 mt-4 border-[#003C82] w-56 font-medium text-[#003C82] text-2xl rounded-full p-[16px]'>Book Now</button>
        </div>
        <div className=' p-4 '>
            <Image className='mt-5 border-2 p-4 rounded-3xl' src={cab}  alt=''/>
        </div>
    </div>
  )
}

export default Feature