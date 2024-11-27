import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>

        {/*Inizio front end*/}
        <div className='experience_frontend'>
          <h3>Front End Devlopment</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Tailwind Css</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/*Inizio backend*/}
        <div className='expericence_backend'>
        <h3>Backend Devlopment</h3>
          <div className='experience_content'>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details-icon'/>
              <div>
              <h4>Payton</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience