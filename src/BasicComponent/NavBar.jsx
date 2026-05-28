import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/context";
import { signOut } from "firebase/auth";
import { Link, NavLink, useLocation, useNavigate } from "react-router";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import personIcon from "../../public/images/personicon.svg";
import ThemeController from "./ThemeController";

const NavBar = () => {
  const { user, Auth } = useContext(Context);
  const [Dropdown, setDropdown] = useState(false);
  const login = useNavigate();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  function signout() {
    signOut(Auth).then((res) => {
      navigate("/");
    });
  }
  return (
    location.pathname === "/" && (
      <div className="navbar">
        <div className="navbar-start">
          <div
            className="dropdown"
            tabIndex={0}
            onClick={() => setDropdown(!Dropdown)}
          >
            <div className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            {Dropdown && (
              <ul
                tabIndex={0}
                className="menu menu-sm bg-base-100 dropdown-content rounded-box z-1 mt-3 w-40 p-2 shadow"
              >
                <li onClick={() => setDropdown(false)}>
                  <Link>Home</Link>
                </li>

                <li onClick={() => setDropdown(false)}>
                  <Link to={`/allbooks/all`}>All Books</Link>
                </li>

                {user && (
                  <li onClick={() => setDropdown(false)}>
                    <Link to={"/addbook"}>Add Book</Link>
                  </li>
                )}
                {user && (
                  <li onClick={() => setDropdown(false)}>
                    <Link to={"/borrowedbooks"}>Borrowed</Link>
                  </li>
                )}
                {user ? (
                  <li onclick={signout}>
                    <a href="#">SignOut</a>
                  </li>
                ) : (
                  <li onClick={() => login("/login")}>
                    <a href="#">SignIn</a>
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
        <div className="navbar-center">
          <p
            onClick={() => navigate("/")}
            className="text-3xl  font-extrabold text-library cursor-pointer"
          >
            LitHub
          </p>
        </div>
        {/* completed */}
        <div className="navbar-end">
          {user && (
            <img
              id="image_tooltip"
              src={user?.photoURL ? user?.photoURL : personIcon}
              className="mx-2 h-[40px] w-[40px] rounded-full hidden md:inline"
              alt="image"
            />
          )}
          <Tooltip
            anchorSelect="#image_tooltip"
            content={user?.displayName ? user?.displayName : "Unknown"}
            place="left"
          ></Tooltip>
          <ThemeController></ThemeController>
        </div>
      </div>
    )
  );
};

export default NavBar;
