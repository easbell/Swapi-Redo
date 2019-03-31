import { categoryReducer } from '../categoryReducer';
import * as actions from '../../actions';

describe('categoryReducer', () => {
  it('should return initial state', () => {
    const expected = '';
    
    const result = categoryReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return a category to global state', () => {
    const action = actions.selectCategory('planets');
    const initialState = '';
    const expected = 'planets';

    const result = categoryReducer(initialState, action);
    expect(result).toEqual(expected);
  });
});