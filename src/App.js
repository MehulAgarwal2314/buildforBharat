import React from "react";
import {Routes, Route} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Shop } from "./components/shop";
import Button1  from "./components/Button1";
import { useState} from "react";
import { PRODUCTS } from "./components/Asliproducts";

export default function App() {
 
  let [items,setItems]=useState(PRODUCTS);
  const [cart,setCart]=useState([]);

  const addToCart=(item)=>{
    const itemAlreadyInCart = cart.find((cartItem) => cartItem.id === item.id);
    if (itemAlreadyInCart) {
      // If the item is already in the cart, increase its quantity
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  const countItemsInCart = ( ) => {
    return cart.reduce((totalCount, cartItem) => totalCount + cartItem.quantity, 0);
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== itemToRemove.id);
    setCart(updatedCart);
  };
 
  const decreaseQuantity = (PRODUCT) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === PRODUCT.id && cartItem.quantity > 0
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCart(updatedCart);
  };

  // Function to increase the quantity of an item in the cart
  const increaseQuantity = (PRODUCT) => {
    const updatedCart = cart.map((cartItem) =>
    cartItem.id === PRODUCT.id
        ? { ...cartItem, quantity:cartItem.quantity + 1 }
        : cartItem
    );
    setCart(updatedCart);
  };

  // Function to handle quantity change input directly
  const handleQuantityChange = (PRODUCT, newQuantity) => {
    const updatedCart = cart.map((cartItem) =>
    cartItem.id === cartItem.id
        ? { ...cartItem, quantity: parseInt(newQuantity, 10) || 0 }
        : cartItem
    );
    setCart(updatedCart);
  };


  return (
    <>
            <Router>
                  <Routes>
                  <Route path="/" element={<Shop addToCart={addToCart} items={items} cart={cart} countItemsInCart={countItemsInCart}/>} />
                  <Route path="/cart" element={<Button1 cart={cart} removeFromCart={removeFromCart}  increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} handleQuantityChange={handleQuantityChange}/>} /> 
                 </Routes>
            </Router>
    </>
  );
}
