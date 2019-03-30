import * as actions from './index';

describe('actions', () => {
  describe('setVehicles', () => {
    it('should return a type of ADD_VEHICLES with the vehicles array', () => {
      const mockVehicles = ['car', 'car']      
      const expected = {
        type: 'ADD_VEHICLES',
        vehicles: mockVehicles
      }

      const result = actions.setVehicles(mockVehicles);
      expect(result).toEqual(expected)
    });
  });

  describe('setPlanets', () => {
    it('should return a type of ADD_PLANETS with the planets array', () => {
      const mockPlanets = ['planet', 'planet']      
      const expected = {
        type: 'ADD_PLANETS',
        planets: mockPlanets
      }

      const result = actions.setPlanets(mockPlanets);
      expect(result).toEqual(expected)
    });
  });

  describe('isLoading', () => {
    it('should return a type of IS_LOADING with a boolean', () => {   
      const expected = {
        type: 'IS_LOADING',
        isLoading: true
      }

      const result = actions.isLoading(true);
      expect(result).toEqual(expected)
    });
  });

  describe('hasError', () => {
    it('should return a type of HAS_ERROR with a message', () => {   
      const expected = {
        type: 'HAS_ERROR',
        message: 'there is an error'
      }

      const result = actions.hasError('there is an error');
      expect(result).toEqual(expected)
    });
  });
})