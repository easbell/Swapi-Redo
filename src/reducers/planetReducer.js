export const planetReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_PLANETS':
      return action.planets;
    default:
      return state;
  }
}