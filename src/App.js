import React, { useState } from 'react';
import './App.css';
import Products from './components/Products/Products';
import AddToCart from './components/AddToCart/AddToCart';

function App() {
  let [cart, setCart] = useState({});

  const incrementQuantity = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[product.id]) {
        newCart[product.id].quantity += 1;
      } else {
        newCart[product.id] = { id: product.id, title: product.title, price: product.price, quantity: 1};
      }
      return newCart;
    });
  };

  //decrease quantity
  const decrementQuantity = (product) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[product.id]) {
        newCart[product.id].quantity -= 1;
        if (newCart[product.id].quantity === 0) {
          delete newCart[product.id];
        }
      }
      return newCart;
    });
  };

  console.log(cart); // For debugging purposes

  return (
    <div className="App">
      <Products />
      <AddToCart cart={cart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} />
    </div>
  );
}

export default App;