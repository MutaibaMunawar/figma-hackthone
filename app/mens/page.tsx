'use client'

import { client } from "@/sanity/lib/client";
import { fourFive } from "@/sanity/lib/queries"; 
import { Product } from "@/types/products";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link"; 
import { useEffect, useState } from "react";

const Mens = () => { 
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(fourFive);
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Men&apos;s Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {product.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          >
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.productName}
                width={200}
                height={200}
                className="w-full h-48 object-cover rounded-md"
              />
            )}
            <h1 className="text-lg font-semibold mt-4">{product.productName}</h1>
            <p className="text-gray-500 mt-2">${product.price}</p>

            <Link href={`/product/${product.slug.current}`}>
              <div className="text-blue-500 hover:text-blue-700 mt-2 block">
                View Details
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mens;
