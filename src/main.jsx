import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import {GlobalStyle} from "./styles/global.js";
import Home from './pages/home/home';
import Login from "./pages/login/login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    }, {
        path: "/login",
        element: <Login />,
    },]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <GlobalStyle />
      <RouterProvider router={router} />
  </React.StrictMode>,
)
