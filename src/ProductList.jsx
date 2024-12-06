import React from 'react';
import { Link } from 'react-router-dom';
import products from './data/products';
import './styles.css';
function ProductList({ addToCart, handleBuyNow }) {
  return (
    <div>
      <h1>Sản phẩm</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
            </Link>
            <p>{product.description}</p>
            <p>{product.price.toLocaleString('vi-VN')} VND</p>
            <button onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
            <button onClick={() => handleBuyNow(product)}>Mua ngay</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;