import React from 'react';
import './Scroll.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const Scroll = (props) => {
  return (
    <div className='fade'>
      <div className='star-wars'>
      <Link to={'/main'} className='enter-app'>Enter App</Link>
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