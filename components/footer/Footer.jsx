import React from 'react'
import fb from "@/public/images/footer/fb.svg"
import insta from "@/public/images/footer/insta.svg"
import x from "@/public/images/footer/x.svg"
import yt from "@/public/images/footer/yt.svg"
import Image from 'next/image'
import Link from 'next/link'
function Footer() {
    return (
        <div className='bg-[black] gap-4  flex-wrap text-white flex justify-center items-center p-10 '>
            <div className='border-2 rounded-2xl h-[15rem] p-4 w-[20rem] flex flex-col gap-7  border-[white]'>
                <div className='text-[1.6rem]'>Onspot</div>
                <div className='text-[0.8rem]'>We create unforgettable travel experiences that you will cherish all your life.</div>
                <div className='flex gap-2'>
                    <Link href={"/"}><Image src={insta} alt='' /></Link>
                    <Link href={"/"} ><Image src={fb} alt='' /></Link>
                    <Link href={"/"} ><Image src={yt} alt='' /></Link>
                    <Link href={"/"} ><Image src={x} alt='' /></Link>
                </div>
            </div>
            <div className='w-[30rem] rounded-2xl flex  flex-col gap-7 border-2 border-white p-4 h-[15rem]'>
                <div className='text-[1.6rem]' >Take a ride with us</div>
                <div className='text-[0.8rem]'>Subscribe to be the first to know about our new trips and additional promotions</div>
                <div class="relative flex">
                    <input type="email" name="" placeholder='Email Address' id="" className=" w-full text-black px-4 text-sm py-3 outline-none rounded-full" />
                    <button className="absolute right-10 top-[4px] -mr-8 border-[black] bg-black border-2 px-5 py-1 rounded-full">Subscribe</button>
                </div>
            </div>
            <div className='border-2 rounded-2xl border-[white] flex  flex-col gap-7 h-[15rem] p-4'>
                <div className='text-[1.6rem]'>About</div>
                <div className='flex flex-col gap-1 text-[0.8rem]'>
                    <Link href={"/"}>About Us</Link>
                    <Link href={"/"}>Career</Link>
                    <Link href={"/"}>News & Article</Link>
                    <Link href={"/"}>Partners</Link>
                </div>
            </div>
            <div className='border-2 rounded-2xl border-[white] flex  flex-col gap-7 h-[15rem] p-4'>
                <div className='text-[1.6rem]' >Support</div>
                <div className='flex flex-col gap-1 text-[0.8rem]'>
                    <Link href={"/"}>Contact</Link>
                    <Link href={"/"}>FAQ</Link>
                    <Link href={"/"}>Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer