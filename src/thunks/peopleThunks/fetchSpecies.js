import { hasError } from '../../actions';

export const fetchSpecies = (people) => {
  return async (dispatch) => {
    const unresolvedPromises = people.map(async person => {
      try {
        const response = await fetch(person.species)
        if(!response.ok) {
          throw Error(response.statusText);
        }
        const data = await response.json();
        return ({Species: data.name})
      } catch (error) {
        dispatch(hasError(error.message))
      }
    })
    return Promise.all(unresolvedPromises)
  }
}