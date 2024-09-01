import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Blog from "./Components/Blog/Blog";
import NotFound from "./Components/NotFound/NotFound";
import DetailsProduct from "./Components/DetailsProduct/DetailsProduct";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import FirebaseProvider from "./Components/FirebaseProvider/FirebaseProvider";

const url =
  "https://my-json-server.typicode.com/faarhaan10/react-sunglasses/sunglasses";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(url),
      },
      {
        path: "/products",
        element: <Products />,
        loader: () => fetch(url),
      },
      {
        path: "/products/:id",
        element: <DetailsProduct />,
        loader: ({ params }) => fetch(`${url}/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </StrictMode>
);
