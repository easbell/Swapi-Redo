import { peopleReducer } from '../peopleReducer';
import * as actions from '../../actions';

describe('peopleReducer', () => {
  it('should return initial state', () => {
    const expected = [];
    
    const result = peopleReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return a category to global state', () => {
    const action = actions.setPeople(['person', 'person']);
    const initialState = [];
    const expected = ['person', 'person'];

    const result = peopleReducer(initialState, action);
    expect(result).toEqual(expected);
  });
});