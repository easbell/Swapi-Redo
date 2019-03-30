import React from 'react';
import { connect } from 'react-redux';
import { selectCategory } from '../actions';
import './FilterControls.css'

const FilterControls = (props) => {
  const handleSelection = (e) => {
    props.selectCategory(e.target.className);
  }

  return (
    <div className='filter'>
      <button onClick={handleSelection} className='people'>People</button>
      <button onClick={handleSelection} className='planets'>Planets</button>
      <button onClick={handleSelection} className='vehicles'>Vehicles</button>
    </div>
  )

  
}

export const mapDispatchToProps = (dispatch) => ({
  selectCategory: (category) => dispatch(selectCategory(category))
})

export default connect(null, mapDispatchToProps)(FilterControls);