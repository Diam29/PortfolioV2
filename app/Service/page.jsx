import { MdOutlineDeveloperMode } from "react-icons/md"
import { GrVmMaintenance } from "react-icons/gr"
import { IoIosApps } from "react-icons/io"
import styles from '../Styles/Service.module.css'

const Service = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SERVICIOS</h1>
      <p className={styles.text}>Ofrezco soluciones web completas y adaptables a cada cliente. Desde sitios estáticos hasta aplicaciones dinámicas, estoy aquí para hacer realidad tus ideas digitales. Mi objetivo es brindarte calidad y funcionalidad, centrándome en lo que realmente importa: la experiencia del usuario. Déjame ayudarte a transformar tus conceptos en soluciones efectivas.</p>
      <div className={styles.card__contain}>
        <div className={styles.card}>
          <h2 className={styles.title__card}>Desarrollo Web</h2>
          <i className={styles.content__icon}><MdOutlineDeveloperMode className={styles.icon} /></i>
          <p className={styles.text}>Creación de sitios web adaptados a las necesidades de tu negocio o marca personal, garantizando una presencia en línea efectiva y optimizada para todos los dispositivos.</p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.title__card}>Optimización y Mantenimiento</h2>
          <i className={styles.content__icon}><GrVmMaintenance className={styles.icon} /></i>
          <p className={styles.text}>Servicio enfocado en mejorar el rendimiento de tu sitio, asegurando tiempos de carga rápidos, seguridad y actualizaciones regulares para mantener la plataforma al día.</p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.title__card}>Aplicaciones Web a Medida</h2>
          <i className={styles.content__icon}><IoIosApps className={styles.icon} /></i>
          <p className={styles.text}>Desarrollo de aplicaciones web según los requerimientos específicos de tu proyecto, utilizando las últimas tecnologías y prácticas del mercado.</p>
        </div>
      </div>
    </div>
  )
}

export default Service
