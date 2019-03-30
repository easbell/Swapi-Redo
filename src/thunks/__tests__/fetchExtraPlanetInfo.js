import { fetchExtraPlanetInfo } from '../planetThunks/fetchExtraPlanetInfo';
import { hasError } from "../../actions";

describe('fetchExtraPlanetInfo', () => {
  let mockUrl;
  let mockDispatch;

  beforeEach(() => {
    mockUrl = 'www.url.com';
    mockDispatch = jest.fn();
  });

  it.skip('should dispatch hasError with a response is not ok', async () => {
    const mockPlanets = [{name: 'planet', residents: [1, 2, 3]}, {name: 'planet', residents: [1, 2, 3]}];    
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'something went wrong.'
    }))

    const thunk = fetchExtraPlanetInfo(mockPlanets);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(hasError('something went wrong.'))
  });
})