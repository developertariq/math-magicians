import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  test('renders correctly', () => {
    const tree = renderer.create(
      <Router>
        <Navbar />
      </Router>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders the correct home page', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    const homeLink = getByText(/Home/i);
    fireEvent.click(homeLink);
    expect(window.location.pathname).toBe('/');
  });

  test('renders the home page is active', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    const homeLink = getByText(/Home/i);
    fireEvent.click(homeLink);
    expect(homeLink.classList.contains('active')).toBe(true);
  });

  test('renders the correct calculator page', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    const calcLink = getByText(/Calculator/i);
    fireEvent.click(calcLink);
    expect(window.location.pathname).toBe('/Calculator');
  });

  test('renders the calculator page is active', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    const calcLink = getByText(/Calculator/i);
    fireEvent.click(calcLink);
    expect(calcLink.classList.contains('active')).toBe(true);
  });

  test('renders the correct quote page', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    const quoteLink = getByText(/Quote/i);
    fireEvent.click(quoteLink);
    expect(window.location.pathname).toBe('/Quote');
  });

  test('renders the quote page is active', () => {
    const { getByText } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    const quoteLink = getByText(/Quote/i);
    fireEvent.click(quoteLink);
    expect(quoteLink.classList.contains('active')).toBe(true);
  });
});
