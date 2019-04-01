import React from 'react';
import { Scroll } from './Scroll';
import { shallow } from 'enzyme';

describe('Scroll', () => {
  let wrapper;
  let props;

  beforeEach(() => {
    props = {
      film: {openingCrawl: "War! The Republic is crumblingunder attacks by the ruthlessSith Lord, Count Dooku.There are heroes on both sides.Evil is everywhere.In a stunning move, thefiendish droid leader, GeneralGrievous, has swept into theRepublic capital and kidnappedChancellor Palpatine, leader ofthe Galactic Senate.As the Separatist Droid Armyattempts to flee the besiegedcapital with their valuablehostage, two Jedi Knights lead adesperate mission to rescue thecaptive Chancellor....",
      releaseDate: "2005-05-19",
      title: "Revenge of the Sith"}
    }

    wrapper = shallow(<Scroll film={props.film}/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})
