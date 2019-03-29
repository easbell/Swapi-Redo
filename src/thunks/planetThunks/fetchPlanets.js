import { isLoading, hasError, setPlanets } from '../../actions';
import { fetchExtraPlanetInfo } from './fetchExtraPlanetInfo';

export const fetchPlanets = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      if(!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      const planets = await dispatch(fetchExtraPlanetInfo(data.results))
      dispatch(isLoading(false))
      dispatch(setPlanets(planets))
    } catch(error) {
      dispatch(hasError(error.message))
    }
  }
}