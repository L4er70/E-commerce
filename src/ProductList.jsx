import React from "react";
import { Link } from 'react-router-dom';
import ProductCard from "./ProductCard";
import './productList.css';

const ProductList = () => {
  const products = [
    {
        id:'1',
        image:'camera.jpg',
        title:'Canon camera',
        price:'80$'

    },
    {
        id:'2',
        image:'cream.jpg',
        title:'Skin care',
        price:'80$'

    },
    {
        id:'3',
        image:'skincare.jpg',
        title:'Skin care',
        price:'80$'

    },
    {
        id:'4',
        image:'skincare2.jpg',
        title:'Skin care',
        price:'80$'

    },
    {
        id:'5',
        image:'skincare3.jpg',
        title:'Skin care',
        price:'80$'

    },
    {
        id:'6',
        image:'skincare3.jpg',
        title:'Skin care',
        price:'80$'

    },
    {
        id:'7',
        image:'skincare4.jpg',
        title:'Skin care',
        price:'80$'

    },
    {
        id:'8',
        image:'skincare5.jpg',
        title:'Skin care',
        price:'80$'

    },
    {
        id:'9',
        image:'skincare6.jpg',
        title:'Skin care',
        price:'80$'

    }
  ];

  return (
    <div>
      <div className="nav-bar">
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
            <li>
              <Link to="/products">Products list</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="product-card-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
