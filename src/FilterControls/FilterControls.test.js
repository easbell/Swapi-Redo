import React from 'react';
import { FilterControls, mapDispatchToProps} from './FilterControls';
import { mount, shallow } from 'enzyme';
import { connect } from 'react-redux';

describe('FilterControls', () => {
  let wrapper;
  let mockSelectCategory;
  let mockHandleSelection;

  beforeEach(() => {
    mockSelectCategory = jest.fn();
    mockHandleSelection = jest.fn();
    wrapper = mount(<FilterControls selectCategory={mockSelectCategory}/>)
  });

  it('should match snapshot with all data passed in', () => {
    wrapper = shallow(<FilterControls selectCategory={mockSelectCategory}/>)
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should invoke handleSelection with proper argument when button is clicked', () => {
    const mockedEvent = { target: {} }
    wrapper.find('.people').simulate('click', mockedEvent)
    expect(mockHandleSelection).toHaveBeenCalled()
  });


})
