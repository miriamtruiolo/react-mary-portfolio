import React from 'react'
import './rates.css'
import { BiCheck } from "react-icons/bi";
import { MdOutlineEuroSymbol } from "react-icons/md";

const Services = () => {
  return (
    <section id='services' className='service_index'>
      <h2>TARIFFE</h2>

      <div className='container services_container'>
        {/*Classi presenziali*/}
        <article className='services'>
          <div className='services_head'>
          <h3>CLASSI PRESENZIALI</h3>
          </div>

          <ul className='services_list'>
            <li><h4>TONE:</h4></li>
            <li><p>1 ora</p>
              <MdOutlineEuroSymbol className='services_list-icon'/>
              <p>10 </p>
              </li>
              <li><h4>BAILE:</h4></li>
            <li><p>1 ora</p>
              <MdOutlineEuroSymbol className='services_list-icon'/>
              <p>5 </p>
              </li>
          </ul>
        </article>
         {/*TRAINING ONLINE*/}
        <article className='services'>
          <div className='services_head'>
            <h3>TRAINING ONLINE</h3>
          </div>
          <ul className='services_list'>
            <li><h4>FIT ROUTINE:</h4></li>
            <li><p>1 mese</p>
              <MdOutlineEuroSymbol className='services_list-icon'/>
              <p>30 </p>
              </li>
              <li><p>3 mesi</p>
              <MdOutlineEuroSymbol className='services_list-icon'/>
              <p>60 </p>
              </li>
              <li><p>6 mesi</p>
              <MdOutlineEuroSymbol className='services_list-icon'/>
              <p>120 </p>
              </li>
          </ul>
        </article>
        {/*personal online*/}
        <article className='services'>
          <div className='services_head'>
            <h3>PERCORSI PERSONALIZZATI</h3>
          </div>
          <ul className='services_list'>
            <li><h4>FOCUS GOAL e FOCUS GRAVIDANZA:</h4></li>
            <li><p>1 mese</p>
              <MdOutlineEuroSymbol className='services_list-icon'/>
              <p>120 </p>
              </li>
              <li><p>3 mesi</p>
              <MdOutlineEuroSymbol className='services_list-icon'/>
              <p>300 </p>
              </li>
              <li><p>6 mesi</p>
              <MdOutlineEuroSymbol className='services_list-icon'/>
              <p>500 </p>
              </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services