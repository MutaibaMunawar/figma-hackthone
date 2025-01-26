'use client'

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { addToCart } from "@/app/actions/actions";  // Import addToCart function
import swal from "sweetalert2";

// Function to fetch the product details by slug
async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0] {
      _id,
      productName,
      _type,
      image,
      price,
      description
    }`,
    { slug }
  );
}

interface ProductPageProps {
  params: { slug: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  // If product is not found, display a message
  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold">Product not found</h1>
      </div>
    );
  }

  // Handle the Add to Cart click event
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product!); // Add product to cart
    swal.fire({
      position: "center-start",
      icon: "success",
      title: `${product.productName} Added successfully!`,
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image).url()}
              alt={product.productName}
              width={600}
              height={550}
              className="rounded-lg pl-[90px]"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold pt-11">{product.productName}</h1>
          <p className="text-2xl font-sans">${product.price}</p>
          <p className="text-lg font-sans">{product.description}</p>

          {/* Add to Cart Button */}
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold
            py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform
            duration-200 ease-in-out mt-4"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
