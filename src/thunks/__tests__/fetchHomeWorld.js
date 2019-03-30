import { fetchHomeWorld } from '../peopleThunks/fetchHomeWorld';
import { fetchPeople } from '../peopleThunks/fetchPeople';
import { hasError } from "../../actions";

jest.mock('../peopleThunks/fetchHomeWorld');

describe('fetchPeople', () => {
  let mockUrl;
  let mockDispatch;

  beforeEach(() => {
    mockUrl = 'www.url.com';
    mockDispatch = jest.fn();
  });

  it.skip('should dispatch hasError with a response is not ok', async () => {
    const mockData = [{homeworld: 'www.website.com'}, {homeworld: 'www.website.com'}]
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'something went wrong.'
    }))

    const thunk = fetchHomeWorld(mockData);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(hasError('something went wrong.'))

  })
})