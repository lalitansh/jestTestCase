import { shallow } from 'enzyme';
import React from 'react';
import TextField from '../../../../src/components/common/EditTextInput/index';

const mockFn = jest.fn();
const mockParam = {
  label: 'Email',
  onChange: mockFn,
}

describe('TextField', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<TextField {...mockParam} />)
      expect(component).toMatchSnapshot()
    });
  });
});