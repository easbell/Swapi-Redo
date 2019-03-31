import { filmReducer } from '../filmReducer';
import * as actions from '../../actions';

describe('filmReducer', () => {
  it('should return initial state', () => {
    const expected = {};
    
    const result = filmReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return a category to global state', () => {
    const action = actions.setFilm({title: 'film', openingCrawl: 'this is a crawl'});
    const initialState = {};
    const expected = {title: 'film', openingCrawl: 'this is a crawl'};

    const result = filmReducer(initialState, action);
    expect(result).toEqual(expected);
  });
});