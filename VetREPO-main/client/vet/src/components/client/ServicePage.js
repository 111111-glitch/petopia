// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import './ServicePage.css'; // Import the CSS file for styling

// const ServicePage = () => {
//   const { id } = useParams();
//   const [service, setService] = useState(null);
//   const [loading, setLoading] = useState(true);
  // const [cartItems, setCartItems] = useState([]);


//   useEffect(() => {
//     fetch(`/userproducts/${id}`)
//       .then(response => response.json())
//       .then(data => {
//         setService(data);
//         setLoading(false);
//       })
//       .catch(error => {
//         console.error('Error fetching service:', error);
//         setLoading(false);
//       });
//   }, [id]);

  // const handleAddToCart = (service) => {
  //   setCartItems([...cartItems, service]);
  //   console.log('Added to cart:', service);
  // };


//   if (loading) {
//     return <div className="service-page-loading">Loading...</div>;
//   }

//   if (!service) {
//     return <div className="service-page-not-found">Service not found</div>;
//   }

//   return (
//     <div className="service-page">
//       <h1 className="service-page-title">{service.name}</h1>
//       <img className="service-page-image" src={service.image_url} alt={service.name} />
//       <p className="service-page-description">{service.description}</p>
//       <p className="service-page-price">Price: ${service.price}</p>
      // <button className="service-page-add-to-cart" onClick={() => handleAddToCart(service)}>
      //   Add to Cart
      // </button>
     
//     </div>
//   );
// };

// export default ServicePage;




import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ServicePage.css'; // Import the CSS file for styles

const ServicePage = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await fetch(`/userservices/${id}`); // Assuming endpoint for services is '/userservices/${id}'
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setService(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error loading service: {error.message}</div>;

  const handleAddToCart = (service) => {
    setCartItems([...cartItems, service]);
    console.log('Added to cart:', service);
  };


  return (
    <div className="service-page">
      {service ? (
        <div className="service-card">
          <img src={service.image_url} alt={service.name} className="service-image" />
          <h1 className="service-name">{service.name}</h1>
          <p className="service-description">{service.description}</p>
          <p className="service-price">Price: ${service.price}</p>
          <button className="service-page-add-to-cart" onClick={() => handleAddToCart(service)}>
        Add to Cart
      </button>
          {/* You can include additional service-specific attributes here */}
        </div>
      ) : (
        <div className="error">Service not found</div>
      )}
    </div>
  );
};

export default ServicePage;
