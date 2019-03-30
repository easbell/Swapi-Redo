import { vehicleReducer } from '../vehicleReducer';
import * as actions from '../../actions';


describe('vehicleReducer', () => {
  it('should return initial state', () => {
    const expected = [];

    const result = vehicleReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an error to global state', () => {
    const mockVehicles = ['car', 'car']
    const action = actions.setVehicles(mockVehicles);
    const initialState = [];
    const expected = mockVehicles;

    const result = vehicleReducer(initialState, action);
    expect(result).toEqual(expected);
  })
})