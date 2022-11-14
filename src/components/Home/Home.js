import React from 'react'
import './Home.css'
import Sosmed from './Sosmed'
import Data from './Data'


const Home = () => {
  return (
   <section className='home section' id='home'>
    <div className='home__container container grid'>
        <div className='home__content grid'>
            <Sosmed/>
            <div className='home__img'></div>
            <Data/>
        </div>
    </div>
   
   </section>

  )
}

export default Home