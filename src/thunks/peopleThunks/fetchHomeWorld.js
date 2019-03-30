import { hasError } from '../../actions';

export const fetchHomeWorld = (homeInfo) => {
  return async (dispatch) => {
    const unresolvedPromises = homeInfo.map(async person => {
      try {
        const response = await fetch(person.homeworld)
        if(!response.ok) {
          throw Error(response.statusText);
        }
        const data = await response.json();
        return ({Name: person.name, Homeworld: data.name, Population: data.population})
      } catch (error) {
        dispatch(hasError(error.message))
      }
    })
    return Promise.all(unresolvedPromises)
  }
}