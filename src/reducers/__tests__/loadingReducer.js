import { loadingReducer } from '../loadingReducer';
import * as actions from '../../actions';

describe('loadingReducer', () => {
  it('should return initial state', () => {
    const expected = false;

    const result = loadingReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an boolean to global state', () => {
    const action = actions.isLoading(true);
    const initialState = '';
    const expected = true;

    const result = loadingReducer(initialState, action);
    expect(result).toEqual(expected);
  })
})