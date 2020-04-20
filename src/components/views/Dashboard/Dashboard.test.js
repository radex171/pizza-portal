import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';


it ('should render component',() =>{
  shallow(<Dashboard />);
});

it ('render text in component',() =>{
  const component = shallow(<Dashboard />);
  const text = component.text();
  const testValue = 'Dashboard view';
  expect (text).toEqual(testValue);
  
});