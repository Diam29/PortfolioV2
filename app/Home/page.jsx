'use client'
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js'
import Link from 'next/link';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion'
import styles from '../Styles/Home.module.css'


const Home = () => {

  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Full Stack Developer', 'Functional Analyst', 'Marketing Consultant', 'Freelancer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    if (typedRef.current) {
      const typedInstance = new Typed(typedRef.current, options);

      return () => {
        typedInstance.destroy();
      };
    }
  }, []);

  return (
    <div className={styles.container}>
      <motion.h1
        animate={{ z: 30, opacity: 1, rotateX: 360 }}
        transition={{ duration: 8 }}
        className={styles.title}>Diamela Villalba</motion.h1>
      <h2 className={styles.text}>I´m a <span className={styles.text__span} ref={typedRef} />
        😉
      </h2>
      <div className={styles.icons}>
        <Link className={styles.links} href={'https://www.linkedin.com/in/diamela-villalba-b96a71251/'} target='_blank'><i className={styles.icon}><FaLinkedinIn /></i></Link>
        <Link className={styles.links} href={'https://github.com/Diam29/Diam29'} target='_blank'><i className={styles.icon}><FaGithub /></i></Link>
      </div>
    </div>
  )
}

export default Home
