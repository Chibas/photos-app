import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test-utils';
import Sidebar from '../Sidebar';
import { Image } from '../../../api/images';

const image: Image = {
  id: '1',
  filename: 'test.jpg',
  sizeInBytes: 12345,
  uploadedBy: 'user123',
  createdAt: '2022-03-13T15:30:00Z',
  updatedAt: '2022-03-13T15:30:00Z',
  dimensions: { width: 100, height: 200 },
  resolution: { width: 72, height: 72 },
  description: 'A test image',
  favorited: false,
  url: 'http://123',
  sharedWith: []
};




describe('Sidebar', () => {
  test('renders image filename and size', () => {
    renderWithProviders(<Sidebar image={image} favorited={false} />);
    const filename = screen.getByText('test.jpg');
    const size = screen.getByText('0.01 MB');
    expect(filename).toBeInTheDocument();
    expect(size).toBeInTheDocument();
  });

  test('renders image description', () => {
    renderWithProviders(<Sidebar image={image} favorited={false} />);
    const description = screen.getByText('A test image');
    expect(description).toBeInTheDocument();
  });
});
