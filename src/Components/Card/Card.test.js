import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  let mockCard = {Name: "Luke Skywalker", Homeworld: "Tatooine", Population: "200000", Species: "Human"}
  
  it('should match snapshot with all data passed in', () => {
    let wrapper = shallow(<Card key={mockCard.Name} cardInfo={{card: mockCard}}/>)

    expect(wrapper).toMatchSnapshot();
  })
})