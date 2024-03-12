import { MdAlternateEmail } from "react-icons/md"
import { FaPhoneAlt } from "react-icons/fa";
import Form from '../Form/page'
import styles from '../Styles/Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CONTACTAME</h1>
      <div className={styles.content}>
      <MdAlternateEmail className={styles.icon}/>
      {/* <span>Email</span> */}
      <span className={styles.text}>diamelavlioi@gmail.com</span>
      {/* <p className={styles.text}>diamelavlioi@gmail.com</p> */}
      </div>
      <div className={styles.content}>
      <FaPhoneAlt className={styles.icon}/>
      {/* <span>Telefono</span> */}
      <p className={styles.text}>+54 9 223 454 6521</p>
      </div>
    <Form className={styles.form}/>
    </div>
  )
}

export default Contact
