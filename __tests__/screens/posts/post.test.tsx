import { shallow } from 'enzyme';
import React from 'react';
import Posts from '../../../src/screens/posts/post';
import { callGetApi } from '../../../src/network/api';
import { url } from '../../../src/constants/apiConstant';

const mockFn = jest.fn();
const mockParam = {
    useEffect: mockFn,
    getAllPosts: mockFn,
    onPressProduct: mockFn,
    logOutConfirmation: mockFn,
    onLogout: mockFn,
    callGetApi: mockFn,
    fetch: mockFn
}

const setState = jest.fn();
const useStateSpy = jest.spyOn(React, "useState");
useStateSpy.mockImplementation((initialState) => [initialState, setState]);

describe('Post', () => {
    const container = shallow(<Posts {...mockParam} />);

    describe('Rendering', () => {
        it('should match to snapshot', () => {
            expect(container).toMatchSnapshot()
        });

        it('should have an flatlist', () => {
            expect(container.find('FlatList[testID="FlatList1"]').length).toEqual(1);
        });

        it('should have an CommonHeader component', () => {
            expect(container.find('CommonHeader[title="Posts"]').length).toEqual(1);
        });

        it('should have an KeyboardAwareScrollView component', () => {
            expect(container.find('KeyboardAwareScrollView[testID="KeyboardAwareScrollView2"]'));
        });

        it('should have an ProgressBarView component', () => {
            expect(container.find('ProgressBarView[visible=false]').length).toEqual(1);
        });



    });


    test('the data is proper', async () => {
        const data = await callGetApi(`${url.posts}`);
        expect(data.valid).toBe(true);
    });

});
