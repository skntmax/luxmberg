import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Temp from './Temp'
import router from './Router'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
     {/* <Temp /> */}

     <RouterProvider router={router} />


  </React.StrictMode>
);

