export const vehicleReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_VEHICLES':
      return action.vehicles;
    default:
      return state;
  }
}