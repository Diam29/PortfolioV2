'use client'
import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import styles from '../Styles/Form.module.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [state, handleSubmit] = useForm("xdoqzwbr");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }


  return (
    <div className={styles.container}>
    <form className={styles.form} onSubmit={handleSubmit}
      action="https://formspree.io/f/xdoqzwbr"
      method="POST">
      <div className={styles.content__input}>
        <input className={styles.name} placeholder="Name" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
        />
      </div>
      <div className={styles.content__input}>
        <input className={styles.name} placeholder="Email" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>
      <div className={styles.content__input}>
        <input className={styles.name} placeholder="Asunto" type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />
      </div>
      <div className={styles.content__textarea}>
        <textarea
          className={styles.name__textarea}
          placeholder="Mensaje" id="message" name="message" value={formData.message} onChange={handleChange} required />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
    </form>
      <button className={styles.button} type="submit" onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default ContactForm;