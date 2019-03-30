import { planetReducer } from '../planetReducer';
import * as actions from '../../actions';


describe('planetReducer', () => {
  it('should return initial state', () => {
    const expected = [];

    const result = planetReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an error to global state', () => {
    const mockPlanets = ['planet', 'planet']
    const action = actions.setPlanets(mockPlanets);
    const initialState = [];
    const expected = mockPlanets;

    const result = planetReducer(initialState, action);
    expect(result).toEqual(expected);
  })
})