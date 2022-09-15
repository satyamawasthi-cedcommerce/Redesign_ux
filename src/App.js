import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Componenets/About";
import Header from "./Componenets/Header";
import Home from "./Componenets/Home";
import Shop from "./Componenets/Shop";
import Cart from "./Componenets/Cart";
import Checkout from "./Componenets/Checkout";
import Footer from "./Componenets/Footer";
function App() {
  // state cartArray to store products in cart
  const [cartArr, setCartArr] = useState([]);
  return (
    <div className="App">
      <Header cartArr={cartArr}/>
      {/* Providing Navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop cartArr={cartArr} setCartArr={setCartArr}/>} />
        <Route path="/cart" element={<Cart cartArr={cartArr} setCartArr={setCartArr}/>} />
        <Route path="/checkout" element={<Checkout cartArr={cartArr} setCartArr={setCartArr}/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
