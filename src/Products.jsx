// Products.jsx
import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';

const Products = () => {
  const { allItems, addProductToCart } = useContext(ShopContext);

  return (
    <div>
      <h2>Products</h2>
      {allItems.map((product) => (
        <div key={product.id}>
          <img src={product.image}></img>
          <h3>{product.title}</h3>
          <p>Price: {product.price}</p>
          <button onClick={() => addProductToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
