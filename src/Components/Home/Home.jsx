import React from "react";
import Banner from "../Banner/Banner";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  //   const products = useLoaderData();
  // //   console.log(products);
  return (
    <div>
      <Banner />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
