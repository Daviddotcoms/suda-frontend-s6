import { createBrowserRouter, Navigate } from "react-router";

import { HomePage } from "../pages/HomePage";
import { ErrorPage } from "../pages/ErrorPage";
import { UserPage } from "../pages/UserPage";
import { App } from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      { path: "", element: <HomePage /> },
      {
        path: "classmates/:id",
        element: <UserPage />,
        errorElement: <ErrorPage />,
      },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);
