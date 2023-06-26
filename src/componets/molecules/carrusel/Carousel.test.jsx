import React from 'react';
import { render, screen } from '@testing-library/react';
import Carousel from './Carousel';
import useFetch from '../../../hooks/useFetch';

// Hacemos mock del hook personalizado y del componente Card
jest.mock('../../../hooks/useFetch');
jest.mock('../../atoms/card/Card', () => jest.fn(() => <div>Card</div>));

describe('Carousel', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders correctly while loading', () => {
        useFetch.mockReturnValue({ data: null, isLoading: true, error: null });
        render(<Carousel />);
        expect(screen.getByText('Cargando...')).toBeInTheDocument();
    });

    test('renders correctly when error occurs', () => {
        useFetch.mockReturnValue({ data: null, isLoading: false, error: 'Error test' });
        render(<Carousel />);
        expect(screen.getByText('Error: Error test')).toBeInTheDocument();
    });
});
