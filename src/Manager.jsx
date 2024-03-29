import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';
import { useNavigate } from 'react-router-dom';
import "./Products.css";

const Manager = () => {
  const navigate = useNavigate();

  const handleEditNavigate = (id) => {
    navigate('edit/'+id);}
    const handleCreateNavigate=()=>{
      navigate('create');
    }
  const { allItems, deleteProduct, editProduct, navigateToEdit } = useContext(ShopContext);
  return (
    <div className='container'>
      <h2>Manager</h2>
      <div className='product-list'>
      {allItems.map((product) => (
        <div className='product' key={product.id}>
          <img src={product.image}></img>
          <h3>{product.title}</h3>
          <p>Price: {product.price}</p>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
          <button onClick={() => handleEditNavigate(product.id)}>Edit</button>
        </div>
      ))}
      </div>
       <div className="footer">
        <button className="manager-button" onClick={handleCreateNavigate}>
          Create new
        </button>
      </div>
    </div>
  );
};

export default Manager;
