import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="shop/products">Products</Link>
        </li>
        <li>
          <Link to="shop/cart">Cart</Link>
        </li>
        <li>
          <Link to="shop/manager">Manager</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
