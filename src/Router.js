
import * as React from "react";
import { createRoot } from "react-dom/client";
import HomePage from './Temp'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";



const router = createBrowserRouter([
    {
      path: "/",
      element:<HomePage />,
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);

  export default router