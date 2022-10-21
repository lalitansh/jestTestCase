import { shallow } from 'enzyme';
import React from 'react';
import ProgressBarView from '../../../src/components/ProgressBarView';

const mockVisible = {
  visible: false,
};

describe('LoadingIndicator', () => {
  const container = shallow(<ProgressBarView {...mockVisible} />)
  describe('Rendering', () => {
    it('should match to snapshot', () => {

      expect(container).toMatchSnapshot()
    });

    it('should have an Dialog component', () => {
      expect(container.find('Dialog[visible=true]'));
    });

    it('should have an View component', () => {
      expect(container.find('View'));
    });

    it('should have an MaterialIndicator component', () => {
      expect(container.find('MaterialIndicator'));
    });
  });
});
