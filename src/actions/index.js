export const setVehicles = (vehicles) => ({
  type: 'ADD_VEHICLES',
  vehicles
})

export const setPlanets = (planets) => ({
  type: 'ADD_PLANETS',
  planets
})

export const setPeople = (people) => ({
  type: 'ADD_PEOPLE',
  people
})

export const setFilm = (film) => ({
  type: 'ADD_FILM',
  film
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const hasError = (message) => ({
  type: 'HAS_ERROR',
  message
})

export const selectCategory = (category) => ({
  type: 'SELECT_CATEGORY',
  category
})