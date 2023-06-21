import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';
import { useNavigate } from 'react-router-dom';

const Manager = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('edit/:id');}
  const { allItems, deleteProduct, editProduct, navigateToEdit } = useContext(ShopContext);
  return (
    <div>
      <h2>Manager</h2>
      {allItems.map((product) => (
        <div key={product.id}>
          <img src={product.image}></img>
          <h3>{product.title}</h3>
          <p>Price: {product.price}</p>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
          <button onClick={() => handleClick(product.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default Manager;
