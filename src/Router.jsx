import { createBrowserRouter } from "react-router";
import MainHome from "./MainComponent/MainHome";
import Error from "./MainComponent/Error";
import Home from "./ChildrenComponent/Home";
import Login from "./ChildrenComponent/Login";
import Register from "./ChildrenComponent/Register";
import PrivateRoute from "./PrivateRoute";
import AllBooks from "./ChildrenComponent/AllBooks";
import AddBook from "./ChildrenComponent/AddBook";
import BorrowedBooks from "./ChildrenComponent/BorrowedBooks";
import Details from "./ChildrenComponent/Details";
import { ApiInstance } from "./Context/apiInstance";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainHome></MainHome>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allbooks",
        loader : ()=> ApiInstance.get('/books'),
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/addbook",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/borrowedooks",
        element: (
          <PrivateRoute>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/bookDetails/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
