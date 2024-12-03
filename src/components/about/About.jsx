import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about' className='about_index'>
      <h2>CHI SONO</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='Me'/>
          </div>
        </div>

        <div className='about_content'>
          <div className='text_container'>
         <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet voluptas dignissimos odit modi hic dolorem quidem maiores ipsa sint! Magni esse eum consectetur ad iure, corporis repellat ducimus eveniet eligendi.
          </p>
          <h2>LA MIA FILOSOFIA</h2>
          <h3>Nuove abitudini per uno stile di vita sano e sostenibile.</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet voluptas dignissimos odit modi hic dolorem quidem maiores ipsa sint! Magni esse eum consectetur ad iure, corporis repellat ducimus eveniet eligendi.
          </p>
          </div>
          <a href='#contact' className='btn btn-primary'>Contattami</a>
        </div>
      </div>
      <div className='linea'></div>
    </section>
  )
}

export default About