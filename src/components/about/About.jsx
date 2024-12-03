import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'

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
         <p>Mi chiamo Mary, da tempo ho deciso di accantonare la mia indole pigra e arrendermi all’infinita passione, che ho avuto fin da piccola, per lo spot. Nonostante abbia studiato e lavorato su tematiche totalmente differenti, la mia valvola di sfogo è sempre stato il movimento, che fosse la danza, la sala pesi, il nuoto o tante altre discipline praticate nel corso della mia vita. 
             <br/><br/>Da qualche anno però, armata di tanto coraggio, ho deciso di lasciarmi alle spalle tutto ciò che con impegno avevo costruito, per dedicarmi allo studio delle varie discipline praticate nella sala corsi delle palestre, per poi trasferirmi in Spagna e arricchire il mio percorso formativo come personal trainer. 
             <br/><br/>Ad oggi provo estrema gratitudine sapendo di aver scelto una professione che difficilmente saprà saziare la mia fame di conoscenza.
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