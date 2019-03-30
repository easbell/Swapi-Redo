import { errorReducer } from '../errorReducer';
import * as actions from '../../actions';


describe('errorReducer', () => {
  it('should return initial state', () => {
    const expected = '';

    const result = errorReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an error to global state', () => {
    const action = actions.hasError('this is an error');
    const initialState = '';
    const expected = 'this is an error';

    const result = errorReducer(initialState, action);
    expect(result).toEqual(expected);
  })
})