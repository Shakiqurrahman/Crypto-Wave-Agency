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
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
