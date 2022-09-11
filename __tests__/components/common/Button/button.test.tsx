import renderer from 'react-test-renderer';
import React from 'react';
import CustomButton from '../../../../src/components/common/Button/button';

const mockParam = {
title : 'Add Product'
}

it('renders correctly across screens', () => {
  const tree = renderer.create(<CustomButton {...mockParam}/>).toJSON();
  expect(tree).toMatchSnapshot();
});