import React from 'react';
import './Card.css'

const Card = ( {...card} ) => {
  const mapProps = () => {
    return Object.keys(card).map(key => {
      return (
        <p key={key}>{key}: {card[key]}</p>
      )
    })
  }

  return (
    <div className='card'>
      {mapProps()}
    </div>
  )
}

export default Card;