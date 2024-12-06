import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
function Navbar({ cartCount }) {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Howl's Shop</Link>
      </div>
      <div className="nav-icons">

      </div>
    </nav>
  );
}

export default Navbar;