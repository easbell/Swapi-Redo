import React from 'react';
import './Scroll.css';
import { connect } from 'react-redux';

export const Scroll = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.enterApp();
  }

  return (
    <div className='fade'>
      <div className='star-wars'>
      <button onClick={handleClick} className="enter-app">Enter App</button>
        <div className='crawl'>
          <p>{props.film.openingCrawl}</p>
          <p>{props.film.title}</p>
          <p>{props.film.releaseDate}</p>
        </div>
      </div>
    </div>
  )
}

export const mapStateToProps = (state) => ({
  film: state.film
})

export default connect(mapStateToProps)(Scroll);