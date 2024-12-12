import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/primary.JPG'
import HeaderSocials from './HeaderSocials'
import Logo from '../../assets/logo.png'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header_container">
      <img src={Logo} alt="Logo" className="container_logo"/>
        <h1 className='text-primary'>MHealthy Fit</h1>
        <h5 className="text-secondary"> Sii la tua versione più forte e salutare!
        </h5>
        <CTA/>
        <HeaderSocials/>

        <div className="d-flex justify-content-center">
          <img src={ME} alt='me'className="img-fluid"
    style={{
      width: '22rem',
      height: '30rem',
      margin: '4rem auto 0 auto',
      objectFit: 'cover',
      borderRadius: '12rem 12rem 0 0',
    }}/>
        </div>
        <div className='text-light'>
        <p>Inizia il tuo percorso alla scoperta delle tue incredibili capacità. <br/>Impariamo insieme, secondo le tue esigenze, a prenderci cura del tuo corpo, della tua mente e a perseguire nuovi traguardi, ritrovando il potenziale inespresso che conservi dentro di te.</p>
      </div>
     {/* <div className='linea'></div> */} 
      </div>

      
    </header>
  )
}

export default Header