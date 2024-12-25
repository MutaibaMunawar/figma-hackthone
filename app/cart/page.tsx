import React from 'react';
import Image from 'next/image';

const Cart = () => {
  const items = [
    {
      name: "Nike Dri-FIT ADV TechKnit Ultra",
      description: "Men's Short-Sleeve Running Top",
      color: "Ashen Slate/Cobalt Bliss",
      size: "L",
      price: 3895,
      quantity: 1,
      image: "/path/to/top-image.jpg", // Replace with actual image path
    },
    {
      name: "Nike Air Max 97 SE",
      description: "Men's Shoes",
      color: "Flat Pewter/Light Bone/Black/White",
      size: 8,
      price: 16995,
      quantity: 1,
      image: "/path/to/shoes-image.jpg", // Replace with actual image path
    },
  ];

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h2>Shopping Cart</h2>
      <div>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
              borderBottom: '1px solid #ddd',
              paddingBottom: '10px',
            }}
          >
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <div style={{ flex: 1, marginLeft: '20px' }}>
              <h3 style={{ margin: '0 0 10px 0' }}>{item.name}</h3>
              <p style={{ margin: '0 0 5px 0' }}>{item.description}</p>
              <p style={{ margin: '0 0 5px 0', color: '#555' }}>Color: {item.color}</p>
              <p style={{ margin: '0 0 5px 0', color: '#555' }}>Size: {item.size}</p>
              <p style={{ margin: '0' }}>Quantity: {item.quantity}</p>
            </div>
            <p style={{ fontWeight: 'bold' }}>₹ {item.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', textAlign: 'right' }}>
        <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Subtotal: ₹ {subtotal.toLocaleString()}</p>
        <p>Estimated Delivery & Handling: Free</p>
        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Total: ₹ {subtotal.toLocaleString()}</p>
        <button
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Member Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;