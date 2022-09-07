import type { AxiosResponse } from 'axios';

import { api } from './index';
import type { Product } from '../types/Product';

type ProductsResponse = {
  records: Product[];
};

export const fetchProducts = (): Promise<AxiosResponse<ProductsResponse>> => {
  return api.get('/products');
};

// export const saveProduct = (data): Promise<AxiosResponse<ProductsResponse>> => {
//   return api.post('/products', data);
// }

// export const updateProduct = (id, data): Promise<AxiosResponse<ProductsResponse>> => {
//   return api.patch(`/products/${id}`, data);
// }

// export const deleteProduct = (id): Promise<AxiosResponse<ProductsResponse>> => {
//   return api.patch(`/products/${id}`);
// }

export const fetchOrders = async () => {
  try {
    const response = await api.get('/orders');
    return response.data;
  } catch (error) {
    //
  }
};
