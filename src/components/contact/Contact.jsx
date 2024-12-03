import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m14b9nb', 'template_7weeg6q', form.current,'-6lURbmEsNZ5CYTbF')
    e.target.reset()
  };
  return (
    <section id="contact" className="contact_index">
      <h5>Risposta in 24/48 ore</h5>
      <h2>SCRIVIMI</h2>

      <div className="container contact_container">
        {/* CONTACT OPTION SECTION */}
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>mcrlia@hotmail.it</h5>
            <a href="mailto:miriamtruiolo@gmail.com" target="_blank" rel="noopener noreferrer">
              Manda un messaggio
            </a>
          </article>
        </div>
        {/* CONTACT FORM SECTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="number" name="number" placeholder="Your Phone Number" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
          <button type="submit" className="btn btn-primary">INVIA</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
