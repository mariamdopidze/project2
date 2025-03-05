import React from "react";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Singleproduct from "./pages/Singleproduct";
import { Routes, Route } from "react-router-dom";
import Comparison from "./pages/Comparison";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/single" element={<Singleproduct/>} />
        <Route path="/comparison" element={<Comparison/>} />
      </Routes>
     
    </div>
  );
}

export default App;
