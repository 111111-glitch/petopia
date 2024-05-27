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
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <ul className="navbar-nav">
                        <ul className="nav-item">
                            <Link to="/adminHome" className="nav-link">Admin Home</Link>
                        </ul>
                        <ul className="nav-item">
                            <Link to="/productPost" className="nav-link">Product Post</Link>
                        </ul>
                        <ul className="nav-item">
                            <Link to="/ServicePost" className="nav-link">Service Post</Link>
                        </ul>
                        <ul className="nav-item">
                            <Link to="/deleteProduct" className="nav-link">Delete Product</Link>
                        </ul>
                        <ul className="nav-item">
                            <Link to="/deleteService" className="nav-link">Delete Service</Link>
                        </ul>
                        <ul className="nav-item">
                            <Link to="/history" className="nav-link">History</Link>
                        </ul>
                        <ul className="nav-item">
                            <Link to="/patchProduct" className="nav-link">Update Product</Link>
                        </ul>
                        <ul className="nav-item">
                            <Link to="/patchService" className="nav-link">Update Service</Link>
                        </ul>
                    </ul>
                    {role ? (
                        <ul className="nav-item bottom-icon">
                            <button className="nav-link" onClick={handleAdminLogout}>
                                <img src="https://static-00.iconduck.com/assets.00/log-out-icon-2048x2048-cru8zabe.png" alt="Logout" />
                            </button>
                        </ul>
                    ) : (
                        <ul className="nav-item bottom-icon">
                            <NavLink className="nav-link" to="/login">
                                <img src="https://icons.veryicon.com/png/o/miscellaneous/domain-icons/my-account-login.png" alt="Login" />
                            </NavLink>
                        </ul>
                    )}

                </div>
            </nav>
        </div>
    );
}

export default AdminNavBar;
