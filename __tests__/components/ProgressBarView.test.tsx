import renderer from 'react-test-renderer';
import React from 'react';
import ProgressBarView from '../../src/components/ProgressBarView';

const mockVisible = {
  visible: false,
};

it('renders correctly progress bar', () => {
  const tree = renderer.create(<ProgressBarView {...mockVisible} />).toJSON();
  expect(tree).toMatchSnapshot();
});
