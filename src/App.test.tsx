import { screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './utils/test-utils';

test('renders the header and main content', () => {
  renderWithProviders(<App />);

  // Check if the header and main content are rendered
  expect(screen.getByRole('heading', { name: /photos/i })).toBeInTheDocument();
});

test('renders the sidebar when an image is selected', () => {
  renderWithProviders(<App />);

  // Check if the sidebar is rendered
  expect(screen.getByRole('complementary')).toBeInTheDocument();
  expect(screen.getByText(/favorites/i)).toBeInTheDocument();
});
