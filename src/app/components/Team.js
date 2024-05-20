import React from 'react'
import Image from 'next/image'

export const Team = () => {
  return (
    <div>
      <div className='container mx-auto'>
        <div className='team-sec flex justify-evenly items-center py-20 gap-5'>
        <h4 className='text-6xl or-color font-semibold'>MEET THE LEADERS<br/>
            <span className='text-4xl text-[#f4f0ea] font-semibold'>WHO RUNS THE SHOW</span></h4>
          <div className='agent text-center'>
            <Image className='mx-auto -mb-8' src={"/t1.webp"} alt='agent-pic' height={100} width={100}/>
            <div className='or-bg py-10 rounded-lg px-5'>
              <h2 className='text-xl font-bold text-black'>Lia Sinclair</h2>
              <p className='text-[#f4f0ea] text-lg font-thin'>Because at Pine Book Publishing, your success is our priority.</p>
            </div>
          </div>

          <div className='agent text-center'>
            <Image className='mx-auto -mb-8' src={"/t4.jpg"} alt='agent-pic' height={100} width={100}/>
            <div className='or-bg py-10 rounded-lg px-5'>
              <h2 className='text-xl font-bold text-black'>Damon Peters</h2>
              <p className='text-[#f4f0ea] text-lg font-thin'>Because at Pine Book Publishing, your success is our priority.</p>
            </div>          </div>

          <div className='agent text-center'>
            <Image className='mx-auto -mb-8' src={"/t1.webp"} alt='agent-pic' height={100} width={100}/>
            <div className='or-bg py-10 rounded-lg px-5'>
              <h2 className='text-xl font-bold text-black'>Samantha Lewis</h2>
              <p className='text-[#f4f0ea] text-lg font-thin'>Because at Pine Book Publishing, your success is our priority.</p>
            </div>          
            </div>

          <div className='agent text-center'>
            <Image className='mx-auto -mb-8' src={"/t2.webp"} alt='agent-pic' height={100} width={100}/>
            <div className='or-bg py-10 rounded-lg px-5'>
              <h2 className='text-xl font-bold text-black'>Damon Peters</h2>
              <p className='text-[#f4f0ea] text-lg font-thin'>Because at Pine Book Publishing, your success is our priority.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
