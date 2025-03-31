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
 
export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainHome></MainHome>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/allbooks',
                element:<PrivateRoute><AllBooks></AllBooks></PrivateRoute>
            },
            {
                path:'/addbook',
                element:<PrivateRoute><AddBook></AddBook></PrivateRoute>
            },
            {
                path:'/borrowedbooks',
                element:<PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
            }
        ]
    },
    {
        path:'*',
        element:<Error></Error>
    }
])