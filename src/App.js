import React, { useState } from "react";
import Navbar from './Navbar'; // Ensure correct casing and path
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "./styles.css";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart"; // Ensure you have a Cart component

function App() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productIndex) => {
    const newCart = [...cart];
    newCart.splice(productIndex, 1);
    setCart(newCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  const handleBuyNow = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart" style={{ marginLeft: '10px' }}>
          Giỏ hàng ({cart.length})
        </Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              addToCart={addToCart}
              handleBuyNow={handleBuyNow}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              calculateTotal={calculateTotal}
              handleCheckout={() => alert('Thanh toán thành công!')}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductDetail
              addToCart={addToCart}
              handleBuyNow={handleBuyNow}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;