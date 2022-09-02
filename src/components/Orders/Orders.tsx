import { useQuery } from '@tanstack/react-query';

import { OrdersRow } from './OrdersRow';
import { fetchOrders } from '../../api/orders';

export const Orders = () => {
  const { isLoading, isError, data: response } = useQuery(['orders'], fetchOrders);
  // const {} = useQuery(['orders'], fetchOrdersId);

  const orders = response?.data.records;

  return (
    <div>
      <h1>Orders</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error!</p>}
      {orders?.map((elem) => (
        <OrdersRow
          key={elem.id}
          orderId={elem.fields.orderId}
          status={elem.fields.status}
        />
      ))}
    </div>
  );
}