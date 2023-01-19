import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import Home from '../pages/Quote';

describe('Home', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
