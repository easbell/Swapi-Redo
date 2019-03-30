import { fetchPlanets } from '../planetThunks/fetchPlanets';
import { isLoading, hasError, setPlanets } from "../../actions";

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

  it.skip('should dispatch fetchExtraPlanetInfo if the response is ok', async () => {
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

  it.skip('should dispatch isLoading if the response is ok', async () => {
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
    const planets = await mockDispatch(mockPlanets);
    expect(mockDispatch).toHaveBeenCalledWith(setPlanets(planets))
  });

  it.skip('should dispatch hasError with a response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'something went wrong.'
    }))

    const thunk = fetchPlanets(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(hasError('something went wrong.'))
  })
})