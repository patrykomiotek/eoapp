import { useState, useEffect } from 'react';
import axios from 'axios';

import { ProductRow } from './ProductRow';

type Product = {
  id: string;
  fields: {
    name: string;
    price: number;
  }
}

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchData = async () => {
    const response = await axios.get('https://api.airtable.com/v0/appR1T6x0KWpg335k/products', {
      headers: {
        Authorization: 'Bearer keyaXt4qtmUYjZljo',
      }
    });
    const productsFromDb = response.data.records;
    setProducts(productsFromDb);
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