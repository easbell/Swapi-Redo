import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapDispatchToProps, mapStateToProps } from './App';
import { setVehicles, setFilm, setPlanets, setPeople } from '../actions';
import { fetchFilm } from '../thunks/fetchFilm';
import { fetchVehicles } from '../thunks/fetchVehicles';
import { fetchPlanets } from '../thunks/fetchPlanets';
import { fetchPeople } from '../thunks/peopleThunks/fetchPeople';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  })

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with state', () => {
    wrapper.setState({pageStatus: 'home'});
    expect(wrapper).toMatchSnapshot();
  })

  it('should have default state', () => {
    expect(wrapper.state('pageStatus')).toEqual('scroll');
  });

  describe('componentDidMount', () => {
    it('should call fetch Thunks when mounted', () => {
      const mockFn = jest.fn();
      const wrapper = shallow(
        <App 
          fetchFilm={mockFn} 
          fetchVehicles={mockFn}
          fetchPlanets={mockFn}
          fetchPeople={mockFn}
        />);
      const instance = wrapper.instance();
      instance.componentDidMount();

      expect(mockFn).toHaveBeenCalled();
    });
  });

  describe('enterApp', () => {
    it('should set state when enterApp is invoked', () => {
      wrapper.setState({pageStatus: 'scroll'});
      wrapper.instance().enterApp();

      expect(wrapper.state('pageStatus')).toEqual('home');
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
    it('calls dispatch with a fetchFilm action', async () => {
      const dispatch = jest.fn();
      const mockUrl = 'www.website.com';
      const mockThunk = await fetchFilm(mockUrl);
      const actionToDispatch = setFilm(mockThunk)
      
      mapDispatchToProps(dispatch(setFilm(mockThunk)))
      expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

  it('calls dispatch with a fetchVehicles action', async () => {
    const dispatch = jest.fn();
    const mockUrl = 'www.website.com';
    const mockThunk = await fetchVehicles(mockUrl);
    const actionToDispatch = setVehicles(mockThunk)
    
    mapDispatchToProps(dispatch(setVehicles(mockThunk)))
    expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('calls dispatch with a fetchPlanets action', async () => {
    const dispatch = jest.fn();
    const mockUrl = 'www.website.com';
    const mockThunk = await fetchPlanets(mockUrl);
    const actionToDispatch = setPlanets(mockThunk)
    
    mapDispatchToProps(dispatch(setPlanets(mockThunk)))
    expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it('calls dispatch with a fetchPeople action', async () => {
    const dispatch = jest.fn();
    const mockUrl = 'www.website.com';
    const mockThunk = await fetchPeople(mockUrl);
    const actionToDispatch = setPeople(mockThunk)
    
    mapDispatchToProps(dispatch(setPeople(mockThunk)))
    expect(dispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});