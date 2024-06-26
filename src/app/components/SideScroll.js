"use client"
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";


const SideScroll = () => {
  return (
    <div className="w-full">
      <HorizontalScrollCarousel />
    </div>
  );
};

const  HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-77%"]);

  return (
    <section ref={targetRef} className="relative lg:h-[500vh] my-10 bg-black">
      <div className="sticky top-32 flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};



const Card = ({ card }) => {
  return (
    
    <div
      key={card.id}
      className="group relative lg:h-[500px] lg:w-[900px] h-[200px] w-[500px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      {/* <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div> */}
    </div>
  );
};

export default SideScroll;

const cards = [
  {
    url: "/p1.webp",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/p2.webp",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/p3.webp",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/p4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/p5.webp",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/p6.webp",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/p7.webp",
    title: "Title 7",
    id: 7,
  }
];