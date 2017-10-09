import React from 'react';
import { shallow } from 'enzyme';
import { <%= pascalEntityName %>Container } from './<%= pascalEntityName %>.container';

describe('<%= pascalEntityName %> Container', () => {
  let _spies = {};
  let _props, _wrapper;

  beforeEach(() => {
    _props = {
      update: _spies.update = jest.fn(),
    };
    _wrapper = shallow(
      <<%= pascalEntityName %>Container {..._props} />
    );
  });

});
