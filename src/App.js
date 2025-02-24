import React from "react";
import Main from "./pages/Main";
import Shop from "./pages/Shop"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/Shop" element={<Shop/>} />
      </Routes>
     
    </div>
  );
}

export default App;
