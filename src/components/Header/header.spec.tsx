import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './index'

test('render header', () => {
  render(<Header />);
  const logoElement = screen.getByTestId('logo');
  const localeElement = screen.getByTestId('info-locale');
  const cartButtonElement = screen.getByTestId('cart-button');
  expect(logoElement).toBeInTheDocument();
  expect(localeElement).toBeInTheDocument();
  expect(cartButtonElement).toBeInTheDocument();
});
