import React from 'react';
import { CardContainer, mapStateToProps } from './CardContainer';
import { shallow } from 'enzyme';
import { mockVehicles, mockPeople, mockPlanets, mockStateResult, mockProps } from '../utils/mockData/mockData';

describe('CardContainer', () => {
  let props;
  let wrapper;
  beforeEach(() => {
    props = {
      planets: [{Name: "Alderaan", Terrain: "grasslands, mountains", Population: "2000000000", Climate: "temperate"}, {Name: "Yavin IV", Terrain: "jungle, rainforests", Population: "1000", Climate: "temperate, tropical"}, {Name: "Hoth", Terrain: "tundra, ice caves, mountain ranges", Population: "unknown", Climate: "frozen"}, {Name: "Dagobah", Terrain: "swamp, jungles", Population: "unknown", Climate: "murky"}, {Name: "Bespin", Terrain: "gas giant", Population: "6000000", Climate: "temperate"}],
      category: 'planets'
    }
    wrapper = shallow(<CardContainer props={props}/>)
  })
  it('should match snapshot with all data passed in', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should invoke renderCards on componentDidMount', () => {
    const wrapper = shallow(<CardContainer props={props} />)
    const instance = wrapper.instance();
    jest.spyOn(instance, 'renderCards');
    instance.componentDidMount();
    expect(instance.renderCards).toHaveBeenCalled();
  });

  it('should have props for the category', () => {
    const props = {
      planets: mockPlanets,
      category: "planets"
    }

    shallow(<CardContainer props={props}/>) 
    expect(props).toEqual(mockProps);
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