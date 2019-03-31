import { fetchFilm } from '../fetchFilm';
import { isLoading, hasError, setFilm } from "../../actions";

describe('fetchVehicles', () => {
  let mockUrl;
  let mockDispatch;

  beforeEach(() => {
    mockUrl = 'www.url.com';
    mockDispatch = jest.fn();
  });

  it('calls dispatch with isLoading', () => {
    const thunk = fetchFilm(mockUrl);

    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  });

  it('should dispatch isLoading if the response is ok', async () => {
    const mockFilm = {title: 'title', openingCrawl: 'this is an opening crawl'};
    
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        film: mockFilm
      })
    }));

    const thunk = fetchFilm(mockUrl);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  });

  it('should dispatch hasError with a response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'something went wrong.'
    }))

    const thunk = fetchFilm(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(hasError('something went wrong.'))
  })

})
