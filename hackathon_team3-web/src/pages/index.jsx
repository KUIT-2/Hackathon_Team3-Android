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
          path: "/:storeId",
          element: <Store />,
        },
        {
          path: "/booking",
          element: <Booking />,
        },
      ],
    },
  ]);

  return <RouterProvider basename={process.env.PUBLIC_URL} router={router} />;
};

export default Router;
