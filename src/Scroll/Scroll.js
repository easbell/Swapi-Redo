import React from 'react';
import './Scroll.css';
import { connect } from 'react-redux';

const Scroll = (props) => {

  return (
    <div className='fade'>
      <div className='star-wars'>
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