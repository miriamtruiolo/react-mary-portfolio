import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaRegCopyright } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
        <a href='#home' className='footer_logo'></a>
        <ul className='permalinks'>
            <li> <a href='#home'>Home</a></li>
            <li> <a href='#about'>Chi sono</a></li>
            <li> <a href='#services'>Servizi</a></li>
            <li> <a href='#rates'>Tariffe</a></li>
            <li> <a href='#testimonials'>Testimonianze</a></li>
            <li> <a href='#contact'>Contatti</a></li>
        </ul>
        <div className="footer_social">
            <a href='https://www.instagram.com/'><FaInstagram/></a>
            <a href='https://www.linkedin.com/'><FaLinkedinIn/></a>
            <a href='https://www.facebook.com/?_rdr'><FaFacebookF/></a>
        </div>

        <div className='footer_copyright'>
            <small>Created by MIRIAM TRUIOLO <FaRegCopyright/> 2024.</small>
        </div>
    </footer>
  )
}

export default Footer