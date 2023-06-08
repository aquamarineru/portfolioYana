import React from 'react';
import { render, screen } from '@testing-library/react';
import Selected from './Selected';

// Mock the urlFor function
jest.mock('../../lib/client', () => ({
  urlFor: () => ({
    url: jest.fn().mockReturnValue('https://example.com/image.jpg'),
  }),
}));

describe('Selected', () => {
  test('renders the component with carousel data', () => {
    const carouselData = [
      {
        image: {
          asset: 'image-asset-id',
          caption: 'Image Caption',
          meta_title: 'Image Meta Title',
        },
      },
    ];

    render(<Selected carouselData={carouselData} />);

    // Assert that the component renders the image
    const imageElement = screen.getByAltText('Image Caption');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.getAttribute('src')).toBe('https://example.com/image.jpg');

    // Assert that the "View all" button is present
    const viewAllButton = screen.getByRole('link', { name: 'View all' });
    expect(viewAllButton).toBeInTheDocument();
    expect(viewAllButton.getAttribute('href')).toBe('/portfolio');
  });

  test('renders the component without carousel data', () => {
    const carouselData = [];

    render(<Selected carouselData={carouselData} />);

    // Assert that there are no images rendered
    const imageElements = screen.queryAllByRole('img');
    expect(imageElements.length).toBe(0);

    // Assert that the "View all" button is present
    const viewAllButton = screen.getByRole('link', { name: 'View all' });
    expect(viewAllButton).toBeInTheDocument();
    expect(viewAllButton.getAttribute('href')).toBe('/portfolio');
  });
});
