import React from 'react'
import Image from 'next/image'
import { serviceData } from './serviceData'
function Services() {
    return (

        <div className='flex  justify-center gap-1 flex-wrap '>
            {serviceData.map((item, index) => {
                return <div className=' p-5 text-center flex items-center flex-col gap-1 md:gap-0.5 ' key={index}>
                    <div className='flex  justify-center'><Image src={item.logo} width={128} alt='' /></div>
                    <p className='font-inter text-3xl  w-30 font-semibold leading-normal border-[black] '>{item.name}</p>
                    <p className='lg:w-96 md:w-40 text-center  font-semibold  text-[0.75rem] '>{item.para}</p>
                </div>
            }) }
        </div>

    )
}

export default Services