import { render, screen } from '@testing-library/react';
import App from './App';

test('pic', () => {
  render(<App/>);
  const linkElement = screen.getAllByRole('img');
  expect(linkElement).toBeInTheDocument();
});
