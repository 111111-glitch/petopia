import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar2() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  // Render Navbar2 only if not on login or register page
  if (isLoginPage || isRegisterPage) {
    return null;
  }

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/productPost" className="nav-link">Product Post</Link>
          </li>
          <li className="nav-item">
            <Link to="/ServicePost" className="nav-link">Service Post</Link>
          </li>
          <li className="nav-item">
            <Link to="/deleteProduct" className="nav-link">Delete Product</Link>
          </li>
          <li className="nav-item">
            <Link to="/deleteService" className="nav-link">Delete Service</Link>
          </li>
          <li className="nav-item">
            <Link to="/history" className="nav-link">History</Link>
          </li>
          <li className="nav-item">
            <Link to="/patchProduct" className="nav-link">Patch Product</Link>
          </li>
          <li className="nav-item">
            <Link to="/patchService" className="nav-link">Patch Service</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar2;
