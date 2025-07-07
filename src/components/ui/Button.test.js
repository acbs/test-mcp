import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders button with text', () => {
  render(<Button text='Click me' />);
  expect(screen.getByText(/Click me/i)).toBeInTheDocument();
});