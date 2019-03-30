import { hasError } from '../../actions';

export const fetchExtraPlanetInfo = (planetArray) => {
  return async (dispatch) => {
    const unresolvedPromises = planetArray.map(planet => {
      try {
        const residents = planet.residents.map(async resident => {
          const response = await fetch(resident);
          if(!response.ok) {
            throw Error(response.statusText);
          }
          const data = await response.json();
          return data.name
        })
        return {Name: planet.name, Terrain: planet.terrain, Population: planet.population, Climate: planet.climate, Residents: residents}
      } catch(error) {
        dispatch(hasError(error.message))
      }
    })
    return Promise.all(unresolvedPromises)
  }
}