import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFilm } from '../../thunks/fetchFilm';
import { fetchVehicles } from '../../thunks/fetchVehicles';
import { fetchPlanets } from '../../thunks/fetchPlanets';
import { fetchPeople } from '../../thunks/peopleThunks/fetchPeople';
import FilterControls from '../FilterControls/FilterControls';
import CardContainer from '../CardContainer/CardContainer';
import Scroll from '../Scroll/Scroll';
import { Route } from 'react-router-dom';
import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      pageStatus: 'scroll'
    }
  }

  async componentDidMount() {
    const { fetchFilm, fetchVehicles, fetchPlanets, fetchPeople } = this.props;
    const random = this.getRandomNum()
    fetchFilm(`https://swapi.co/api/films/${random}`)
    fetchVehicles(`https://swapi.co/api/vehicles`)
    fetchPlanets(`https://swapi.co/api/planets`)
    fetchPeople(`https://swapi.co/api/people`)
  }

  getRandomNum = () => {
    return Math.floor(Math.random() * (7 - 1) + 1); 
  }

  enterApp = () => {
    this.setState({pageStatus: 'home'})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>SWApi Box</h1>
        </header>
        <Route exact path="/" component={Scroll}/>
        <Route exact path='/main' render={() => (
          <div>
            <FilterControls />
            <h3 className="category-header">{this.props.category}</h3>
            <CardContainer /> 
          </div>
        )} />
      </div>
    )
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
