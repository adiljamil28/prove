"use client"
import {React , useEffect} from 'react';
import { Bannerprops } from "../components/Bannerprops";
import { BannerVid } from "../components/BannerVid";
import { Bages } from "../components/Bages";

import  SecNew  from "../components/SecNew/page";
import { Cta } from '../components/Cta';
import { Team } from '../components/Team';
import { Technology } from '../components/Technology';

import Lenis from 'lenis'

//  import dynamic from 'next/dynamic';

// Dynamically import the SideScroll component with SSR set to false
// const Footer = dynamic(() => import('../components/Footer'), {
//   ssr: false
// });



export default function About() {

    useEffect( () => {
        const lenis = new Lenis()
    
        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)
      })
    
    return (
        <div>

           
        <BannerVid />
        
        <Bannerprops 
        banMainPic="/banner-img.webp"
            Banh1="COMPANY NAME"
            Banh2="ABOUT US"
            Banh3=""
            BanP="Transform the success of your business and ignite your potential digital growth with us!"
            pic1="/cl1.webp"
            pic2="/cl2.webp"
            pic3="/cl3.webp"
            pic4="/cl4.webp"
        />

            <section className='why-us lg:py-24'>
            <h2 class="text-4xl md:text-8xl lg:text-8xl font-black py-4 text-[#f4f0ea] text-center">Offer <span class="stroke">&amp;</span> Services</h2>
                <div className="container mx-auto flex lg:flex-row items-center ">
                    
                    <h3 class="text-3xl font-semibold uppercase md:mx-auto py-4 lg:leading-relaxed or-font text-[#f4f0ea]">
                    Let Us Draft Legendary Ideas for you every day!
                    </h3>

                    <p class="text-lg font-normal text-[#f4f0ea] lg:px-8">
                    We help you in elevation of your brands where your digital dreams take flight. Crafting digital magic through multiple services, we turn your ideas in online success stories.
                    </p>

                </div>
            </section>


             <SecNew />

             <Technology />

            <Cta />

            <Bages />


            <Team />

            




        
        </div>
    );
}

