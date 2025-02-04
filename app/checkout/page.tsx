"use client";

import { Product } from "@/types/products";
import React, { useEffect, useState } from "react";
import { getCartItems } from "../actions/actions";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";

const Checkout = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    address: false,
    zipCode: false,
    city: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const error = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      phone: !formValues.phone,
      address: !formValues.address,
      zipCode: !formValues.zipCode,
      city: !formValues.city,
    };
    setFormErrors(error);
    return Object.values(error).every((error) => !error);
  };

  const placeOrder = () => {
    if (validateForm()) {
      localStorage.removeItem("appliedDiscount");
      alert("Order Placed Successfully!");
    }
  };

  const handlePlaceOrder = async () => {
    const total = subTotal - discount;

    const orderData = {
      _type: "order",
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      phone: formValues.phone,
      address: formValues.address,
      zipCode: formValues.zipCode,
      city: formValues.city,
      cartItems: cartItems.map((item) => ({
        _type: "reference",
        _ref: item._id,
      })),
      total: total,
      discount: discount,
      orderData: new Date().toISOString(),
    };
    try {
      await client.create(orderData);
      localStorage.removeItem("AppliedDiscount");
    } catch (error) {
      console.error("Error placing order: ", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between p-8 bg-gray-100 min-h-screen">
      {/* Left Side: Billing Information */}
      <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Billing Information</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={formValues.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className="p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            {formErrors.firstName && (
              <p className="text-red-500 text-sm">First name is required</p>
            )}
          </div>

          <div className="w-full">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={formValues.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              className="p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            {formErrors.lastName && (
              <p className="text-red-500 text-sm">Last name is required</p>
            )}
          </div>

          <div className="w-full md:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formValues.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}
          </div>

          <div className="w-full md:col-span-2">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formValues.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            {formErrors.phone && (
              <p className="text-red-500 text-sm">Phone number is required</p>
            )}
          </div>

          <div className="w-full md:col-span-2">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              value={formValues.address}
              onChange={handleInputChange}
              placeholder="Address"
              className="p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            {formErrors.address && (
              <p className="text-red-500 text-sm">Address is required</p>
            )}
          </div>

          <div className="w-full">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              value={formValues.city}
              onChange={handleInputChange}
              placeholder="City"
              className="p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            {formErrors.city && (
              <p className="text-red-500 text-sm">City is required</p>
            )}
          </div>

          <div className="w-full">
            <label
              htmlFor="zipCode"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              value={formValues.zipCode}
              onChange={handleInputChange}
              placeholder="Zip Code"
              className="p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            {formErrors.zipCode && (
              <p className="text-red-500 text-sm">Zip code is required</p>
            )}
          </div>
        </form>
        <button
          onClick={() => {
            handlePlaceOrder();
            placeOrder();
          }}
          className="w-full mt-6 bg-black text-white py-3 rounded-md hover:bg-gray-800 focus:outline-none"
        >
          Place Order
        </button>
      </div>

      <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-lg mt-6 lg:mt-0">
        <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between border-b pb-4 mb-4"
            >
              <div className="w-20 h-20">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.productName}
                    width={80}
                    height={80}
                    className="object-cover rounded-md"
                  />
                )}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{item.productName}</h3>
                <p className="text-gray-700">₹{item.price * item.inventory}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
        <div className="mt-6">
          <p className="flex justify-between text-lg">
            <span>Subtotal:</span> <span>₹{subTotal}</span>
          </p>
          <p className="flex justify-between text-lg">
            <span>Discount:</span> <span>- ₹{discount}</span>
          </p>
          <p className="flex justify-between text-xl font-semibold">
            <span>Total:</span> <span>₹{(subTotal - discount).toFixed(2)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
