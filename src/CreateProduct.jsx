import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';

const CreateProduct = () => {
    const { allItems,addProduct }=useContext(ShopContext);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Process the form data and create a new product
  };

  return (
    <div>
      <h2>Create Product</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Title:
          <input type="text" defaultValue={allItems.title}/>
        </label>
        <br />
        <label>
          Price:
          <input type="text" defaultValue={allItems.price}/>
        </label>
        <br />
        <button type="submit" onClick={addProduct}>Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
