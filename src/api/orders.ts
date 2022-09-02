import type { AxiosResponse } from 'axios';

import { api } from './index';
import type { Order } from '../types/Order';

type OrdersResponse = {
  records: Order[]
}

export const fetchOrders = (): Promise<AxiosResponse<OrdersResponse>> => {
  return api.get('/orders');
}
