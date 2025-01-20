
import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots/>,
      children: [
        {
          path: "contacts/:contactId",
          element: <Home/>,
        },
      ],
    },
  ]);

export default router