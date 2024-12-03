import React from 'react'
import './rates.css'
import { MdOutlineEuroSymbol } from "react-icons/md";

const Rates = () => {
  return (
    <section id='rates' className='rates_index'>
      <h2>TARIFFE</h2>

      <div className='container rates_container'>
        {/*Classi presenziali*/}
        <article className='rates'>
          <div className='rates_head'>
          <h3>CLASSI PRESENZIALI</h3>
          </div>

          <ul className='rates_list'>
            <li><h4>TONE:</h4></li>
            <li><p>1 ora</p>
              <MdOutlineEuroSymbol className='rates_list-icon'/>
              <p>10 </p>
              </li>
              <li><h4>BAILE:</h4></li>
            <li><p>1 ora</p>
              <MdOutlineEuroSymbol className='rates_list-icon'/>
              <p>5 </p>
              </li>
          </ul>
        </article>
         {/*TRAINING ONLINE*/}
        <article className='rates'>
          <div className='rates_head'>
            <h3>TRAINING ONLINE</h3>
          </div>
          <ul className='rates_list'>
            <li><h4>FIT ROUTINE:</h4></li>
            <li><p>1 mese</p>
              <MdOutlineEuroSymbol className='rates_list-icon'/>
              <p>30 </p>
              </li>
              <li><p>3 mesi</p>
              <MdOutlineEuroSymbol className='rates_list-icon'/>
              <p>60 </p>
              </li>
              <li><p>6 mesi</p>
              <MdOutlineEuroSymbol className='rates_list-icon'/>
              <p>120 </p>
              </li>
          </ul>
        </article>
        {/*personal online*/}
        <article className='rates'>
          <div className='rates_head'>
            <h3>PERCORSI PERSONALIZZATI</h3>
          </div>
          <ul className='rates_list'>
            <li><h4>FOCUS GOAL e FOCUS GRAVIDANZA:</h4></li>
            <li><p>1 mese</p>
              <MdOutlineEuroSymbol className='rates_list-icon'/>
              <p>120 </p>
              </li>
              <li><p>3 mesi</p>
              <MdOutlineEuroSymbol className='rates_list-icon'/>
              <p>300 </p>
              </li>
              <li><p>6 mesi</p>
              <MdOutlineEuroSymbol className='rates_list-icon'/>
              <p>500 </p>
              </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Rates