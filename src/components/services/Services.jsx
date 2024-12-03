import React from 'react'
import './services.css'
import { CgGym } from "react-icons/cg";

const Services = () => {
  return (
    <section id='services' className='services_container-index'>
      <h2>SERVIZI</h2>

      <div className='container services_container'>

        {/*Inizio personal in presenza*/}
        <div className='services_presencial'>
          <h3>CLASSI PRESENZIALI (Valencia)</h3>
            <article className='services_details'>
              <h4> TONE: GAP, Total Body, Functional </h4>
              <p>Allenamenti dinamici, sempre nuovi, divertenti e stimolanti (1h). 
                <br/>Concentrati sulla musica e lascia che il tuo corpo si muova a ritmo, dimenticando la fatica dell’allenamento. (3/7pax)</p>
            </article>

            <article className='services_details'>
            <h4>BAILE: Aerodance, Cardiodance</h4>
            <p>Lasciati andare, disconnetti dalle pressioni e dallo stress della quotidianità. (1h) 
              <br/>Divertiti, sorridi, conosci persone nuove e mantieni il tuo corpo in forma ballando. (+3pax)</p>
            </article>
          
        </div>

        {/*Inizio FitRoutine*/}
        <div className='services_routine'>
        <h3>FIT ROUTINE (Training online)</h3>
            <article className='services_details'>
            <h4>ROUTINE (2 giorni a settimana)</h4>
            <p>Allenamenti total body per casa o palestra, con linee guida per un’alimentazione equilibrata. Ogni 4-6 settimane, ricevi una nuova routine. </p>
            <h5>Include:</h5>
            <ul>
              <li><p> <CgGym /> Colloquio iniziale e valutazione</p></li>
              <li><p> <CgGym /> Consulta online (30-40 min) ogni 30 giorni</p></li>
            </ul>
            </article>
        </div>

        {/*Inizio Focus Goal*/}
        <div className='services_goal'>
          <h3>FOCUS GOAL (Training online)</h3>
            <article className='services_details'>
            <h4>Personal su misura</h4>
            <p>Programma personalizzato per casa o palestra, costruito sui tuoi obiettivi, affiancato da linee guida per un'alimentazione bilanciata e adatta alle tue esigenze.</p>
            <h5>Include:</h5>
            <ul>
              <li><p> <CgGym /> Colloquio iniziale e valutazione</p></li>
              <li><p> <CgGym /> Schede di allenamento personalizzate</p></li>
              <li><p> <CgGym /> Consulta online (1 ora) ogni 15-20 giorni</p></li>
              <li><p> <CgGym /> Video esplicativi, consigli sull’esecuzione e supporto WhatsApp continuo.</p></li>
            </ul>
            </article>
        </div>

        {/*Inizio Focus Gravidanza*/}
        <div className='services_gravidanza'>
          <h3>FOCUS GRAVIDANZA (Training online)</h3>
            <article className='services_details'>
            <h4>Personal su obiettivi e disponibilità</h4>
            <p>Allenamenti sicuri e adattati per mantenerti attiva durante la gravidanza, con linee guida nutrizionali personalizzate.</p>
            <h5>Include:</h5>
            <ul>
              <li><p> <CgGym /> Colloquio iniziale e valutazione</p></li>
              <li><p> <CgGym /> Schede di allenamento personalizzate</p></li>
              <li><p> <CgGym /> Consulta online (1 ora) ogni 15-20 giorni</p></li>
              <li><p> <CgGym /> Supporto giornaliero</p></li>
              <p>N.B.: Documentazione medica potrebbe essere richiesta per garantire la sicurezza del programma.</p>
            </ul>
            </article>
        </div>

      </div>
    </section>
  )
}

export default Services