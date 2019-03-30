import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVehicles } from './thunks/fetchVehicles';
import { fetchPlanets } from './thunks/planetThunks/fetchPlanets';
import { fetchPeople } from './thunks/peopleThunks/fetchPeople';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchVehicles(`https://swapi.co/api/vehicles`)
    this.props.fetchPlanets(`https://swapi.co/api/planets`)
    this.props.fetchPeople(`https://swapi.co/api/people`)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>SWApi</h1>
        </header>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  fetchVehicles: (url) => dispatch(fetchVehicles(url)),
  fetchPlanets: (url) => dispatch(fetchPlanets(url)),
  fetchPeople: (url) => dispatch(fetchPeople(url))
})

export default connect(null, mapDispatchToProps)(App);
