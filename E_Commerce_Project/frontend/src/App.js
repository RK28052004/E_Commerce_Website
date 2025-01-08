import './App.css';
import Cart from '../src/pages/Cart.js';
import Home from '../src/pages/Home.js';
import ProductDetail from '../src/pages/ProductDetail.js';
import Header from '../src/components/Header.js';
import Footer from '../src/components/Footer.js';
import { Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App()
{
  const [cartItems,setCartItems]=useState([]);
  return(
    <>
    <div className="App">
      <div>
        <ToastContainer theme="dark" position="top-center"/>
        <Header cartItems={cartItems}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<Home />}/>
          <Route path="/product/:id" element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems}/>}/>
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
    </>
  );
}
export default App;