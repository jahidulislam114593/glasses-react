import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const products = useLoaderData();

  return (
    <div className=" w-full h-auto py-8 bg-[#D8E8EB]">
      <h2 className="text-3xl text-center font-bold text-gray-900 uppercase py-4">
        Products
      </h2>
      <div className="grid grid-cols-3 gap-12 max-w-6xl mx-auto">
        {products.map((product) => (
          <Product product={product} key={product.id}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
