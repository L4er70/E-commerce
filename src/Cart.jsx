import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';
import "./Cart.css";

const Cart = () => {
  const { cartItems, addQuantity, decreaseQuantity } = useContext(ShopContext);
  const calculateTotalPrice = (items) => {
    // Placeholder function, replace it with your own logic to calculate the total price
    let totalPrice = 0;
    for (const item of items) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  };

  return (
    <div>
      <h2>Cart</h2>
      <div className='container-of-cart'>
      
      {cartItems.map((item) => (
        <div className='product' key={item.id}>
          <img src={item.image}></img>
          <h3>{item.title}</h3>
          <p>Price: {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => decreaseQuantity(item.id)}>Decrease</button>
          <button onClick={() => addQuantity(item.id)}>Increase</button>
        </div>
      ))}
      </div>
      <p className='totalPrice'>Total Price: {calculateTotalPrice(cartItems)}</p>
    </div>
  );
};

export default Cart;
