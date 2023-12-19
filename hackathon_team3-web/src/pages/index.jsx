import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Store from "./Store/Store";
import Booking from "./Booking/Booking";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/store",
          element: <Store />,
        },
        {
          path: "/booking",
          element: <Booking />,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
