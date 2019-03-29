export const setVehicles = (vehicles) => ({
  type: 'ADD_VEHICLES',
  vehicles
})

export const setPlanets = (planets) => ({
  type: 'ADD_PLANETS',
  planets
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const hasError = (message) => ({
  type: 'HAS_ERROR',
  message
})