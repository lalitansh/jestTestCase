import renderer from 'react-test-renderer';
import React from 'react';
import CommonHeader from '../../../../src/components/common/Header/commonHeader';

it('renders correctly across screens', () => {
  const tree = renderer.create(<CommonHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});