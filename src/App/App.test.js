import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapDispatchToProps, mapStateToProps } from './App';
import { setVehicles } from '../actions';
import fetchFilm from '../thunks/fetchFilm';
import {shallow } from 'enzyme';

jest.mock('../thunks/fetchFilm');

describe('App', () => {
  let wrapper;
  let mockFn;
  let mockUrl;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  })

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should have default state', () => {
    expect(wrapper.state()).toEqual({
      pageStatus: 'scroll'
    });
  });

  it.skip('calls fetchFilm when mounted', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<App fetchFilm={mockFn}/>);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'fetchFilm');

    instance().componentDidMount();
    expect(mockFn).toHaveBeenCalled();
  });

  describe('componentDidMount', () => {
    it.skip('should call fetchFilm when mounted', () => {
      const mockFn = jest.fn();
      const wrapper = shallow(<App fetchFilm={mockFn}/>);
      const instance = wrapper.instance();
      instance.componentDidMount();

      expect(wrapper.instance().fetchFilm).toHaveBeenCalled();
      mockFn.mockClear();
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with category', () => {
      const mockState = {
        vehicles: ['vehicle', 'car'],
        category: 'planets'
      };

      const expectedState = {
        category: 'planets'
      };

      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expectedState);
    });
  });

  describe('mapDispatchToProps', () => {
    it.skip('calls dispatch with a fetchFilm action', () => {
      const dispatch = jest.fn();

      mapDispatchToProps(dispatch).fetchFilm();
      expect(dispatch.mock.calls[0][0]).toEqual({ type: 'ADD_FILM' })
    });
  });

});