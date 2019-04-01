import { isLoading, hasError, setPeople } from '../../actions';
import { fetchHomeWorld } from './fetchHomeWorld';
import { fetchSpecies } from './fetchSpecies';
import { combineInfo } from '../../utils/helpers';

export const fetchPeople = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      if(!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      const homeworlds = await dispatch(fetchHomeWorld(data.results))
      const species = await dispatch(fetchSpecies(data.results))
      const combined = combineInfo(homeworlds, species)
      dispatch(isLoading(false))
      dispatch(setPeople(combined))
    } catch(error) {
      dispatch(hasError(error.message))
    }
  }
}