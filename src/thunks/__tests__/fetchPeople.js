import { fetchPeople } from '../peopleThunks/fetchPeople';
import { fetchHomeWorld } from '../peopleThunks/fetchHomeWorld';
import { isLoading, hasError, setPeople } from "../../actions";

jest.mock('../peopleThunks/fetchHomeWorld');

describe('fetchPeople', () => {
  let mockUrl;
  let mockDispatch;

  beforeEach(() => {
    mockUrl = 'www.url.com';
    mockDispatch = jest.fn();
  });

  it('calls dispatch with isLoading', () => {
    const thunk = fetchPeople(mockUrl);
    thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true));
  });

  it('should dispatch fetchHomeWorld if the response is ok', async () => {
    const mockPeople = ['person', 'otherPerson'];
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        planet: mockPeople
      })
    }));

    const thunk = fetchPeople(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(fetchHomeWorld(mockPeople))
  });

  it('should dispatch isLoading if the response is ok', async () => {
    const mockPeople = ['person', 'otherPerson'];
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        people: mockPeople
      })
    }))

    const thunk = fetchPeople(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false));
  });

  it('should dispatch setPeople if the response is ok', async () => {
    const mockPeople = ['person', 'otherPerson'];
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        people: mockPeople
      })
    }));
    
    const thunk = fetchPeople(mockUrl);
    await thunk(mockDispatch);
    const people = await mockDispatch(fetchHomeWorld(mockPeople));
    expect(mockDispatch).toHaveBeenCalledWith(setPeople(people))
  });

  it('should dispatch hasError with a response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'something went wrong.'
    }))

    const thunk = fetchPeople(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(hasError('something went wrong.'))
  })
})