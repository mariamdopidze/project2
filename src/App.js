import React from "react";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Singleproduct from "./pages/Singleproduct";
import { Routes, Route } from "react-router-dom";
import Comparison from "./pages/Comparison";
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/single" element={<Singleproduct/>} />
        <Route path="/comparison" element={<Comparison/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blog" element={<Blog/>} />
      </Routes>
     
    </div>
  );
}

export default App;
