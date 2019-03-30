import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';
import { vehicleReducer } from './vehicleReducer';
import { combineReducers } from 'redux';
import { planetReducer } from './planetReducer';
import { peopleReducer } from './peopleReducer';
import { filmReducer } from './filmReducer';
import { categoryReducer } from './categoryReducer';

export const rootReducer = combineReducers({
  vehicles: vehicleReducer,
  error: errorReducer,
  loading: loadingReducer,
  planets: planetReducer,
  people: peopleReducer,
  film: filmReducer,
  category: categoryReducer
})