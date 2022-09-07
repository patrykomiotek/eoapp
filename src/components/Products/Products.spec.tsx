import { render, screen } from '@testing-library/react';
import { Products } from './Products';

import { fetchProducts } from '../../api/products';

// jest.mock('axios');
jest.mock('../../api/products', () => ({
  fetchProducts: jest.fn(),
  saveProducts: jest.fn(),
}));

const mockedFetchProducts = fetchProducts as jest.Mock;

describe('<Products /> component', () => {
  it('should display Loading... text', () => {
    render(<Products />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should display error when get empty response', async () => {
    mockedFetchProducts.mockResolvedValue({});
    render(<Products />);

    expect(await screen.findByText(/Error/i)).toBeInTheDocument();
  });

  it('should display error', async () => {
    mockedFetchProducts.mockRejectedValue({});
    render(<Products />);

    expect(await screen.findByText(/Error/i)).toBeInTheDocument();
  });

  it('should display first product', async () => {
    const mockedResponse = {
      data: {
        records: [
          {
            id: '124',
            fields: {
              name: 'Product 1',
              price: 123,
            },
          },
        ],
      },
    };

    mockedFetchProducts.mockResolvedValue(mockedResponse);
    render(<Products />);

    expect(await screen.findByText(/Product 1/i)).toBeInTheDocument();
  });
});
