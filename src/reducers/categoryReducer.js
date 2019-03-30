export const categoryReducer = (state = '', action) => {
  switch(action.type) {
    case 'SELECT_CATEGORY': 
      return action.category
    default: 
      return state
  }
}