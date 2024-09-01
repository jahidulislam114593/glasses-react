import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-7xl font-extrabold text-indigo-600">404</h2>
      <div className="mt-4">
        <h2 className="text-4xl font-semibold text-gray-700">Page Not Found</h2>
        <p className="mt-2 text-lg text-gray-500">
          Sorry, the page you're looking for doesn't exist.
        </p>
      </div>
      <button
        className="mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
        onClick={() => (window.location.href = "/")} // Redirects to the homepage
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFound;
