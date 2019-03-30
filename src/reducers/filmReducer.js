export const filmReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_FILM':
      return action.film;
    default:
      return state;
  }
}