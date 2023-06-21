import React from 'react';

const CreateProduct = ({ addProduct }) => {
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
          <input type="text" />
        </label>
        <br />
        <label>
          Price:
          <input type="text" />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
