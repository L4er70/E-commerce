import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';

const EditProduct = () => {
    const{ allItems, editProduct }=useContext(ShopContext);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Process the form data and update the product
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Title:
          <input type="text" defaultValue={allItems.title} />
        </label>
        <br />
        <label>
          Price:
          <input type="text" defaultValue={allItems.price} />
        </label>
        <br />
        <button type="submit" onClick={editProduct}>Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
