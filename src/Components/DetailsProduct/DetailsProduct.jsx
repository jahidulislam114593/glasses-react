import React from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const DetailsProduct = () => {
  const { id } = useParams();
  const product = useLoaderData();

  return (
    <div className="w-full h-auto py-8 bg-[#D8E8EB]">
      <h2 className="text-3xl text-center font-bold text-gray-900 uppercase py-6">
        Products
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="bg-white rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className="max-w-md md:max-w-lg object-cover"
          />
        </div>
        <div className="md:ml-8">
          <h2 className="text-3xl text-center font-bold text-gray-900 uppercase py-4">
            {product.name}
          </h2>
          <p className="text-2xl font-semibold text-gray-900">
            {product.price}
          </p>
          <p className="text-blue-800">In stock</p>
          <div className="mt-4">
            <label className="block text-gray-700 font-bold mb-2">
              Description:
            </label>
            <p className="text-gray-500">{product.description}</p>
          </div>
          <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
