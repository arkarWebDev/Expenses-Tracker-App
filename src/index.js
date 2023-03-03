import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashBoard, { DashboardLoader } from "./pages/DashBoard";
import Missing from "./pages/Missing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
    loader: DashboardLoader,
    errorElement: <Missing />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
