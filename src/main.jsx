import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom";

import './index.css'
import Root from "../routes/root";
import ErrorPage from "../routes/error-page";
import Contact from "../routes/contact";
import Home from "../routes/home";
import Resume from "../routes/resume";
import Portfolio from "../routes/portfoliopage";
import CardOne from "../routes/cardone";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "", // Empty string for default route
        element: <Home />, // Your default component
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "portfolio/card-one",
        element: <CardOne />,
      },
      // Add more routes as needed
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
