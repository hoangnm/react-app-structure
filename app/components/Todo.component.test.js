import React from 'react';
import { shallow } from 'enzyme';
import Todo from './Todo.component';

describe('Todo component', () => {
  test('should render text correctly', () => {
    const component = shallow(<Todo text="a" />);
    expect(component.find('li').children().text()).toBe('a');
  });
});
