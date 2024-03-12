'use client'
import { CircularProgressbarWithChildren, CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { ChangingProgressProvider } from 'react-circular-progressbar'
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { motion } from 'framer-motion'
import styles from '../Styles/Skills.module.css'


const Skills = () => {

  const skillsDataBasic = [
    {
      data: [
        {
          skillName: 'HTML',
          percentage: '100%',
          icon: <FaHtml5 />,
          color: '#B063C5'
        },
        {
          skillName: 'CSS',
          percentage: '90%',
          icon: <FaCss3Alt />,
          color: '#B063C5'
        },
        {
          skillName: 'JAVASCRIPT',
          percentage: '100%',
          icon: <RiJavascriptFill />,
          color: '#B063C5'
        },
        {
          skillName: 'TYPESCRIPT',
          percentage: '80%',
          icon: <BiLogoTypescript />,
          color: '#B063C5'
        },
      ]
    },
  ]

    const skillsDataBack = [
    {
      data: [
        {
          skillName: 'NODE.JS',
          percentage: '100%',
          icon: <FaNodeJs />,
          color: '#FF6BD6'
        },
        {
          skillName: 'EXPRESS.JS',
          percentage: '100%',
          icon: <SiExpress />,
          color: '#FF6BD6'
        },
        {
          skillName: 'POSTGRESSQL',
          percentage: '100%',
          icon: <BiLogoPostgresql />,
          color: '#FF6BD6'
        },
        {
          skillName: 'MONGODB',
          percentage: '80%',
          icon: <SiMongodb />,
          color: '#FF6BD6'
        },
      ]
    }
  ]

    const skillsDataFront = [
    {
      data: [
        {
          skillName: 'REACT',
          percentage: '90%',
          icon: <FaReact />,
          color: '#24A19C'
        },
        {
          skillName: 'NEXT JS',
          percentage: '90%',
          icon: <TbBrandNextjs />,
          color: '#24A19C'
        },
        {
          skillName: 'BOOTSTRAP',
          percentage: '100%',
          icon: <FaBootstrap />,
          color: '#24A19C'
        },
        {
          skillName: 'TAILWIND',
          percentage: '90%',
          icon: <TbBrandTailwind />,
          color: '#24A19C'
        },
      ]
    }
  ]

  return (
    <motion.div 
    initial={{scale: 2}}
    transition={{ duration: 3}}
    animate={{ scale: 1}}
    className={styles.container}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.content__group}>
      {skillsDataBasic[0].data.map((skill, index) => (
        <div key={index} className={styles.skillContainer}>
          <div className={styles.iconName}>
            <i className={styles.icon}>{skill.icon}</i>
            <h4 className={styles.subtitle}>{skill.skillName}</h4>
          </div>
          <CircularProgressbar
            value={parseInt(skill.percentage)}
            text={skill.percentage}
            className={styles.circle_own}
            styles={buildStyles({
              rotation: 0.5 + (1 - parseInt(skill.percentage) / 100) / 2,
              pathColor: skill.color,
              trailColor: "#F1D4D4",
              strokeLinecap: "round",
              textColor: "#81689D",
              textSize: "20px",
            })}
          />
        </div>
      ))}
    </div>
      <div className={styles.content__group}>
      {skillsDataBack[0].data.map((skill, index) => (
        <div key={index} className={styles.skillContainer}>
          <div className={styles.iconName}>
            <i className={styles.icon}>{skill.icon}</i>
            <h4 className={styles.subtitle}>{skill.skillName}</h4>
          </div>
          <CircularProgressbar
            className={styles.circle_own}
            value={parseInt(skill.percentage)}
            text={skill.percentage}
            styles={buildStyles({
              rotation: 0.5 + (1 - parseInt(skill.percentage) / 100) / 2,
              pathColor: skill.color,
              trailColor: "#FFB0FE",
              strokeLinecap: "round",
              textColor: "#81689D",
              textSize: "20px", 
            })}
          />
        </div>
      ))}
    </div>
      <div className={styles.content__group}>
      {skillsDataFront[0].data.map((skill, index) => (
        <div key={index} className={styles.skillContainer}>
          <div className={styles.iconName}>
            <i className={styles.icon}>{skill.icon}</i>
            <h4 className={styles.subtitle}>{skill.skillName}</h4>
          </div>
          <CircularProgressbar
            value={parseInt(skill.percentage)}
            text={skill.percentage}
            className={styles.circle_own}
            styles={buildStyles({
              rotation: 0.5 + (1 - parseInt(skill.percentage) / 100) / 2,
              pathColor: skill.color,
              trailColor: "#BDF2D5",
              strokeLinecap: "round",
              textColor: "#81689D",
              textSize: "20px",
            })}
          />
        </div>
      ))}
    </div>
    </motion.div>
  )
}

export default Skills
