import React from "react";
import banner from "../../assets/images/banner2.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="w-full h-[500px] bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center py-16 px-8 md:px-24">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold text-gray-900 uppercase">
            a broad range of trendy eyewear
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            Perfect look with a suitable pair of glasses. Put on eyewear & put
            on positive view mode.
          </p>
          <button className="mt-8 px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 transition duration-300">
            <Link to="/products">Show Now</Link>
          </button>
        </div>
        <div className="mt-8 md:mt-0">
          <img src={banner} alt="" className="w-full max-w-sm rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
