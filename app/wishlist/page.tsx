'use client';
import { Product } from "@/types/products";
import React, { useEffect, useState } from "react";
import { getWishlistItems, removeFromWishlist, addToCart } from "../actions/actions"; // Add addToCart action
import Swal from "sweetalert2";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

  useEffect(() => {
    setWishlistItems(getWishlistItems());
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
        removeFromWishlist(id); 
        setWishlistItems(getWishlistItems()); // Update wishlist after removal
        Swal.fire("Removed!", "Item has been removed from your wishlist.", "success");
      }
    });
  };

  const handleMoveToCart = (product: Product) => {
    // Move item from wishlist to cart
    addToCart(product); // Assuming you have an addToCart function

    // Remove the item from wishlist
    removeFromWishlist(product._id); 
    setWishlistItems(getWishlistItems()); // Update wishlist after removal

    Swal.fire("Moved to Cart", `${product.productName} has been moved to the cart!`, "success");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold text-center mb-8">Your Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <div className="text-center text-lg text-gray-500">
            Your wishlist is empty!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col items-center mb-4">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.productName}
                      className="w-full h-48 object-cover rounded-md mb-4"
                      width={300}
                      height={300}
                    />
                  )}

                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.productName}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                  <div className="text-lg font-semibold text-gray-800">₹ {item.price}</div>
                </div>

                <div className="flex justify-between mt-auto">
                  <button
                    onClick={() => handleMoveToCart(item)}
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg w-full md:w-auto hover:bg-blue-700 focus:outline-none transition-all duration-200"
                  >
                    Move to Cart
                  </button>
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="text-red-500 hover:text-red-700 text-sm md:text-base w-full md:w-auto mt-2 md:mt-0"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
