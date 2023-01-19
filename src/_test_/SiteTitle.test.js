import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SiteTitle from '../components/SiteTitle';

describe('SiteTitle', () => {
  test('renders the correct title', () => {
    const { getByText } = render(<SiteTitle />);
    expect(getByText('Math Magicians')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveTextContent('Math Magicians');
  });

  test('renders the correct heading', () => {
    const { getByText } = render(<SiteTitle />);
    const heading = getByText(/Math Magicians/i);
    expect(heading.tagName).toBe('H1');
  });
});
