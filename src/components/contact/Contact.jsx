import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessage3Line } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
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
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        {/* CONTACT OPTION SECTION */}
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>miriamtruiolo@gmail.com</h5>
            <a href="mailto:miriamtruiolo@gmail.com" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiMessage3Line className="contact_option-icon" />
            <h4>IG Message</h4>
            <h5>Text Me</h5>
            {/*Lui nel video il link lo ha fatto così: href:'https://m.me/e qui ci ha messo l'ultima parte del link di fb. 
            Visto che io lo sto facendo con IG credo sia giusto ma va testato.' */}
            <a href="https://www.instagram.com/miriamtruiolo/" target="_blank" rel="noopener noreferrer">
              Send a DM message
            </a>
          </article>
          <article className="contact_option">
            <FaWhatsapp className="contact_option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+393517756993</h5>
            <a href="https://api.whatsapp.com/send?phone=393517756993" target="_blank" rel="noopener noreferrer">
              Send a message
            </a>
          </article>
        </div>
        {/* CONTACT FORM SECTION */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="number" name="number" placeholder="Your Phone Number" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
