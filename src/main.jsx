import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//imported Directly React Router website
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
// End here
import './index.css'
//Your Router folder Here
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home/Home/Home';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Authentication/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      }
    ]
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
