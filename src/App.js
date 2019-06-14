import React from 'react';
import './App.css';

import ShoppingCart from "./components/shoppingCart";
import ShoppingItem from "./components/shoppingItem";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <ShoppingItem />
      <ShoppingCart />
    </div>
  );
}

export default App;
