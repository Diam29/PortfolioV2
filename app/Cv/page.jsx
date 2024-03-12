//
'use client'
import { IoCloudDownloadOutline } from "react-icons/io5"
import styles from '../Styles/Cv.module.css';

const PdfDownload = () => {
  const handleDownload = () => {
    window.open('/document/DiamelaVCVS.pdf', '_blank');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CURRICULUM</h1>
      <p className={styles.text}>A lo largo de mi carrera, he adquirido habilidades significativas en el desarrollo web. Mi formación en marketing me ha proporcionado habilidades blandas, lo que me permite desempeñarme con éxito como Analista Funcional. Además, gracias a mi variada trayectoria en diversos ámbitos profesionales, puedo manejar de manera efectiva las habilidades ágiles de scrum, el liderazgo y la gestión de grandes proyectos. Mi currículum refleja mi trayectoria con los desafíos y logros enfrentados a lo largo del camino. Cada experiencia ha contribuido a moldear la profesional que soy hoy.
      </p>
      <button className={styles.button} onClick={handleDownload}>Descargar PDF
      <i><IoCloudDownloadOutline className={styles.icon}/></i> 
      </button>
    </div>
  );
};

export default PdfDownload;

