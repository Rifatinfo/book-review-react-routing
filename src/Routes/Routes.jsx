
import {
    createBrowserRouter,
  } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home";
import BookDetails from "../Components/Books/BookDetails";
import ListedBooks from "../Components/ListedBooks/ListedBooks";

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
          path: "/listed-book",
          element: <ListedBooks/>,
          loader : () => fetch("./booksData.json")
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