import { loadingReducer } from './loadingReducer';
import { errorReducer } from './errorReducer';
import { vehicleReducer } from './vehicleReducer';
import { combineReducers } from 'redux'
import { planetReducer } from './planetReducer';

export const rootReducer = combineReducers({
  vehicles: vehicleReducer,
  error: errorReducer,
  loading: loadingReducer,
  planets: planetReducer
})