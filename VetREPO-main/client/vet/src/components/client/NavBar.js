import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './NavBar.css';

const Navbar = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';
    const [cartItems, setCartItems] = useState([]);
    const [role, setRole] = useState(null);

    useEffect(() => {
        const storedRole = localStorage.getItem('role');
        setRole(storedRole);
        console.log('User is logged in:', storedRole);
        console.log('User is logged in');
        // Fetch or set cart items here
        setCartItems([]);
    }, []);

    const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    const handleLogout = async () => {
        try {
            const response = await fetch('/userLogout', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}` // Include the access token in the request headers
                }
            });
            if (response.ok) {
                // Clear local storage and redirect to login page
                localStorage.removeItem('token');
                localStorage.removeItem('role');
                window.location.href = '/login';
            } else {
                console.error('Logout failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error occurred during logout:', error);
        }
    };

    if (isLoginPage || isRegisterPage || role === 'admin') {
        return null;
    }

    return (
        <nav className="navbar">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                        <NavLink className="navbar-brand" to="#">
                            <b>Petopia</b>
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
                                Home
                            </NavLink>
                        </ul>

                        <ul className="nav-item">
                            <NavLink className="nav-link" to="/products">
                                Products
                            </NavLink>
                        </ul>

                        <ul className="nav-item">
                            <NavLink className="nav-link" to="/services">
                                Services
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
                            <div className="cart-icon">
                                <NavLink className="nav-link" to="/cart">
                                    <img src="https://iconape.com/wp-content/png_logo_vector/shopping-cart.png" alt="Cart" />
                                    {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
                                </NavLink>
                            </div>
                        </ul>

                        {role ? (
    // If role has a value (user is logged in), render the logout icon
                        <ul className="nav-item">
                            <NavLink className="nav-link" to="/login">
                                <img src="https://static-00.iconduck.com/assets.00/log-out-icon-2048x2048-cru8zabe.png" alt="Logout" />
                            </NavLink>
                        </ul>
                    ) : (
                        // If role is empty (user is not logged in), render the login icon
                        <ul className="nav-item">
                            <NavLink className="nav-link" to="/login">
                                <img src="https://icons.veryicon.com/png/o/miscellaneous/domain-icons/my-account-login.png" alt="Login" />
                            </NavLink>
                        </ul>
                    )}

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
