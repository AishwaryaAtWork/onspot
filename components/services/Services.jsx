import React from 'react'
import Image from 'next/image'
import { serviceData } from './serviceData'
function Services() {
    return (

        <div className='flex  justify-center gap-1 flex-wrap '>
            {serviceData.map((item, index) => {
                return <div className=' p-5 text-center flex items-center flex-col gap-1 md:gap-0.5 ' key={index}>
                    <div className='flex  justify-center'><Image src={item.logo} width={110} alt='' /></div>
                    <p className='font-inter text-[40px]  w-27 font-semibold leading-normal border-[black] '>{item.name}</p>
                    <p className='lg:w-96 md:w-auto md:text-[2rem] text-center  font-medium  lg:text-[0.9rem] '>{item.para}</p>
                </div>
            }) }
        </div>

    )
}

export default Services