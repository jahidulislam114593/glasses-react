import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  //   console.log(product);
  const { name, image, price, description, id } = product;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="bg-white">
        <img src={image} alt="" />
      </figure>
      <div className="card-body bg-[#D8E8EB] ">
        <h2 className="card-title text-black">{name}</h2>
        <small className="text-black">{description}</small>
        <div className="card-actions justify-end">
          {/* `/user/${id}` */}
          <button className="btn btn-primary text-white">
            <Link to={`/products/${id}`}>{price}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
