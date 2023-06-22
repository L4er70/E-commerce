import React, { useContext, useState } from 'react';
import { ShopContext } from './ShopContext';
import "./CreateProduct.css";

const CreateProduct = () => {
    const { allItems,addProduct }=useContext(ShopContext);
    const [title,setTitle]=useState('');
    const [price,setPrice]=useState('');
    const[image,setImage]=useState('');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Process the form data and create a new product

    const newProduct={
      title:title,
      price:price,
      image:image
    };
    addProduct(newProduct);

    setTitle('');
    setPrice('');
    setImage('');
  };

  return (
    <div>
      <h2>Create Product</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Image:
          <input src={image} value={image} onChange={(e)=>setImage(e.target.value)}/>
        </label>
        <br/>
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
