'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from './anim';
import Body from './Body';
import FooterHead from './FooterHead';
import Image from './Image';

const links = [
  {
    title: "Home",
    href: "/",
    src: "web.jpg"
  },
  // {
  //   title: "Animation",
  //   href: "/",
  //   src: "animation.jpg"
  // },
  {
    title: "About Us",
    href: "/About",
    src: "animation.jpg"
  },
  {
    title: "Digital Marketing",
    href: "/DigitalMarketing",
    src: "service3.webp"
  },
  {
    title: "Contact",
    href: "/Contact",
    src: "men.png"
  }
]

export default function Index() {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
          <FooterHead />
        </div>
        <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive}/>
      </div>
    </motion.div>
  )
}