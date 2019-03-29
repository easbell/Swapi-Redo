export const setVehicles = (vehicles) => ({
  type: 'ADD_VEHICLES',
  vehicles
})

export const isLoading = (bool) => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const hasError = (message) => ({
  type: 'HAS_ERROR',
  message
})