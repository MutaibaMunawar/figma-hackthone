"use client";
import { Product } from "@/types/products";
import React, { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
  addToWishlist,
} from "../actions/actions";
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AuthGuard from "../components/AuthGuard";

const Cartpage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    const items = getCartItems();
    setCartItems(items);
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this item.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed.", "success");
      }
    });
  };

  const handleWishlist = (id: string) => {
    const itemToAdd = cartItems.find(item => item._id === id);
    if (itemToAdd) {
      addToWishlist(itemToAdd);
      Swal.fire("Added!", "Item added to your wishlist.", "success");
    }
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Proceed to Checkout?",
      text: "Please review your cart before checkout.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed!",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/checkout");
      }
    });
  };

  return (
    <AuthGuard>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
     
        <h1 className="text-3xl font-bold mb-4">Bag</h1>

        {cartItems.length === 0 ? (
          <div className="text-center text-lg text-gray-500">
            Your cart is empty!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left: Cart Items */}
            <div className="md:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item._id} className="flex justify-between items-center border-b pb-4">
                  <div className="flex items-center space-x-4">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        className="w-24 h-24 object-cover rounded-md"
                        alt={item.productName}
                        width={100}
                        height={100}
                      />
                    )}

                    <div>
                      <h3 className="text-lg font-semibold">{item.productName}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <p className="text-sm text-gray-500">Size: L</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">₹ {item.price}</p>

                    {/* Buttons */}
                    <div className="flex justify-end space-x-3 mt-2">
                      <button
                        onClick={() => handleWishlist(item._id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        ❤
                      </button>

                      <button
                        onClick={() => handleRemove(item._id)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Summary Section */}
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Summary</h2>

              <div className="flex justify-between text-gray-700 mb-2">
                <span>Subtotal</span>
                <span>₹ {cartItems.reduce((total, item) => total + item.price, 0)}</span>
              </div>

              <div className="flex justify-between text-gray-700 mb-4">
                <span>Estimated Delivery & Handling</span>
                <span>Free</span>
              </div>

              <hr className="border-gray-300 mb-4" />

              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>₹ {cartItems.reduce((total, item) => total + item.price, 0)}</span>
              </div>

              <button
                onClick={handleProceed}
                className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
              >
                Member Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    </AuthGuard>
  );
};

export default Cartpage;