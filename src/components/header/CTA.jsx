import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn'>Curriculum</a>
        <a href='#contact' className='btn btn-primary'>Contatti</a>
    </div>
  )
}

export default CTA