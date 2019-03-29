import { isLoading, hasError, setVehicles } from '../actions'
import { cleanVehicles } from '../utils/helpers';

export const fetchVehicles = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      if(!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      const cleanedData = cleanVehicles(data.results);
      dispatch(isLoading(false))
      dispatch(setVehicles(cleanedData))
    } catch(error) {
      dispatch(hasError(error.message))
    }
  }
}