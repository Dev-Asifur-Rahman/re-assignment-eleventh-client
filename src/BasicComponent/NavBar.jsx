import React, { useContext, useState } from "react";
import { Context } from "../Context/context";
import { signOut } from "firebase/auth";
import { Link, NavLink, useNavigate } from "react-router";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import personIcon from "../../public/images/personicon.svg";

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
    <div className="w-full flex items-center px-2 h-16 bg-[#94ff95] shadow-sm ">
      <div className="navbar-start">
        {/* dropdown */}
        <div
          className="dropdown"
          tabIndex={0}
          onClick={() => setDropdown(!Dropdown)}
        >
          <div className="btn btn-ghost lg:hidden">
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
              {/* 2. Added onClick to each <li> to close the dropdown */}
              <li onClick={() => setDropdown(false)}>
                <Link>Home</Link>
              </li>
              {user && (
                <li onClick={() => setDropdown(false)}>
                  <Link to={`/allbooks/all?email=${user?.email}`}>All Books</Link>
                </li>
              )}
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
            </ul>
          )}
        </div>
        <p className="text-3xl font-extrabold hidden md:inline lg:inline text-white ">
          LitHub
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul id="navActive" className="flex items-center gap-2">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          {user && (
            <li>
              <NavLink to={`/allbooks/all?email=${user?.email}`}>All Books</NavLink>
            </li>
          )}

          {user && (
            <li>
              <NavLink to={"/addbook"}>Add Book</NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink to={"/borrowedbooks"}>Borrowed</NavLink>
            </li>
          )}
        </ul>
      </div>
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
  );
};

export default NavBar;
