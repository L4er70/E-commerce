import React from "react";
import { Outlet, Link } from 'react-router-dom';
import { ShopProvider } from "./ShopContext";

const Shop = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/shop/products">Products</Link>
          </li>
          <li>
            <Link to="/shop/cart">Cart</Link>
          </li>
          <li>
            <Link to="/shop/manager">Manager</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Shop;
