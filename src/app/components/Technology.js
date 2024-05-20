"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";


export  function TechnologySec (){
  return (
    <div className="w-full">
       
      <TechnologyScroll />
    </div>
  );
};


export  function TechnologyScroll () {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return(
      <div ref={targetRef}>
        <motion.div style={{ x }} className="">
          {TechObject.map((TechObj) => {
            return (

              <div key={TechObj.id}>
                <section className="technology bg-black">
                  <div className="animation-technology stroke ">
                     <span key={TechObj.id} className="tech-head tech-1 text-nowrap block font-light text-xl md:text-9xl lg:text-9xl lg:leading-relaxed my-10">{TechObj.title}</span>
                    
                     </div>
                  </section>
              </div>
              
              
            );
          })}
        </motion.div>
      </div>
  );
};


export function Technology () {
  return (

    <div>
      <section className="technology bg-black lg:py-24 overflow-x-hidden">
      <div className="text-center">
          <div className="flex flex-col text-center tech-contant">
            <h2 className="text-4xl md:text-8xl lg:text-8xl font-black py-4 text-white">Technology</h2>
            <h3 className="md:text-3xl font-semibold uppercase md:mx-auto py-4 lg:leading-relaxed text-white">Accelerating Business Growth With High-Tech Tools And Assets For Ultimate Success</h3>
            <p class="hasAniTitle text-lg font-normal text-white">
                <span>With a keen track of the latest technological breakthroughs and improvements, COMPANY enjoys</span>
            </p>
          </div>
        </div>
           <TechnologyScroll />
        </section>

        
    </div>
    
    
  );
};

const TechObject = [
  {
    title: "Unity 3D Game Unreal Engine Game Unity 3D Game Unreal Engine Game Unity 3D Game",
    id: 1,
  },
  {
    title: "Unreal Engine Game Unreal Engine Game Unreal Engine Game Unreal",
    id: 2,
  },
  {
    title: "Flutter App Development Flutter App Development Flutter App Development Flutter App Development Flutter App Development Flutter App Development",
    id: 3,
  },
  {
    title: "React Native App Development React Native App Development React Native App Development React Native App Development React Native App Development",
    id: 4,
  },
  {
    title: "NFT Game Development NFT Game Development NFT Game Development NFT Game Deve",
    id: 5,
  },
]