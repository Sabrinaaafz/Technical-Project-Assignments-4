import React from 'react'
import './card.css'

const Card = props => {
  return (
    <section className='C-CARD'>
    <div className='card-container'>
      <div className='card-img'>
        <img src={props.ImgUrl} alt=''/>
      </div>

      <div className='card-body text-dark'>
        <h5 className='card-title'>{props.title}</h5>
        <p className='card-text text-secondary'>{props.info}</p>
        <a href={props.cardLink} className='btn btn-outline-success'>Visit Here</a>
        </div>
    </div>
    </section>
  )
}

export default Card