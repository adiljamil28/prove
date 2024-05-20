import React from 'react'
import Image from 'next/image'

export const Capability = () => {
    return (
        <div className='main'>
            <section className='capability-section'>
                <div className="container mx-auto flex lg:flex-row gap-10">

                    <div className="flex-wrap lg:w-6/12 sm:w-1/2 ">

                        <div className='str-1'>
                            <h2 class="text-4xl md:text-4xl lg:text-4xl font-black py-4 text-white"><span class="stroke">Landing Pages & Websites</span></h2>
                            <h3 class="text-lg md:text-lg lg:text-lg font-white py-4 text-white">Capture more leads with a stunning website.</h3>
                            <div className='ser-pic'><Image src={"/ser1.png"} alt='' width={"800"} height={"500"} /></div>
                        </div>

                        <div className='str-1 object-cover'>
                            <h2 class="text-4xl md:text-4xl lg:text-4xl font-black py-4 text-white"><span class="stroke">Mobile Apps</span></h2>
                            <h3 class="text-lg md:text-lg lg:text-lg font-white py-4 text-white">Got an idea? Let&apos;s bring that concept to life.</h3>
                            <div className='ser-pic'><Image src={"/ser2.png"} alt='' width={"800"} height={"500"} /></div>
                        </div>

                        <div className='str-1'>
                            <h2 class="text-4xl md:text-4xl lg:text-4xl font-black py-4 text-white"><span class="stroke">Logos & Branding</span></h2>
                            <h3 class="text-lg md:text-lg lg:text-lg font-white py-4 text-white">Upgrade your branding to be more professional.</h3>
                            <div className='ser-pic'><Image src={"/ser3.png"} alt='' width={"800"} height={"500"} /></div>
                        </div>

                    </div>

                    <div className="banner-image lg:w-6/12 sm:w-1/2 text-right">
                        <h2 class="text-4xl md:text-4xl lg:text-4xl font-white  text-white"><span class="stroke">CAPABILITIES</span></h2>
                        <h3 class="text-4xl md:text-4xl lg:text-4xl font-white  text-white">Skills that meet your needs – and obliterate your competition.</h3>
                        <p class="text-lg md:text-lg lg:text-lg font-white py-4 text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                         <p class="text-lg md:text-lg lg:text-lg font-white py-4 text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

                    </div>

                </div>
            </section>
        </div>
    )
}
