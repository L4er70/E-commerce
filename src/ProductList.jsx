import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useNavigate, useParams } from 'react-router-dom';
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
        </div>
    )
};
export default ProductList;