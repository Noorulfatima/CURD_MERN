import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Users from "./components/users";
import Products from "./components/products";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/navbar";
// import Details from "./components/details";
import ProductDetail from './components/productDetail'
// import Logout from "./components/details";
function App() { 
 
  return (
    <>
   
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products/:id" element={<ProductDetail/>}/>
        

      </Routes>
    </>
  );
}

export default App;
