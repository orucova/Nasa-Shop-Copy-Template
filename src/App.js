import React from "react";
import { Route, Routes } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/create-account" element={<Register/>} />
        <Route path="/product-detail/:id" element={<ProductDetail/>} />
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
