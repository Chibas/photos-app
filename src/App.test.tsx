import { screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './utils/test-utils';

test('renders the header and main content', () => {
  renderWithProviders(<App />);
  expect(screen.getByRole('heading', { name: /photos/i })).toBeInTheDocument();
});

test('renders the sidebar when an image is selected', () => {
  renderWithProviders(<App />);

  expect(screen.getByRole('complementary')).toBeInTheDocument();
  expect(screen.getByText(/favorites/i)).toBeInTheDocument();
});
