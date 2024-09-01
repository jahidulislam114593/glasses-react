import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const FeaturedProducts = () => {
  const allProducts = useLoaderData();
  //   console.log(products);
  const products = allProducts.slice(0, 3);
  return (
    <div className="w-full h-auto py-8 bg-[#D8E8EB]">
      <h2 className="text-3xl text-center font-bold text-gray-900 uppercase py-4">
        Featured Products
      </h2>
      <div className="flex space-x-6 justify-center items-center mt-8">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
