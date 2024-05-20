"use client"
import { useEffect } from 'react';
import Lenis from 'lenis'
// import Homebanner from "./components/Homebanner";
import InnerBanner from "./components/InnerBanner"
import { Technology } from "./components/Technology";
import { Project } from "./components/Project";
import { WhyUs } from "./components/WhyUs";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Bages } from "./components/Bages";
import { Faqs } from "./components/Faqs";
import { Capability } from "./components/Capability";
import { Packages } from "./components/Packages";
import  SecNew  from "./components/SecNew/page";


export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <main className="">

    {/* <Homebanner /> */}
    <InnerBanner />

    <Technology />

    <Project />

    <WhyUs />

    <Services />

    <SecNew />

    <Testimonials />

    <Bages />

    <Faqs />

    <Capability />

    <Packages />

    
    </main>
  );
}
