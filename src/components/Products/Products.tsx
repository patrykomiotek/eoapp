import { useState, useEffect } from 'react';
import axios from 'axios';

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
        <div key={elem.id}>
          <span>{elem.fields.name}</span> <span>{elem.fields.price}</span>
        </div>
      ))}
    </div>
  );
}