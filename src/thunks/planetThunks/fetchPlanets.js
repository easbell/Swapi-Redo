import { isLoading, hasError, setPlanets } from '../../actions';
import { cleanPlanets } from '../../utils/helpers';

export const fetchPlanets = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      if(!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      const cleanedPlanets = await cleanPlanets(data.results)
      dispatch(isLoading(false))
      dispatch(setPlanets(cleanedPlanets))
    } catch(error) {
      dispatch(hasError(error.message))
    }
  }
}