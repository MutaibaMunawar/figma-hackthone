import React from 'react';
import { Link } from 'react-router-dom'; 
import Image from 'next/image';

const products = [
  {
    name: "Nike Dri-FIT ADV TechKnit Ultra",
    description: "Men's Short Sleeve Running Top",
    price: "₹ 3,895",
    imageUrl: "/shop men1.png", 
    link: "/New-men-shop", 
  },
  {
    name: "Nike Dri-FIT Challenger",
    description: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
    price: "₹ 2,495",
    imageUrl: "/shop men2.png",
    link: "/New-men-shop", 
  },
  {
    name: "Nike Dri-FIT ADV Run Division",
    description: "Women's Long Sleeve Running Top",
    price: "₹ 5,295",
    imageUrl: "/women 1.png",
    link: "/New-women-shop", 
  },
  {
    name: "Nike Fast",
    description: "Women's Mid-Rise Running Leggings with Pockets",
    price: "₹ 3,795",
    imageUrl: "/women 2.png",
    link: "/New-women-shop", 
  },
];

export default function GearUp() {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Gear Up</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-4 shadow-md rounded-lg">
            {/* Wrap the image with Link to make it clickable */}
            <Link to={product.link}>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={100}
                height={60}
                className="w-full h-60 object-cover rounded-t-md"
              />
            </Link>
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-500 mt-1">{product.description}</p>
              <p className="text-lg font-bold mt-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
