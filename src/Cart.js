import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
function Cart({ cart, removeFromCart, calculateTotal, handleCheckout }) {
  return (
    <div>
      <h1>Giỏ Hàng</h1>
      <Link to="/" style={{ margin: '10px', textDecoration: 'none' }}>
        Quay lại
      </Link>
      {cart.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống.</p>
      ) : (
        <div>
          {cart.map((product, index) => (
            <div key={index} className="cart-item">
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '50px' }}
              />
              <span>{product.name}</span>
              <span>{product.price.toLocaleString('vi-VN')} VND</span>
              <button onClick={() => removeFromCart(index)}>Xóa</button>
            </div>
          ))}
          <h2>Tổng: {calculateTotal().toLocaleString('vi-VN')} VND</h2>
          <button onClick={handleCheckout}>Thanh toán</button>
        </div>
      )}
    </div>
  );
}

export default Cart;