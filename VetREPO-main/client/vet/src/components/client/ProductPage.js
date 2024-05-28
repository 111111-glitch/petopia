import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css'; // Import the CSS file for styles

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/userproducts/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error loading product: {error.message}</div>;
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    console.log('Added to cart:', product);
  };

  return (
    <div className="product-page">
      {product ? (
        <div className="product-card">
          <img src={product.image_url} alt={product.name} className="product-image" />
          <h1 className="product-name">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: ${product.price}</p>
          <button className="product-page-add-to-cart" onClick={() => handleAddToCart(product)}>
        Add to Cart
      </button>
        </div>
      ) : (
        <div className="error">Product not found</div>
      )}
    </div>
  );
};

export default ProductPage;
