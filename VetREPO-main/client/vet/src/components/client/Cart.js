import React, { useState, useEffect, useContext } from 'react';
import './Cart.css';
import { cartContext } from '../context/Context';
import { NavLink } from 'react-router-dom';

function Cart() {
    const globalState = useContext(cartContext);
    const state = globalState.state;
    const dispatch = globalState.dispatch;

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const fetchCartItems = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://127.0.0.1:5555/userCart', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    dispatch({ type: 'SET_CART', payload: data.cart_items });
                } else {
                    setError('Failed to fetch cart items');
                }
            } catch (error) {
                setError('An error occurred while fetching cart items');
            } finally {
                setLoading(false);
            }
        };
        fetchCartItems();
    }, [dispatch]);

    const total = state.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);

    const handlePlaceOrder = async () => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const res = await fetch('http://127.0.0.1:5555/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    total: total,
                    items: state.map(item => ({ id: item.id, quantity: item.quantity })),
                }),
            });

            if (res.ok) {
                setSuccess(true);
                dispatch({ type: 'CLEAR_CART' });
            } else {
                setError('Failed to place order');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred while processing your request');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="client-cart-page">
            {state.length === 0 ? (
                <div className="empty-cart">
                    <h2>Your cart is empty</h2>
                    <img src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/media/99db7af8c3d839dd65017f76ae434785.gif" alt="Empty Cart" />
                </div>            
            ) : (
                <>
                    <h2>Shopping Cart</h2>
                    <div className="client-cart">
                        <div className="client-cart-titles">
                            <h4>Product</h4>
                            <h4>Price</h4>
                            <h4>Quantity</h4>
                            <h4>Total</h4>
                        </div>
                        {state.map((item, index) => (
                            <div className="client-cart-card" key={index}>
                                <div className="product-details">
                                    <img src={item.image_url} alt={item.name} />
                                    <div className="product-name">
                                        <p>{item.name}</p>
                                        <button onClick={() => dispatch({ type: 'REMOVE', payload: item })}>Remove</button>
                                    </div>   
                                </div>
                                <p>${item.price}</p>
                                <div className="quantity">
                                    <button 
                                        onClick={() => {
                                            if (item.quantity > 1) {
                                                dispatch({ type: 'DECREASE', payload: item });
                                            } else {
                                                dispatch({ type: 'REMOVE', payload: item });
                                            }
                                        }}
                                        disabled={item.quantity <= 1}
                                    >-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => dispatch({ type: 'INCREASE', payload: item })}>+</button>
                                </div>
                                <p className='total-price'>${item.quantity * item.price}</p>
                            </div>
                        ))}
                        <div className="total">
                            <h4>Subtotal</h4>
                            <h4>${total}</h4>
                        </div>
                        <div className="checkout-button">
                            <button className='button' onClick={handlePlaceOrder} disabled={loading}>
                                {loading ? 'Processing...' : 'Checkout'}
                            </button>
                            {error && <p className="error">{error}</p>}
                            {success && <p className="success">Order placed successfully!</p>}
                        </div>
                        <div className="continue-shopping">
                            <NavLink className="client-nav-link" to='/client/products'> Continue Shopping</NavLink>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
