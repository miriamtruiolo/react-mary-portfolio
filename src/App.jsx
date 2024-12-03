import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Services from './components/services/Services'
import Rates from './components/rates/rates'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
    <Header />
    <Nav/>
    <About/>
    <Services/>
    <Rates/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App