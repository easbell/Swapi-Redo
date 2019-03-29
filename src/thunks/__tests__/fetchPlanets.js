import { fetchPlanets } from '../planetThunks/fetchPlanets';
import { fetchExtraPlanetInfo } from '../planetThunks/fetchExtraPlanetInfo';
import { isLoading, hasError, setPlanets } from "../../actions";

jest.mock('../planetThunks/fetchExtraPlanetInfo');

describe('fetchPlanets', () => {
  let mockUrl;
  let mockDispatch;

  beforeEach(() => {
    mockUrl = 'www.url.com';
    mockDispatch = jest.fn();
  });

  it('calls dispatch with isLoading', () => {
    const thunk = fetchPlanets(mockUrl);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should dispatch fetchExtraPlanetInfo if the response is ok', async () => {
    const mockPlanets = ['planet', 'otherPlanet'];
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        planet: mockPlanets
      })
    }))

    const thunk = fetchPlanets(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(fetchExtraPlanetInfo(mockPlanets))
  });

  it('should dispatch isLoading if the response is ok', async () => {
    const mockPlanets = ['planet', 'otherPlanet'];
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        planet: mockPlanets
      })
    }))

    const thunk = fetchPlanets(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it.skip('should dispatch setPlanets if the response is ok', async () => {
    const mockPlanets = ['planet', 'otherPlanet'];
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        planet: mockPlanets
      })
    }));
    
    const thunk = fetchPlanets(mockUrl);
    await thunk(mockDispatch);
    const planets = await mockDispatch(fetchExtraPlanetInfo(mockPlanets));
    expect(mockDispatch).toHaveBeenCalledWith(setPlanets(planets))
  });

  it('should dispatch hasError with a response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'something went wrong.'
    }))

    const thunk = fetchPlanets(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(hasError('something went wrong.'))
  })
})