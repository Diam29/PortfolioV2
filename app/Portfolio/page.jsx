'use client'
import Image from 'next/image'
import { useState } from 'react'
import DogImage from '@/public/img/DogApp.png'
import WorkifyImage from '@/public/img/WorkifyImage.png'
import WebRegisterImage from '../../public/img/WebregisterImage.png'
import PortfolioImage from '@/public/img/PortfolioImage.png'
import AcademiaOnline from '@/public/img/AcademiaOnlineImage.png'
import styles from '../Styles/Portfolio.module.css'

const portfolioData = [
  {
    id: 1,
    name: 'DogsApp',
    image: DogImage,
    link: 'https://app-dogs-red.vercel.app/'
  },
  {
    id: 2,
    name: 'WebRegister',
    image: WebRegisterImage,
    link: 'https://web-register-iota.vercel.app/'
  },
  {
    id: 3,
    name: 'Workify',
    image: WorkifyImage,
    link: 'https://workify-frontend-pcik.vercel.app/'
  },
  {
    id: 4,
    name: 'Portfolio Retro',
    image: PortfolioImage,
    link: 'https://portfolio-d38w.vercel.app/'
  },
  {
    id: 5,
    name: 'Academia Online',
    image: AcademiaOnline,
    link: 'https://academiaonlineglobal.com/'
  }
]

const filterData = [
  {
    filterId: 1,
    label: 'Todos'
  },
  {
    filterId: 2,
    label: 'Frontend'
  },
  {
    filterId: 3,
    label: "Backend"
  },
  {
    filterId: 4,
    label: "Sistemas"
  },
]
const Portfolio = () => {


  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  const handleVisitProject = (link) => {
    window.open(link, '_blank');
  }

  const handlerFilter = (currentId) => {
    setFilteredValue(currentId);
  }

  const handlerHover = (index) => {
    setHoveredValue(index);
  }

  const filteredItems = filteredValue === 1 ? portfolioData : portfolioData.filter(item => item.id === filteredValue);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PORTFOLIO</h1>
      <p className={styles.text}>Una selección de mis proyectos más recientes y significativos, que destacan mi experiencia en desarrollo web y diseño de sistemas.</p>
      <div className={styles.contain}>
        {filteredItems.map((item, index) => (
          <div className={styles.contain__items} key={`cardItem${item.name.trim()}`} onMouseEnter={() => handlerHover(index)} onMouseLeave={() => handlerHover(null)}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div className={styles.contain__cards}>
                <Image className={styles.image} src={item.image} alt={item.name} width={500} height={500} />
                {index === hoveredValue && (
                  <div className={styles.overlay}>
                    <p className={styles.text__overlay}>{item.name}</p>
                    <button className={styles.button} onClick={() => handleVisitProject(item.link)}>Visit</button>
                  </div>
                )}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
