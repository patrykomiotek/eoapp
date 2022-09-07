import { useState, useEffect } from 'react';

import { ProductRow } from './ProductRow';
import { fetchProducts } from '../../api/products';
import type { Product } from '../../types/Product';

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetchProducts();
      setProducts(response.data.records);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error!</p>}
      {products.map((elem) => (
        <ProductRow key={elem.id} name={elem.fields.name} price={elem.fields.price} />
      ))}
    </div>
  );
};
