import React from 'react'
import CountUp from 'react-countup';
export const WhyUs = () => {
    return (
        <div>

            <section className='why-us'>
                <div className="container mx-auto flex lg:flex-row flex-col py-14 ">
                    <div className="lg:w-5/12 lg:sticky sm:relative text-center md:text-left">
                        <h2 class="text-2xl md:text-4xl lg:text-4xl font-white  text-white">WHY <span class="stroke">COMPANY NAME</span></h2>
                        <h3 class="text-2xl md:text-4xl lg:text-4xl font-white  text-white lg:leading-loose">Is A Leading App Agency</h3>
                        <p class="hasAniTitle text-lg font-normal text-white">
                        At Pine Digital Hub , a professional digital design agency, established in 2023, we have been at the forefront
                         of the industry, consistently delivering exceptional results that help businesses thrive. Our journey began 
                         with a passion for creativity and a commitment to excellence, driving us to become a trusted name in the
                          design world.</p><br/>

                          <p class="hasAniTitle text-lg font-normal text-white">We offer a range of services to elevate your brand presence. With expertise in logo design, website design, video animation, SEO, social media marketing, mobile application development, and branding, we have successfully catered to diverse client requirements.</p>
                            <p class="hasAniTitle text-lg font-normal text-white">We pride ourselves on our ability to understand and align with each client&apos;s unique goals. Our dedicated team of talented designers and developers work closely with you to create visually stunning and functional designs that leave a lasting impression.

                            <br/>Partner with us to unlock your brand&apos;s full potential and make a powerful impact in your industry!</p>
                    </div>


                    <div className="flex-wrap lg:w-7/12 text-right">

                        <div className='str-1'>
                        <h2 class="text-4xl md:text-9xl lg:text-9xl font-black py-4 text-white"><span class="stroke"><CountUp end={250} duration={2.75} enableScrollSpy />+
                            </span></h2>
                        <h3 class="text-2xl md:text-4xl lg:text-4xl font-white py-4 text-white">Projects Delivered</h3>
                        </div>

                        <div className='str-2'>
                        <h2 class="text-4xl md:text-9xl lg:text-9xl font-black py-4 text-white"><span class="stroke"><CountUp end={100} duration={2.75} enableScrollSpy />+</span></h2>
                        <h3 class="text-2xl md:text-4xl lg:text-4xl font-white py-4 text-white">Team Strength</h3>
                        </div>

                        <div className='str-3'>
                        <h2 class="text-4xl md:text-9xl lg:text-9xl font-black py-4 text-white"><span class="stroke"><CountUp end={300} duration={2.75} enableScrollSpy />+</span></h2>
                        <h3 class="text-2xl md:text-4xl lg:text-4xl font-white py-4 text-white">Five Star Ratings</h3>
                        </div>

                    </div>
                </div>
            </section>


            


        </div>
    )
}
