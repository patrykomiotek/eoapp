import { useState, useEffect } from 'react';

import { fetchProducts, Product } from '../../services/products';


export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetchProducts();
      const data = response.data.records;
      setProducts(data);
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {products && (
        <div>
          {products.map((product) => (
            <div key={product.id}>{product.fields.name}</div>
          ))}
        </div>
      )}
    </div>
  );
}