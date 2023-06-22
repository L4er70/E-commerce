import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from './ShopContext';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  const { allItems, editProduct } = useContext(ShopContext);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const[image,setImage]=useState('');
  const {id}=useParams()
  useEffect(() => {
    const product = allItems.find((item) => item.id === id);
    if (product) {
      setTitle(product.title);
      setPrice(product.price);
      setImage(product.image);
    }
  }, [allItems, id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const updatedProduct = {
      title: title,
      price: price,
      image:image
    };
    console.log("updated product :",updatedProduct);
    editProduct(id, updatedProduct);
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleFormSubmit}>
      <label>
          Image:
          <input src={image} value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
