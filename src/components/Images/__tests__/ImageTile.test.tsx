import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test-utils';
import ImageTileComponent from '../ImageTile';
import { Image } from '../../../api/images';

describe('ImageTileComponent', () => {
  const mockImage: Image = {
    id: '1',
    filename: 'test-image.jpg',
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

  it('renders the image filename and size', () => {
    renderWithProviders(<ImageTileComponent image={mockImage} />);
    expect(screen.getByText('test-image.jpg')).toBeInTheDocument();
    expect(screen.getByText('0.01 MB')).toBeInTheDocument();
  });
});
