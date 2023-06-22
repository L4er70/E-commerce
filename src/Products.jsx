import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';
import './Products.css';

const Products = () => {
  const { allItems, addProductToCart } = useContext(ShopContext);

  return (
    <div className="container">
      <h2>Products</h2>
      <div className="product-list">
        {allItems.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <button onClick={() => addProductToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
