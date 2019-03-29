import { fetchVehicles } from '../vehicleThunks/fetchVehicles';
import { isLoading, hasError, setVehicles } from "../../actions";
import { cleanVehicles } from '../../utils/helpers';

jest.mock('../../utils/helpers.js');

describe('fetchVehicles', ()  => {
  let mockUrl;
  let mockDispatch;

  beforeEach(() => {
    mockUrl = 'www.url.com';
    mockDispatch = jest.fn();
  });

  it('calls dispatch with isLoading', () => {
    const thunk = fetchVehicles(mockUrl);

    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  });

  it.skip('should call cleanVehicles if response is ok', async () => {
    const mockVehicles = ['car1', 'car2']
    
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        vehicles: mockVehicles
      })
    }))

    const thunk = fetchVehicles(mockUrl);

    await thunk(mockDispatch)

    expect(cleanVehicles).toHaveBeenCalledWith(mockVehicles)
  });

  it('should dispatch isLoading if the response is ok', async () => {
    const mockVehicles = ['car1', 'car2']
    
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        vehicles: mockVehicles
      })
    }));

    const thunk = fetchVehicles(mockUrl);

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  });

  it('should dispatch setVehicles if the response is ok', async () => {
    const mockVehicles = ['car1', 'car2']
    
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        vehicles: mockVehicles
      })
    }));

    const thunk = fetchVehicles(mockUrl);
    await thunk(mockDispatch);
    const vehicles = cleanVehicles(mockVehicles)
    expect(mockDispatch).toHaveBeenCalledWith(setVehicles(vehicles))
  });

  it('should dispatch hasError with a response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'something went wrong.'
    }))

    const thunk = fetchVehicles(mockUrl);
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(hasError('something went wrong.'))
  })
})