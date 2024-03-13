'use client'
import Link from 'next/link'
import { FaHome } from "react-icons/fa";
import { PiPersonArmsSpreadFill } from "react-icons/pi"
import { AiFillDatabase } from "react-icons/ai"
import { IoDocumentText } from "react-icons/io5"
import { GrServices } from "react-icons/gr"
import { GiSkills } from "react-icons/gi"
import { IoMailUnreadSharp } from "react-icons/io5"
import { motion } from "framer-motion"
import styles from '../Styles/Sidebar.module.css'
import { useState } from 'react';



const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (event, id) => {
    event.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  }


  return (
    <motion.div
      initial={{ scale: -2 }}
      transition={{ duration: 4 }}
      animate={{ scale: 1 }}
      className={styles.container}>
      <Link href='/Home' onClick={(e) => scrollToSection(e, 'Home')}>
        <div
          className={styles.circle}>
          <FaHome className={styles.icon} />
          <span className={styles.span}>Portfolio</span>
        </div>
      </Link>
      <Link className={styles.links} href='/About' onClick={(e) => scrollToSection(e, 'About')}>
        <div className={styles.circle}>
          <PiPersonArmsSpreadFill className={styles.icon} />
          <span className={styles.span}>Sobre Mí</span>
        </div>
      </Link>
      <Link className={styles.links} href='/Portfolio' onClick={(e) => scrollToSection(e, 'Portfolio')}>
        <div className={styles.circle}>
          <AiFillDatabase className={styles.icon} />
          <span className={styles.span}>Portfolio</span>
        </div>
      </Link>
      <div className={styles.circle}>
        <Link className={styles.links} href='/Cv' onClick={(e) => scrollToSection(e, 'Cv')}><IoDocumentText className={styles.icon} />
          <span className={styles.span}>Curriculum</span>
        </Link>
      </div>
      <div className={styles.circle}>
        <Link className={styles.links} href='/Service' onClick={(e) => scrollToSection(e, 'Service')}><GrServices className={styles.icon} />
          <span className={styles.span}>Servicios</span>
        </Link>
      </div>
      <div className={styles.circle}>
        <Link className={styles.links} href='/Sikills' onClick={(e) => scrollToSection(e, 'Skills')}><GiSkills className={styles.icon} />
          <span className={styles.span}>Habilidades</span>
        </Link>
      </div>
      <div className={styles.circle}>
        <Link className={styles.links} href='/Contact' onClick={(e) => scrollToSection(e, 'Contact')}><IoMailUnreadSharp className={styles.icon} />
          <motion.span className={styles.span}>Contacto</motion.span>
        </Link>
      </div>
    </motion.div>
  )
}

export default Sidebar
