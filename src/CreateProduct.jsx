import React, { useContext, useState } from 'react';
import { ShopContext } from './ShopContext';

const CreateProduct = () => {
    const { allItems,addProduct }=useContext(ShopContext);
    const [title,setTitle]=useState('');
    const [price,setPrice]=useState('');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Process the form data and create a new product

    const newProduct={
      title:title,
      price:price
    };
    addProduct(newProduct);

    setTitle('');
    setPrice('');
  };

  return (
    <div>
      <h2>Create Product</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </label>
        <br />
        <label>
          Price:
          <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/>
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
