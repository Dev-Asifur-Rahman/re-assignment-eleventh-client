import React, { Children, useContext } from "react";
import { Context } from "./Context/context";
import { Navigate } from "react-router";

const PrivateRoute = ({children}) => {
  const { loading } = useContext(Context);
  if (loading) {
    return (
      <div className="w-full flex items-center justify-center border">
        <div className="loader"></div>
      </div>
    );
  }
  if(user && user.email){
    return children
  }
  return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;
