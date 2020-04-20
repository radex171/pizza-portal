/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import MainLayout from './MainLayout';

it ('should render component',() =>{
  shallow(<MainLayout />);
});

it('render children in MainLayout',() =>{
  const component = shallow(<MainLayout />);
  const children = component.children();
  expect (children).toBeTruthy;
});