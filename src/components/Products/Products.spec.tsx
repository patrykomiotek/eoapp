import * as axios from "axios";
import type { AxiosResponse } from 'axios';
import { render, screen } from '@testing-library/react';

import { Products } from './Products';
import { fetchProducts, Product, ProductResponse } from '../../services/products';
import { AccessExpression } from "typescript";

jest.mock("axios");
jest.mock('../../services/products', () => ({
  fetchProducts: jest.fn(),
}));

const mockedFetchProducts = fetchProducts as jest.Mock;
// const mockedFetchProducts = fetchProducts as jest.Mock<Promise<AxiosResponse<ProductResponse>>>;

describe('products component', () => {
  it('should display products list', async () => {
    // fetchProducts.mockResolvedValue({records: [{id: '123', fields: { name: 'sdfsd'}}]});

    // axios.get.mockImplementation(() => Promise.resolve({records: [{id: '123', fields: { name: 'sdfsd'}}]}));

    // mockedFetchProducts.mockImplementation(
    //   () => Promise.resolve({ data: {records: [{id: '123', fields: { name: 'sdfsd'}}]}})
    // );

    mockedFetchProducts.mockResolvedValue({
      data: {
        records: [
          {
            id: '123',
            fields: {
              name: 'sdfsd',
              description: 'Lorem ipsum',
              price: 100,
            }
          }
        ]
    }
  });

    render(<Products />);
    expect(await screen.findByText('sdfsd')).toBeInTheDocument();
  });
});