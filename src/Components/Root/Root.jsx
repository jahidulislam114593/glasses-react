import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      {/* <div className="max-w-6xl mx-auto"> */}
      <div className="">
        <Navbar />
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
