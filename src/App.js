import React from "react";
// import Header from "./components/Header";
import Main from "./pages/Main";
import Range from "./components/Range";
import Products from "./components/Products";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">

      <Routes>
<Route path="/"element={Main} />
<Route path="/range"element={Range} />
<Route path="/products"element={Products} />


      </Routes>
      {/* <Header/> */}
      {/* <Main/>
      <Range/>
      <Products/> */}
    </div>
  );
}

export default App;
