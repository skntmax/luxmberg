
import * as React from "react";
import { createRoot } from "react-dom/client";
import HomePage from './Temp'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import Signup from "./Components/Signup";
const router = createBrowserRouter([
    {
      path: "/",
      element:<Login />,
    },
    {
      path: "/dashboard",
      element:<Dashboard />,
    },
    {
      path: "/signup",
      element:<Signup />,
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);

  export default router