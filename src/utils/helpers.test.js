import { cleanVehicles, cleanPlanets, combineInfo } from './helpers';
import { preCleanedVehicles, cleanedVehicles, preCleanedPlanets, cleanedPlanets, homeworlds, species, combined } from './mockData/mockData'


describe('cleanVehicles', () => {
  it('should return an array of objects', () => {
    const data = cleanVehicles(preCleanedVehicles);
    expect(data).toEqual(cleanedVehicles);
  });
});

describe('cleanPlanets', () => {
  it('should return an array of objects', () => {
    const data = cleanPlanets(preCleanedPlanets);
    expect(data).toEqual(cleanedPlanets);
  });
})

describe('combineInfo', () => {
  it('should return an array of objects', () => {
    const data = combineInfo(homeworlds, species);
    expect(data).toEqual(combined);
  });
})