'use client'

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Product } from "@/types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { addToCart } from "@/app/actions/actions";  
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
        <div className="flex flex-col gap-4 p-6">

  <h1 className="text-4xl font-bold">{product.productName}</h1>

  <p className="text-xl font-semibold">₹ {product.price}</p>


  <p className="text-base text-gray-600">{product.description}</p>


  <button
    className="bg-black text-white font-semibold py-2 px-6 rounded-md shadow-md 
    hover:bg-gray-800 transition-all duration-200"
    onClick={handleAddToCart}
  >
    Add To Cart
  </button>
</div>
      </div>
    </div>
  );
}
