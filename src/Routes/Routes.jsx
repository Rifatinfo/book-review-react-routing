
import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home";
import BookDetails from "../Components/Books/BookDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Roots/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/book/:bookId",
          element: <BookDetails/>,
          loader : () => fetch("./booksData.json")
        },
      ],
    },
  ]);

export default router