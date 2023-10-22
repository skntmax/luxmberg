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
import AboutUs from "./Components/Aboutus";
import Contact from "./Components/Contact";

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
    path: "about",
    element: <AboutUs />,
  },
  {
    path: "contact",
    element: <Contact />,
  },

])

export default router