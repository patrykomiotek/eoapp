import axios from 'axios';
import type { AxiosResponse } from 'axios';

import type { Product } from '../types/Product';

const API_URL = 'https://api.airtable.com/v0/appR1T6x0KWpg335k';
const api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: 'Bearer keyaXt4qtmUYjZljo',
  }
});

type ProductsResponse = {
  records: Product[]
}

export const fetchProducts = (): Promise<AxiosResponse<ProductsResponse>> => {
  return api.get('/products');
}

export const fetchOrders = async () => {
  try {
    const response = await api.get('/orders');
    return response.data;
  } catch (error) {
    // 
  }
}
