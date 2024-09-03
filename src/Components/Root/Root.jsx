import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <div>
      {/* <div className="max-w-6xl mx-auto"> */}
      <div className="">
        <Navbar />
        <ToastContainer />
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
