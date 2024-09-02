import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const links = (
  <>
    <li key="home">
      <NavLink to="/">Home</NavLink>
    </li>
    <li key="products">
      <NavLink to="/products">Products</NavLink>
    </li>
    <li key="about">
      <NavLink to="/about">About</NavLink>
    </li>
    <li key="contact">
      <NavLink to="/contact">Contact</NavLink>
    </li>
    <li key="blog">
      <NavLink to="/blog">Blog</NavLink>
    </li>
  </>
);

const Navbar = () => {
  const { logout, user } = useAuth();

  return (
    <div className="navbar bg-base-100 max-w-6xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            aria-expanded="false"
            aria-controls="navbar-dropdown"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            id="navbar-dropdown"
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" to="/">
          GLASSES
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={user?.photoURL || "/default-avatar.png"}
                  alt="User Avatar"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm btn-ghost">
                  {user?.displayName || "User"}
                </button>
              </li>
              <li>
                <button onClick={logout} className="btn btn-sm btn-ghost">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn btn-sm btn-ghost">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
