import React from 'react';
import { cleanVehicles, cleanPlanets } from './helpers';
import { preCleanedVehicles, cleanedVehicles, preCleanedPlanets, cleanedPlanets } from './mockData/mockData'
import { shallow } from 'enzyme';

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