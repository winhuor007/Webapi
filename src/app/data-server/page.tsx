// app/products/page.tsx
import Link from "next/link";
import React from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

// Fetch products based on the page number
const fetchProducts = async (page: number): Promise<Product[]> => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=6&skip=${(page - 1) * 6}`
  );
  const data = await res.json();
  return data.products;
};

// Server component for the product page with pagination
const ProductsPage = async ({
  searchParams,
}: {
  searchParams: { page?: string };
}) => {
  const page = parseInt(searchParams.page || "1");
  const products = await fetchProducts(page);

  return (
    <div>
      <h1>Product List</h1>
      <ul className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <li key={product.id} className="border p-4">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p>{product.description}</p>
            <p className="text-green-600 font-semibold">
              Price: ${product.price}
            </p>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-4">
        {Array.from({ length: 5 }, (_, index) => (
          <Link
            key={index}
            href={`/products?page=${index + 1}`}
            className={`mx-2 px-4 py-2 border ${
              page === index + 1 ? "bg-blue-500 text-white" : ""
            }`}
          >
            {index + 1}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
