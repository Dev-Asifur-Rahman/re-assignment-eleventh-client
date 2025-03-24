import React, { useContext, useState } from "react";
import { Context } from "../Context/context";
import { signOut } from "firebase/auth";


const NavBar = () => {
  const { user, Auth } = useContext(Context);
  const [Dropdown, setDropdown] = useState(false);

  function signout() {
    signOut(Auth)
      .then((res) => {
        console.log("logged out");
        navigate("/");
      })
      .catch((error) => console.log("error occured"));
  }
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
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
                <a>Item 1</a>
              </li>
              <li onClick={() => setDropdown(false)}>
                <a>Item 2</a>
              </li>
              <li onClick={() => setDropdown(false)}>
                <a>Item 3</a>
              </li>
            </ul>
          )}
        </div>
        <p className="text-3xl font-bold hidden md:inline lg:inline">DaisyUI</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button onClick={signout} className="btn">
          {user ? "SignOut" : "SignIn"}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
