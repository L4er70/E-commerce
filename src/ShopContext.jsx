import React, { createContext, useState } from "react";


export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [allItems, setAllItems] = useState([
    // Initial list of products
    { id: '1', title: 'Product 1',image:'skincare.jpg', price: 10, quantity: 1 },
    { id: '2', title: 'Product 2',image:'skincare.jpg', price: 20, quantity: 1 },
    { id: '3', title: 'Product 3', image:'skincare.jpg',price: 30, quantity: 1 },
  ]);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  
  const addProduct = (product) => {
    // Check if the product is already in the cart
    const existingProduct = allItems.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product already exists, increase the quantity
      const updatedItems = allItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      setAllItems(updatedItems);
    } else {
      // If the product is new, add it to the cart
      const newItem = { ...product, quantity: 1 };
      setAllItems([...allItems, newItem]);
    }

    // Update total price
    setTotalPrice(totalPrice + product.price);
  };

  const addProductToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      // If the product already exists, increase the quantity
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      setCartItems(updatedCartItems);
    } else {
      // If the product is new, add it to the cart
      const newCartItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
    }

    // Update total price
    setTotalPrice(totalPrice + product.price);
  };

  const deleteProduct = (productId) => {
    // Remove the product from allItems
    const updatedAllItems = allItems.filter((item) => item.id !== productId);
    setAllItems(updatedAllItems);

    // Remove the product from cartItems if present
    const existingCartItem = cartItems.find((item) => item.id === productId);
    if (existingCartItem) {
      const updatedCartItems = cartItems.filter((item) => item.id !== productId);
      setCartItems(updatedCartItems);

      // Update total price
      setTotalPrice(totalPrice - existingCartItem.price * existingCartItem.quantity);
    }
  };

  const editProduct = (productId, updatedProduct) => {
    // Update the product in allItems
    const updatedAllItems = allItems.map((item) => {
      if (item.id === productId) {
        return { ...item, title: updatedProduct.title, price: updatedProduct.price };
      }
      return item;
    });
    setAllItems(updatedAllItems);

    // If the edited product is in cartItems, update its price
    const existingCartItem = cartItems.find((item) => item.id === productId);
    if (existingCartItem) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === productId) {
          const newTotalPrice =
            totalPrice - existingCartItem.price * existingCartItem.quantity;
          return { ...item, price: updatedProduct.price };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    }
  };

  const addQuantity = (productId) => {
    // Increment the quantity of the product in cartItems
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);

    // Update total price
    const existingCartItem = cartItems.find((item) => item.id === productId);
    if (existingCartItem) {
      setTotalPrice(totalPrice + existingCartItem.price);
    }
  };

  const decreaseQuantity = (productId) => {
    // Decrement the quantity of the product in cartItems
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);

    // Update total price
    const existingCartItem = cartItems.find((item) => item.id === productId);
    if (existingCartItem) {
      setTotalPrice(totalPrice - existingCartItem.price);
    }
  };

  return (
    <ShopContext.Provider
      value={{
        allItems,
        cartItems,
        totalPrice,
        addProductToCart,
        deleteProduct,
        editProduct,
        addQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
