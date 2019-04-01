import { fetchSpecies } from '../peopleThunks/fetchSpecies';
import { fetchPeople } from '../peopleThunks/fetchPeople';
import { hasError } from "../../actions";

jest.mock('../peopleThunks/fetchSpecies');

describe('fetchSpecies', () => {
  let mockUrl;
  let mockDispatch;

  beforeEach(() => {
    mockUrl = 'www.url.com';
    mockDispatch = jest.fn();
  });

  it('should call fetch', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      statusText: 'something went wrong.'
    }));

    const mockPeople = ['person', 'otherPerson'];
    const thunk = fetchPeople(mockUrl);
    await thunk(mockDispatch);
    thunk(mockDispatch(fetchSpecies(mockPeople)))

    expect(window.fetch).toHaveBeenCalled();
  });

  it('should dispatch hasError with a response is not ok', async () => {
    const mockPeople = ['person', 'otherPerson'];
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'something went wrong.'
    }));

    const thunk = fetchPeople(mockUrl);
    await thunk(mockDispatch);
    thunk(mockDispatch(fetchSpecies(mockPeople)))
    expect(mockDispatch).toHaveBeenCalledWith(hasError('something went wrong.'));
  });

  it.skip('should return an array of objects', async () => {
    const mockPeople = ['person', 'otherPerson'];
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true
    }));

    const thunk = fetchPeople(mockUrl);
    const data = await thunk(mockDispatch(fetchSpecies(mockPeople)));
    expect(data).toHaveLength(2);
  });
});