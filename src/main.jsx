import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from './pages/home/home'
import Login from "./pages/login/login.jsx";

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
      <RouterProvider router={router} />
  </React.StrictMode>,
)
