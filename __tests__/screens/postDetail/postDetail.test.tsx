import { shallow } from 'enzyme';
import React from 'react';
import PostDetail from '../../../src/screens/posts/postDetail';
import { callGetApi } from '../../../src/network/api';
import { url } from '../../../src/constants/apiConstant';

const mockFn = jest.fn();
const mockParam = {
    useEffect: mockFn,
    getPost: mockFn,
}

describe('Post', () => {
    const container = shallow(<PostDetail {...mockParam} />);

    describe('Rendering', () => {
        it('should match to snapshot', () => {
            expect(container).toMatchSnapshot()
        });

        it('should have an Image', () => {
            expect(container.find('Image[resizeMode="contain"]').length).toEqual(1);
        });

        it('should have an CommonHeader component', () => {
            expect(container.find('CommonHeader[title="Post Detail"]').length).toEqual(1);
        });

        it('should have an KeyboardAwareScrollView component', () => {
            expect(container.find('KeyboardAwareScrollView[testID="KeyboardAwareScrollView3"]'));
        });

        it('should have an ProgressBarView component', () => {
            expect(container.find('ProgressBarView[visible=false]').length).toEqual(1);
        });

    });

    it('the data is proper', async () => {
        const data = await callGetApi(`${url.postDetails}/1`);
        expect(data.valid).toBe(true);
    })

});
