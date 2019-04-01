import React from 'react';
import { FilterControls, mapDispatchToProps} from './FilterControls';
import { mount, shallow } from 'enzyme';
import { selectCategory } from '../actions';

describe('FilterControls', () => {
  let wrapper;
  let mockFn;

  beforeEach(() => {
    mockFn = jest.fn();
    wrapper = mount(<FilterControls selectCategory={mockFn}/>)
  });

  it('should match snapshot with all data passed in', () => {
    wrapper = shallow(<FilterControls selectCategory={mockFn}/>)
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke handleSelection with proper argument when button is clicked', () => {
    const mockedEvent = { target: {} }
    wrapper.find('.people').simulate('click', mockedEvent)
    expect(mockFn).toHaveBeenCalled()
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a selectCategory action', async () => {
      const dispatch = jest.fn();
      const mockCategory = 'planets';
      const actionToDispatch = await selectCategory(mockCategory)

      const mappedProps = mapDispatchToProps(dispatch)
      mappedProps.selectCategory(mockCategory)
      expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});