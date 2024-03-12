import Image from 'next/image'
import DvFoto from '@/public/img/DVFoto.jpg'
import { FaPhoneVolume, FaArrowRightToCity } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { SiFreelancer } from "react-icons/si";
import styles from '../Styles/About.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ABOUT ME...</h1>
      <p className={styles.text}>Soy Full Stack Developer con +3 años de experiencia desarrollando sitios web responsivos, estáticos y dinámicos para clientes empresariales y profesionales independientes.
        De perfil polivalente y marcada orientación hacia los resultados; autodidacta y emprendedora. Me gusta estar siempre a la vanguardia en tendencias informáticas y novedades tecnológicas.
        𝘊𝘰𝘯 𝘮𝘢𝘳𝘤𝘢𝘥𝘢 𝘰𝘳𝘪𝘦𝘯𝘵𝘢𝘤𝘪𝘰́𝘯 𝘢𝘭 𝘤𝘭𝘪𝘦𝘯𝘵𝘦 𝘺 𝘩𝘢𝘤𝘪𝘢 𝘭𝘢 𝘤𝘰𝘯𝘴𝘦𝘤𝘶𝘤𝘪𝘰́𝘯 𝘥𝘦 𝘭𝘰𝘴 𝘰𝘣𝘫𝘦𝘵𝘪𝘷𝘰𝘴, 𝘥𝘦 𝘦𝘹𝘤𝘦𝘭𝘦𝘯𝘵𝘦𝘴 𝘩𝘢𝘣𝘪𝘭𝘪𝘥𝘢𝘥𝘦𝘴 𝘱𝘢𝘳𝘢 𝘭𝘢 𝘤𝘰𝘮𝘶𝘯𝘪𝘤𝘢𝘤𝘪𝘰́𝘯 𝘺 𝘵𝘳𝘢𝘵𝘰 𝘢𝘮𝘪𝘨𝘢𝘣𝘭𝘦.</p>
      <div className={styles.contain}>
        <Image src={DvFoto} height={800} width={500} alt='image me' className={styles.image} />
        <div className={styles.contact}>
          <h3 className={styles.subtitle}>Web Developer</h3>
          <p className={styles.text}>Mi enfoque siempre ha sido la intersección entre diseño y funcionalidad, creando soluciones que no sólo son estéticamente agradables, sino también altamente funcionales. Cada proyecto es un nuevo desafío, y lo abordo con una mentalidad de resolución de problemas. La retroalimentación de mis clientes es vital, permitiéndole adaptar y mejorar continuamente. En este mundo digital en constante evolución, me esfuerzo por estar siempre un paso adelante, garantizando soluciones que perduren en el tiempo y tenga una fácil escalabilidad.</p>
          <div className={styles.check__contain}>
            <span className={styles.icon}><FaPhoneVolume className={styles.icon__img} /> +54 9 223 4546521</span>
            <span className={styles.icon}>
              <MdMarkEmailRead className={styles.icon__img} /> diamelavlioi@gmail.com
            </span>
            <span className={styles.icon}>
              <FaArrowRightToCity className={styles.icon__img} /> Ciudad Autónoma de Buenos Aires, Buenos Aires, Argentina</span>
            <span className={styles.icon}>
              <SiFreelancer className={styles.icon__img} />
              Full Stack Developer Service: Available</span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About
