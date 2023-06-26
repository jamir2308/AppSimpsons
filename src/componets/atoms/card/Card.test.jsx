import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  const mockProps = {
    image: 'testImage.jpg',
    title: 'Test Title',
    description: 'Test Description',
    alt: 'Test Alt',
  };

  beforeEach(() => {
    render(<Card {...mockProps} />);
  });

  test('renders correctly', () => {
    expect(screen.getByAltText(mockProps.alt)).toBeInTheDocument();
  });

  test('displays the image passed in props', () => {
    expect(screen.getByAltText(mockProps.alt)).toHaveAttribute('src', mockProps.image);
  });

  test('displays the title passed in props', () => {
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  test('displays the description passed in props', () => {
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });
});
