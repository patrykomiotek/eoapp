import axios from 'axios';
import type { AxiosResponse } from 'axios';

export type Product = {
  id: string;
  fields: {
    name: string;
    description: string;
    price: number;
  }
}

export type ProductResponse = {
  records: Product[];
}

export const api = axios.create({
  baseURL: 'https://api.airtable.com/v0/appR1T6x0KWpg335k',
  headers: {
    Authorization: 'Bearer keyaXt4qtmUYjZljo',
  }
});

export const fetchProducts = (): Promise<AxiosResponse<ProductResponse>> => {
  return api.get('/products');
}

// export const fetchProducts: Promise<AxiosResponse<ProductResponse>> = async () => {
//   try {
//     const response = await api.get<AxiosResponse<ProductResponse>>('/products');
//     return response.data.records;
//   } catch (e) {
//     console.log(e);
//   }
// }
