import React, { useContext, useState } from "react";
import { Context } from "../Context/context";
import { signOut } from "firebase/auth";
import { Link, NavLink, useNavigate } from "react-router";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import personIcon from "../../public/images/personicon.svg";
import ThemeController from "./ThemeController";

const NavBar = () => {
  const { user, Auth } = useContext(Context);
  const [Dropdown, setDropdown] = useState(false);
  const login = useNavigate();

  function signout() {
    signOut(Auth).then((res) => {
      navigate("/");
    });
  }
  return (
    <section>
      <div className="w-full flex items-center lg:px-6 md:px-6 px-3 h-16">
        
        
        <div className="navbar-end">
          

          {user && (
            <img
              id="image_tooltip"
              src={user?.photoURL ? user?.photoURL : personIcon}
              className="mx-2 h-[40px] w-[40px] rounded-full "
              alt="image"
            />
          )}
          <Tooltip
            anchorSelect="#image_tooltip"
            content={user?.displayName ? user?.displayName : "Unknown"}
            place="left"
          ></Tooltip>
          {user ? (
            <button onClick={signout} className="btn-hover color-5">
              SignOut
            </button>
          ) : (
            <button
              onClick={() => {
                login("/login");
              }}
              className="btn-hover color-5"
            >
              SignIn
            </button>
          )}
        </div>
      </div>
      <div className="navbar bg-base-100 shadow-sm">
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
          <p className="text-3xl  font-extrabold text-[#30d787] ">LitHub</p>
        </div>
        {/* completed */}
        <div className="navbar-end">
          <ThemeController></ThemeController>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
