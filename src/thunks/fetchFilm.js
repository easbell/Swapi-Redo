import { isLoading, hasError, setFilm } from '../actions'

export const fetchFilm = (url) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const response = await fetch(url);
      if(!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      const cleanedData = ({openingCrawl: data.opening_crawl, title: data.title, releaseDate: data.release_date})
      dispatch(isLoading(false))
      dispatch(setFilm(cleanedData))
    } catch(error) {
      dispatch(hasError(error.message))
    }
  }
}