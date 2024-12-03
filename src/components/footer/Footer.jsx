import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaRegCopyright } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
        <a href='#' className='footer_logo'></a>
        <ul className='permalinks'>
            <li> <a href='#'>Home</a></li>
            <li> <a href='#about'>Chi sono</a></li>
            <li> <a href='#services'>Serizi</a></li>
            <li> <a href='#rates'>Tariffe</a></li>
            <li> <a href='#testimonials'>Testimonianze</a></li>
            <li> <a href='#contact'>Contatti</a></li>
        </ul>
        <div className="footer_social">
            <a href=''><FaInstagram/></a>
            <a href=''><FaLinkedinIn/></a>
            <a href=''><FaFacebookF/></a>
        </div>

        <div className='footer_copyright'>
            <small>Created by MIRIAM TRUIOLO <FaRegCopyright/> 2024.</small>
        </div>
    </footer>
  )
}

export default Footer