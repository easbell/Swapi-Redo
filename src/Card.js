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
      {/* <button onClick={toggleFavorite()}>Favorite</button> */}
    </div>
  )
}

// add a reducer/action for favoriting.

export default Card;