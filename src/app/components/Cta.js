import React from 'react'
import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";


export const Cta = () => {
  return (
    <div>
        <div className='cta-main bg-[#f4f0ea] p-10 flex justify-between items-center'>
            <Image src={"/cta.webp"} alt='' height={150} width={350}/>
            <h4 className='text-6xl or-color font-semibold'>We Are One<br/>
            <span className='text-6xl text-black font-semibold'>Step Away <FaArrowRightLong className='inline' /></span></h4>
           <button className='border text-2xl or-color p-3 rounded-lg border-black'>CONTACT US</button>
        </div>
    </div>
  )
}
