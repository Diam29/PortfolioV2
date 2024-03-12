'use client'
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import styles from '../Styles/Footer.module.css'
import Link from "next/link";

const Footer = () => {

  const handleWhatsappClick = () => {
    const phoneNumber = '+5492234546521';
    const message = '¡Hola! ¿Cómo estás?';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Diamela Villalba</h1>
      <h5 className={styles.subTitle}>Transformando el futuro, en innovacion y código al alcance de todos!</h5>
      <div className={styles.content__icons}>
      <Link className={styles.links} href={'https://api.whatsapp.com/send?phone=5492234546521&text=Hola te escribo desde tu web!!'} target="_blank" onClick={handleWhatsappClick}><i className={styles.icon}><FaWhatsapp /></i></Link>
      <Link className={styles.links}  href={'https://www.linkedin.com/in/diamela-villalba-b96a71251/'} target="_blank"><i className={styles.icon}><FaLinkedinIn/></i></Link>
      </div>
      <p className={styles.text}>@ Copyrigth 2023</p>
    </div>
  )
}

export default Footer
