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
import toast from "react-hot-toast";
import UpdateBook from "./ChildrenComponent/UpdateBook";

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
        path: "/allbooks/:category",
        loader: ({params}) =>{
          return ApiInstance.get(`/books/${params.category}`)
        } ,
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
        path: "/borrowedbooks",
        element: (
          <PrivateRoute>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/bookDetails/:id",
        loader: ({ params }) => {
          return ApiInstance.get(`/book/${params.id}`)
            .then((response) => {
              const book =  response.data
              return book
            })
            .catch((error) => {
              toast.error("Failed to fatch.Try Again");
            });
        },
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
      {
        path:'/updateBook/:id',
          loader: ({ params }) => {
            return ApiInstance.get(`/book/${params.id}`)
              .then((response) => {
                const book =  response.data
                return book
              })
              .catch((error) => {
                toast.error("Failed to fatch.Try Again");
              });
        },
        element:<UpdateBook></UpdateBook>
      }
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
