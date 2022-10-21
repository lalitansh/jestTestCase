import { shallow } from 'enzyme';
import React from 'react';
import Signup from '../../../../src/screens/auth/signup';

const mockFn = jest.fn();
const mockParam = {
    handleSetForm: mockFn,
    validate: mockFn,
    onSave: mockFn
}

describe('Post', () => {
    const container = shallow(<Signup {...mockParam} />);

    describe('Rendering', () => {
        it('should match to snapshot', () => {
            expect(container).toMatchSnapshot()
        });

        it('should have an email TextField1 component', () => {
            expect(container.find('TextField[label="EMAIL:"]'));
        });

        it('should have an password TextField2 component', () => {
            expect(container.find('TextField[label="PASSWORD:"]'));
        });

        it('should have an password TextField3 component', () => {
            expect(container.find('TextField[label="CONFIRM PASSWORD:"]'));
        });

        it('should have an ProgressBar component', () => {
            expect(container.find('ProgressBarView[visible=false]').length).toEqual(1);
        });

        it('should have an CustomButton component', () => {
            expect(container.find('CustomButton[title="Signup"]').length).toEqual(1);
        });

    });

});
