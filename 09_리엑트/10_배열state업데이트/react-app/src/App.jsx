import './App.css';
import { useState } from 'react';

const initialProducts = [
  {
    id: 0,
    name: 'Baklava',
    count: 1,
  },
  {
    id: 1,
    name: 'Cheese',
    count: 5,
  },
  {
    id: 2,
    name: 'Spaghetti',
    count: 2,
  },
];

// ”+” 버튼을 누르면 해당 숫자가 증가하도록 `handleIncrease`를 완성하세요
export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncrease(id) {
    const next = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          count: product.count + 1,
        };
      } else {
        return product;
      }
    });

    setProducts(next);
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button type="button" onClick={() => handleIncrease(product.id)}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
