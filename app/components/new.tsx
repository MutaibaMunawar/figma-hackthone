"use client";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { allProduct, four } from "@/sanity/lib/queries";
import { Product } from "@/types/products";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";

const categories = [
  "Shoes",
  "Sports Bras",
  "Tops & T-Shirts",
  "Hoodies & Sweatshirts",
  "Jackets",
  "Trousers & Tights",
  "Shorts",
  "Tracksuits",
  "Jumpsuits & Rompers",
  "Skirts & Dresses",
  "Socks",
  "Accessories & Equipment",
];

const ProductPage = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct: Product[] = await client.fetch(allProduct);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    }
    fetchProduct();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 p-4 bg-white shadow">
        <h2 className="text-lg font-bold mb-4">New (500)</h2>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li
              key={index}
              className="text-gray-700 hover:text-black cursor-pointer"
            >
              {category}
            </li>
          ))}
        </ul>
      </aside>

      {/* Product Grid */}
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">New</h1>
          <div className="space-x-4">
            <button className="text-gray-600 hover:text-black">
              Hide Filters
            </button>
            <button className="text-gray-600 hover:text-black">Sort By</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {product.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
            >
              <Link
                href={
                  product && product.slug && product.slug.current
                    ? 
                    `/product/${product.slug.current}`
                    : "#"
                }
              >
                {product.image && (
                  <Image
                    src={urlFor(product.image).url() || "/fallback-image.jpg"}
                    alt={product.productName || "Product Image"}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-md"
                  />
                )}
                <h1 className="text-lg font-semibold mt-4">
                  {product.productName}
                </h1>
                <p className="text-gray-500 mt-2">${product.price}</p>
                <p className="text-gray-600 mt-1 font-normal ">${product.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
