import {describe, expect, test} from '@jest/globals';
import {checkEveryLength} from '../../../src/utils/functions/getters';

describe('sum module', () => {
  test('Check for length of each and every element', () => {
    expect(checkEveryLength(1, 2, 'name', 550)).toBeTruthy()
  });
});