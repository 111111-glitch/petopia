import React, { useState, useEffect } from 'react';
import './Services.css';

const Services = ({ addToCart }) => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [displayOption, setDisplayOption] = useState('Default');

  useEffect(() => {
    fetch('/userproducts')
      .then(response => response.json())
      .then(data => {
        const filteredServices = data.filter(item => item.type === 'service');
        setServices(filteredServices);
      });
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleAddToCart = async (service) => {
    try {
      const response = await fetch('/userCart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${localStorage.getItem('token')}` // Assuming JWT is stored in localStorage
        },
        body: JSON.stringify({ product_id: service.id, quantity: 1 }),
      });

      if (response.ok) {
        const cartItem = await response.json();
        addToCart(cartItem);
      } else {
        console.error('Failed to add item to cart');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDisplay = (event) => {
    const option = event.target.value;
    setDisplayOption(option);
    let sortedServices = [...services];

    switch (option) {
      case 'Title':
        sortedServices.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Price-low':
        sortedServices.sort((a, b) => a.price - b.price);
        break;
      case 'Price-high':
        sortedServices.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setServices(sortedServices);
  };

  return (
    <div>
      <h2>DISPLAY VIEW</h2>
      <select value={displayOption} onChange={handleDisplay}>
        <option value="Default">Default Display</option>
        <option value="Title">Display By Name</option>
        <option value="Price-low"> By Price: low to high</option>
        <option value="Price-high">By Price: high to low</option>
      </select>
      <div className="services-container">
        {services.map((service) => (
          <div key={service.id}>
            <div onClick={() => handleServiceClick(service)}>
              <img src={service.image_url} alt={service.name} />
              <h3>{service.name}</h3>
              <p>Price: ksh{service.price}</p>
              <p>{service.description}</p>
            </div>
            {selectedService && selectedService.id === service.id && (
              <div>
                <p>{service.description}</p>
                <button onClick={() => handleAddToCart(service)}>Add to Cart</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
