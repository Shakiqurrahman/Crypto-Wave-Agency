import { createBrowserRouter } from "react-router-dom";
import HomePage from '../pages/HomePage'
import ErrorPage from "../pages/ErrorPage";
import Layout from "./layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/events",
        element: <div>Hello From Event Page</div>,
      },
      {
        path: "/about",
        element: <div>Hello From About Page</div>,
      },
      {
        path: "/contact",
        element: <div>Hello From Contact Page</div>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
