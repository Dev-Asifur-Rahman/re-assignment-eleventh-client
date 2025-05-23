import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import NavBar from "../BasicComponent/NavBar";
import Footer from "../BasicComponent/Footer";
import { ApiInstance } from "../Context/apiInstance";
import { signOut } from "firebase/auth";
import { Auth } from "../Firebase/firebase";
import { lottieError } from "../lottie/lottie";

const MainHome = () => {
  const logOut = () => {
    return signOut(Auth);
  };

  const navigate = useNavigate();
  useEffect(() => {
    const reqInterceptor = ApiInstance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const resInterceptor = ApiInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
          await logOut().then((res) => {
            navigate("/login");
            lottieError("You have been logged out");
          });
        }
        return Promise.reject(error);
      }
    );
    return () => {
      ApiInstance.interceptors.request.eject(reqInterceptor);
      ApiInstance.interceptors.response.eject(resInterceptor);
    };
  }, []);

  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainHome;
