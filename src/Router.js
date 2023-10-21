import * as React from "react";

import HomePage from './Temp'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import ProductPage from "./Components/Product";
import Aboutus from "./Components/Aboutus";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
     <HomePage />
    ),
  },
  {
    path: "product",
    element: <ProductPage />,
  },
  {
    path: "aboutus",
    element: <Aboutus />,
  },
])

export default router