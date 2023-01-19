import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Quote from '../pages/Quote';

describe('Quote', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
