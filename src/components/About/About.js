import React from 'react'
import './about.css'
import AboutImg from '../../assets/about2.png'
import Card from '../Card/Card'
import fav1 from '../../assets/fav1.jpg'
import fav2 from '../../assets/fav2.jpg'
import fav3 from '../../assets/fav3.jpg'
import fav4 from '../../assets/fav4.jpg'


const About = () => {
  return (
    <>
    <section className='about section' id='about'>
        <h2 className='section__title'>About Me</h2>
        <div className='about container container_grid'>
            <img src={AboutImg} alt='Me'/>
        </div>
        <div className='about__data'>
            <p>Hi There.. My name is Sabrina Fauzia, i'm a third-year collage student at
              Serang Raya University, majoring in Information Technology. I've
              big passion with technology industry for me it's like an ocean,
              the deeper you go then you'll gonna always find something new.
              That's kinda fun and interesting but sometimes it can cause a lot
              of headache too. The goal I'm currently striving for is to make
              myself even better in the future, to be a successful web developer</p>
        </div>

        <div className='about__site'>

        <a href='https://sites.google.com/view/cvsabrinafauzia' className='button button--flex'>Visit My Google Sites<i class='bx bxs-file'></i></a>
        
        </div>
    </section>
 
    <div className='about-fave'>
    <h2 className='fav__title'>Sabrina Fav's</h2>
    <Card ImgUrl={fav1} title={'Music'} info={'I think music in itself is healing.'} cardLink={'http://www.joox.com/common_redirect.html?page=songlist&id=USERPLAYLIST_0_120333740_1667967715_1667967715&lang=id&area=id&title=Love+this+%F0%9F%99%86%F0%9F%8F%BB%E2%80%8D%E2%99%80%EF%B8%8F'}/>

    <Card ImgUrl={fav2} title={'Astronomy'} info={'Dont ever stop reaching for the stars.'} cardLink={'https://apod.nasa.gov/apod/astropix.html'}/>

    <Card ImgUrl={fav3} title={'Design'} info={'Have no fear of perfection'} cardLink={'https://dribbble.com/'}/>

    </div>
    </>
  )
}

export default About