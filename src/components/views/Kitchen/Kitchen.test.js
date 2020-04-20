import React from 'react';
import { shallow } from 'enzyme';
import Kitchen from './Kitchen';


it ('should render component',() =>{
  shallow(<Kitchen />);
});

it ('render text in component',() =>{
  const component = shallow(<Kitchen />);
  const text = component.text();
  const testValue = 'Kitchen view';
  expect (text).toEqual(testValue);
  
});