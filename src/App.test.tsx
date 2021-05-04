import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello world/i);
  expect(linkElement).toBeInTheDocument();
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByTestId("custom-element");
//       expect(linkElement).toBeInTheDocument();
// });
