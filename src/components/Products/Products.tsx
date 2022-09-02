import { useState, useEffect } from 'react';

import { ProductRow } from './ProductRow';
import { fetchProducts } from '../../api/products';
import type { Product } from '../../types/Product';

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchData = async () => {
    const response = await fetchProducts();
    setProducts(response.data.records);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.map((elem) => (
        <ProductRow
          key={elem.id}
          name={elem.fields.name}
          price={elem.fields.price}
        />
      ))}
    </div>
  );
}