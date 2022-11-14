import React from 'react'
import './portofolio.css'
import  html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import python from '../../assets/python.png'
import vb from '../../assets/vb.png'
import php from '../../assets/php.png'

import Card from '../Card/Card'

import pro1 from '../../assets/pro1.png'
import pro2 from '../../assets/pro2.png'
import pro3 from '../../assets/pro3.png'


const Portofolio = () => {
  return (
    <>
    <div class="inner">
      <div class="header">
        <h1>My Skills</h1>
      </div>
    <div class="container2">
        <div class="skill-box">
          <div class="skill-title">
            <div class="img-skill">
              <img
                src={html}
                alt="HTML"
                class="skill-icon" />
            </div>
          </div>
          <span class="bar"> <span class="html"></span></span>
        </div>

        <div class="skill-box">
          <div class="skill-title">
            <div class="img-skill">
              <img
                src={css}
                alt="CSS"
                class="skill-icon" />
            </div>
          </div>
          <span class="bar"> <span class="CSS"></span></span>
        </div>

        <div class="skill-box">
          <div class="skill-title">
            <div class="img-skill">
              <img
                src={js}
                alt="Javascript"
                class="skill-icon" />
            </div>
          </div>
          <span class="bar"> <span class="Javascript"></span></span>
        </div>

        <div class="skill-box">
          <div class="skill-title">
            <div class="img-skill">
              <img
                src={python}
                alt="Python"
                class="skill-icon" />
            </div>
          </div>
          <span class="bar"> <span class="Python"></span></span>
        </div>

        <div class="skill-box">
          <div class="skill-title">
            <div class="img-skill">
              <img
                src={vb}
                alt="Visual Basic"
                class="skill-icon" />
            </div>
          </div>
          <span class="bar"> <span class="VB"></span></span>
        </div>

        <div class="skill-box">
          <div class="skill-title">
            <div class="img-skill">
              <img
                src={php}
                alt="PHP"
                class="skill-icon" />
            </div>
          </div>
          <span class="bar"> <span class="PHP"></span></span>
        </div>
      </div>
    </div>

    <div className='porto-project'>
    <h2 className='pro__title'>Projects</h2>
    <Card ImgUrl={pro1} title={'Portofolio'} info={'Using HTML and CSS'} cardLink={'https://saturnfz.netlify.app/'}/>

    <Card ImgUrl={pro2} title={'BMI'} info={'Using HTML, CSS, and JS'} cardLink={'https://beaubmi.netlify.app/'}/>

    <Card ImgUrl={pro3} title={'TMDB'} info={'Using HTML, CSS, and JS'} cardLink={'https://moveous.netlify.app/'}/>

    </div>
    </>
  )
}

export default Portofolio