import { render, screen } from '@testing-library/react';
import App from './App';

test('renders mian Heading', () => {
  render(<App />);
  const mainHeading = screen.getByText(/Trello Board/i);
  expect(mainHeading).toBeInTheDocument();
});
