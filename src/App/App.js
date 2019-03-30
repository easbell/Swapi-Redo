import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFilm } from '../thunks/fetchFilm';
import { fetchVehicles } from '../thunks/fetchVehicles';
import { fetchPlanets } from '../thunks/planetThunks/fetchPlanets';
import { fetchPeople } from '../thunks/peopleThunks/fetchPeople';
import FilterControls from '../FilterControls/FilterControls';
import CardContainer from '../CardContainer/CardContainer';
import Scroll from '../Scroll/Scroll';
import './App.css';

class App extends Component {
  async componentDidMount() {
    const random = this.getRandomNum()
    this.props.fetchFilm(`https://swapi.co/api/films/${random}`)
    this.props.fetchVehicles(`https://swapi.co/api/vehicles`)
    this.props.fetchPlanets(`https://swapi.co/api/planets`)
    this.props.fetchPeople(`https://swapi.co/api/people`)
  }

  getRandomNum = () => {
    return Math.floor(Math.random() * (7 - 1) + 1); 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>SWApi Box</h1>
        </header>
        <div>
          <Scroll />
          <FilterControls />
          <h3 className="category-header">{this.props.category}</h3>
          <CardContainer /> 
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchVehicles: (url) => dispatch(fetchVehicles(url)),
  fetchPlanets: (url) => dispatch(fetchPlanets(url)),
  fetchPeople: (url) => dispatch(fetchPeople(url)),
  fetchFilm: (url) => dispatch(fetchFilm(url))
})

export const mapStateToProps = (state) => ({
  category: state.category
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
