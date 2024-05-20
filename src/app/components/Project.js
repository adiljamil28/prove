import React from 'react'
// import dynamic from 'next/dynamic';
import  SideScroll  from "./SideScroll";

// Dynamically import the SideScroll component with SSR set to false
// const SideScroll = dynamic(() => import('./components/SideScroll'), {
//   ssr: false
// });


export const Project = () => {
    return (
        <div>
            <section className="technology lg:py-20 bg-black">
                <div className="container mx-auto md:w-[60%]">
                    <div className="flex flex-col text-center tech-contant">
                        <h2 className="text-4xl md:text-8xl lg:text-8xl font-black py-4 text-white">Featured <span className='stroke'>Project </span></h2>
                        <h3 className="text-3xl font-semibold uppercase md:mx-auto py-4 lg:leading-relaxed or-font text-white">Accelerating Business Growth With High-Tech Tools And Assets For Ultimate Success</h3>
                        <p class="hasAniTitle text-lg font-normal text-white">
                            <span>With a keen track of the latest technological breakthroughs and improvements, COMPANY enjoys</span>
                        </p>
                    </div>
                </div>


                <div className='project-big md:pt-14 lg:pt-14'>
                    <div className='flex gap-3'>
                            <SideScroll />
                    </div>
                </div>
            </section>
        </div>
    )
}
