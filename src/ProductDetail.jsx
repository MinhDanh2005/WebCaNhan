import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import products from './data/products';
import './styles.css';
function ProductDetail({ addToCart, handleBuyNow }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();

  if (!product) {
    return (
      <div>
        <p>Sản phẩm không tồn tại.</p>
        <button onClick={() => navigate('/')}>Quay lại trang chủ</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <img src={product.image} alt={product.name} style={{ width: '200px' }} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price.toLocaleString('vi-VN')} VND</p>
      <button onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
      <button onClick={() => handleBuyNow(product)}>Mua ngay</button>
      <Link to="/" style={{ marginTop: '10px', display: 'block' }}>Quay lại</Link>
    </div>
  );
}

export default ProductDetail;