import { isLoading, hasError, setPeople } from '../../actions';
import { fetchHomeWorld } from './fetchHomeWorld';

export const fetchPeople = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      if(!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      const people = await dispatch(fetchHomeWorld(data.results))
      dispatch(isLoading(false))
      dispatch(setPeople(people))
    } catch(error) {
      dispatch(hasError(error.message))
    }
  }
}