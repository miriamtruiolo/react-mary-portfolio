import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
      <img src={Logo} alt="Logo" className="container_logo"/>
        <h1 className='text-primary'>MHealthy Fit</h1>
        <h5 className="text-secondary"> Sii la tua versione più forte e salutare!
        </h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt='me'/>
        </div>
        <div className='text-light'>
        <p>Inizia il tuo percorso alla scoperta delle tue incredibili capacità. <br/>Impariamo insieme, secondo le tue esigenze, a prenderci cura del tuo corpo, della tua mente e a perseguire nuovi traguardi, ritrovando il potenziale inespresso che conservi dentro di te.</p>
      </div>
      <div className='linea'></div>
        <a href='#contact' className='scroll_down'> Scroll Down</a>
      </div>
      
    </header>
  )
}

export default Header