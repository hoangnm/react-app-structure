import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import <%= pascalEntityName %>Component from './<%= pascalEntityName %>.component';

describe('<%= pascalEntityName %> Component', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <<%= pascalEntityName %>Component />,
    );
  });


  test('Component exists', () => {
    expect(component.length).toBe(1);
  });
});
