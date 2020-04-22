import React from 'react';
import { shallow } from 'enzyme';
import Waiter from './Waiter';


it ('should render component',() =>{
  shallow(<Waiter />);
});

/*it ('render text in component',() =>{
  const component = shallow(<Waiter />);
  const text = component.text();
  const testValue = 'Waiter view';
  expect (text).toEqual(testValue);
  
});*/