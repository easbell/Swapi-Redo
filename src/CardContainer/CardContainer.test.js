import React from 'react';
import CardContainer, { mapStateToProps } from './CardContainer';
import Card from '../Card/Card';
import { shallow } from 'enzyme';
import { mockVehicles, mockPeople, mockPlanets, mockStateResult } from '../utils/mockData/mockData';

describe('CardContainer', () => {
  it('should match snapshot with all data passed in', () => {
    let wrapper = shallow(<CardContainer category={'planets'}/>)

    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should return 10 Card components', () => {
    const props = {
      planets: mockPlanets,
      category: "planets"
    }

    let wrapper = shallow(<CardContainer props={props}/>) 
    expect(wrapper.instance().find('div')).to.have.length(1)
  });

  describe('mapStateToProps', () => {
    it('should return an object with vehicles, planets, people, and category', () => {
      const vehicles = mockVehicles;
      const planets = mockPlanets;
      const people = mockPeople;
      const category = '';

      const mockState = {
        vehicles,
        planets,
        people,
        category
      }

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(mockStateResult);
    });
  });
});