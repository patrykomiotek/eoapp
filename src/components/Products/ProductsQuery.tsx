import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'

import { fetchProducts } from '../../services/products';

export const ProductsQuery = () => {
  const queryClient = useQueryClient();
  const { isLoading, isSuccess, isError, data, error, refetch } = useQuery(
    ['products'],
    fetchProducts
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log('data: ', data);

  return (
    <div>
      {data && (
        <div>
          {data.data.records.map((product) => (
            <div key={product.id}>{product.fields.name}</div>
          ))}
        </div>
      )}
    </div>
  );
}