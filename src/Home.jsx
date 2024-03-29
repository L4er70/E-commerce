import React from "react";
import { useNavigate } from 'react-router-dom';
import Products from "./Products";
import './Home.css'

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('shop/products');
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the TeamSystem Shop</h1>
      <button className="start-shopping-btn" onClick={handleClick}>Start Shopping</button>
    </div>
  );
};

export default Home;
