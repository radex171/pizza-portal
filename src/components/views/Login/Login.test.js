import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';


it ('should render component',() =>{
  shallow(<Login />);
});

/*it ('render text in component',() =>{
  const component = shallow(<Login />);
  const text = component.text();
  const testValue = 'Login view';
  expect (text).toEqual(testValue);
  
});*/