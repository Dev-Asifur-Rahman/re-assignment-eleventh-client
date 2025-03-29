import { createBrowserRouter } from "react-router";
import MainHome from "./MainComponent/MainHome";
import Error from "./MainComponent/Error";
import Home from "./ChildrenComponent/Home";
import Login from "./ChildrenComponent/Login";
import Register from "./ChildrenComponent/Register";
 
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
            }
        ]
    },
    {
        path:'*',
        element:<Error></Error>
    }
])