import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file

const Navbar = () => {
    const location = useLocation();

    // Check if the current path is login or register
    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';

    // Render the Navbar only if not on login or register page
    if (isLoginPage || isRegisterPage) {
        return null;
    }

    return (
        <nav className="navbar">
            <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav  navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                <NavLink className="navbar-brand" to="#">
                    <b>PETOPIA</b>
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarScroll"
                    aria-controls="navbarScroll"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                
                        <ul className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">
                                HOME
                            </NavLink>
                        </ul>
                      
                        <ul className="nav-item">
                            <NavLink className="nav-link" to="/products">
                                PRODUCTS
                            </NavLink>
                        </ul>
                        <ul className="nav-item">
                            <NavLink className="nav-link" to="/services">
                                SERVICES
                            </NavLink>
                        </ul>
                    <form className="search-form">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="search-button" type="submit">
                            Search
                        </button>
                    </form>
                        <ul className="nav-item">
                            <NavLink className="nav-link" to="/login">
                            <img src="https://icons.veryicon.com/png/o/miscellaneous/domain-icons/my-account-login.png" alt="Login" />
                            </NavLink>
                        </ul>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
