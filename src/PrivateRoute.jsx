import React, { useContext } from "react";
import { Context } from "./Context/context";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, Loading } = useContext(Context);
  if (Loading) {
    return (
      <div className="w-full flex items-center justify-center h-40">
        <div className="loader"></div>
      </div>
    );
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;
