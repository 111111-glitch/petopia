import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './AdminNavBar.css';

function AdminNavBar() {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';
    const [role, setRole] = useState(null);

    useEffect(() => {
        const storedRole = localStorage.getItem('role');
        setRole(storedRole);
        console.log('User is logged in:', storedRole);
    }, []);

    if (isLoginPage || isRegisterPage || role === 'client') {
        return null;
    }

    const handleAdminLogout = async () => {
        try {
            const response = await fetch('/adminLogout', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (response.ok) {
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

    return (
        <div className="sidebar">
            <nav className="admin-navbar">
                <div className="admin-navbar_container">
                    <ul className="admin-navbar_list">
                        <ul className="admin-navbar__item">
                            <Link to="/adminHome" className="admin-navbar_link">Admin Home</Link>
                        </ul>
                        <ul className="admin-navbar__item">
                            <Link to="/productPost" className="admin-navbar_link">Product Post</Link>
                        </ul>
                        <ul className="admin-navbar__item">
                            <Link to="/ServicePost" className="admin-navbar_link">Service Post</Link>
                        </ul>
                        <ul className="admin-navbar__item">
                            <Link to="/deleteProduct" className="admin-navbar_link">Delete Product</Link>
                        </ul>
                        <ul className="admin-navbar__item">
                            <Link to="/deleteService" className="admin-navbar_link">Delete Service</Link>
                        </ul>
                        <ul className="admin-navbar__item">
                            <Link to="/history" className="admin-navbar_link">History</Link>
                        </ul>
                        <ul className="admin-navbar__item">
                            <Link to="/patchProduct" className="admin-navbar_link">Update Product</Link>
                        </ul>
                        <ul className="admin-navbar__item">
                            <Link to="/patchService" className="admin-navbar_link">Update Service</Link>
                        </ul>
                    </ul>
                    {role ? (
                        <ul className="admin-navbar_list admin-navbar__list--bottom">
                            <li className="admin-navbar__item">
                                <button className="admin-navbar_link" onClick={handleAdminLogout} to='/login'>
                                    <img src="https://static-00.iconduck.com/assets.00/log-out-icon-2048x2048-cru8zabe.png" alt="Logout" />
                                </button>
                            </li>
                        </ul>
                    ) : (
                        <ul className="admin-navbar_list admin-navbar__list--bottom">
                            <li className="admin-navbar__item">
                                <NavLink className="admin-navbar__link" to="/login">
                                    <img src="https://icons.veryicon.com/png/o/miscellaneous/domain-icons/my-account-login.png" alt="Login" />
                                </NavLink>
                            </li>
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default AdminNavBar;
