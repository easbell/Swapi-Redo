import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVehicles } from './thunks/fetchVehicles';
import { fetchPlanets } from './thunks/planetThunks/fetchPlanets';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.fetchVehicles(`https://swapi.co/api/vehicles`)
    this.props.fetchPlanets(`https://swapi.co/api/planets`)
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
  fetchPlanets: (url) => dispatch(fetchPlanets(url))
})

export default connect(null, mapDispatchToProps)(App);
