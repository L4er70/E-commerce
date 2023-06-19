import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import Product from "./ProductCard";
const ProductList=()=>{
    console.log('hello')
    return (
        <div>
             <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/manager">Manager</Link>
          </li>
        </ul>
      </nav>
      <body>
        <ul>
            <li>
    
        <div>
            <Product
            image='camera.jpg'
            title='Camera'
            price='40'
            />

        </div>
        </li>
        </ul>
      </body>
        </div>
    )
};
export default ProductList;