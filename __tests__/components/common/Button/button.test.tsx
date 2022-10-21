import { shallow } from 'enzyme';
import React from 'react';
import CustomButton from '../../../../src/components/common/Button/button';

const mockParam = {
  title: 'Add Product'
}

describe('Button', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<CustomButton {...mockParam} />)
      expect(component).toMatchSnapshot()
    });
  });
});