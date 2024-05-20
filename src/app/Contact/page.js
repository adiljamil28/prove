import React from 'react'
import { Bannerprops } from "../components/Bannerprops";
import { BannerVid } from "../components/BannerVid";
import { Cta } from '../components/Cta';
import { Testimonials } from "../components/Testimonials";
import { Bages } from "../components/Bages";
import { Faqs } from "../components/Faqs";






export default function Contact () {
  return (
    <div>
        <BannerVid />
        
        <Bannerprops
        banMainPic="/banner.webp"
            Banh1="COMPANY NAME"
            Banh2="CONTACT US"
            Banh3=""
            BanP="Transform the success of your business and ignite your potential digital growth with us!"
            pic1="/cl1.webp"
            pic2="/cl2.webp"
            pic3="/cl3.webp"
            pic4="/cl4.webp"
        />

        <Faqs />

        <Bages />

        <Testimonials />

        <Cta />
    </div>



  )
}
