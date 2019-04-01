import React from 'react';
import Card from '../../Components/Card/Card';
import { connect } from 'react-redux';
import './CardContainer.css';

export const CardContainer = (props) =>{
  const renderCards = () => {
    const { category } = props;
    return props[category].map(card => {
      return <Card key={card.Name} {...card}/>
    })
  }

  return (
    <div className='card-container'>
      {props.category && 
        renderCards()
      }
    </div>
  )
}

export const mapStateToProps = (state) => ({
  vehicles: state.vehicles,
  planets: state.planets,
  people: state.people,
  category: state.category
})

export default connect(mapStateToProps)(CardContainer);