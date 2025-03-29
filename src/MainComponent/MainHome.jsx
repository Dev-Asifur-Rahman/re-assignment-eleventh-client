import React, { useContext } from "react";
import { Outlet } from "react-router";
import { ApiInstance } from "../Context/apiInstance";
import { Context } from "../Context/context";
import NavBar from "../BasicComponent/NavBar";

const MainHome = () => {
  const { user } = useContext(Context);
  ApiInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  ApiInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <div>
      <div className="w-full text-center">
        <button>{user ? "logout" : "login"}</button>
      </div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainHome;
