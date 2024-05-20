import React from 'react'
import { Bannerprops } from "../components/Bannerprops";
import { BannerVid } from "../components/BannerVid";
import { Cta } from '../components/Cta';
import { Project } from "../components/Project";
import Image from 'next/image';





export default function DigitalMarketing () {
  return (
    <div>
        <BannerVid />
        
        <Bannerprops
        banMainPic="/banner.webp"
            Banh1="COMPANY NAME"
            Banh2="Digital Marketing"
            Banh3=""
            BanP="Transform the success of your business and ignite your potential digital growth with us!"
            pic1="/cl1.webp"
            pic2="/cl2.webp"
            pic3="/cl3.webp"
            pic4="/cl4.webp"
        />

        <Project />

        <section className='why-us'>
                <div className="container mx-auto flex lg:flex-row py-14 item-center lg:justify-items-center">
                  
                    <div className="banner-image lg:w-5/12 sm:w-1/2">
                        <h2 class="text-4xl md:text-4xl lg:text-4xl font-white  text-white">WHY <span class="stroke">COMPANY NAME</span></h2>
                        <h3 class="text-4xl md:text-4xl lg:text-4xl font-white  text-white lg:leading-loose">Is A Leading App Agency</h3>
                        <p class="hasAniTitle text-lg font-normal text-white">
                        At Pine Digital Hub , a professional digital design agency, established in 2023, we have been at the forefront
                         of the industry, consistently delivering exceptional results that help businesses thrive. Our journey began 
                         with a passion for creativity and a commitment to excellence, driving us to become a trusted name in the
                          design world.</p><br/>

                          <p class="hasAniTitle text-lg font-normal text-white">We offer a range of services to elevate your brand presence. With expertise in logo design, website design, video animation, SEO, social media marketing, mobile application development, and branding, we have successfully catered to diverse client requirements.</p>
                            <p class="hasAniTitle text-lg font-normal text-white">We pride ourselves on our ability to understand and align with each client&apos;s unique goals. Our dedicated team of talented designers and developers work closely with you to create visually stunning and functional designs that leave a lasting impression.

                            <br/>Partner with us to unlock your brand&apos;s full potential and make a powerful impact in your industry!</p>
                    </div>

                    <div className="flex-wrap lg:w-7/12 sm:w-1/2 text-right">
                        <div className='str-1'>
                        {/* <h3 class="text-4xl md:text-4xl lg:text-4xl font-white py-4 text-white">Projects Delivered</h3> */}
                        <Image src={"/digi-ser-pic.png"} height={500} width={700} alt='digital marketing'/>
                        </div>
                    </div>

                </div>
            </section>
            <Cta />
    </div>



  )
}
