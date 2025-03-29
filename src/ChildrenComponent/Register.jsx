import React, { useContext, useState } from "react";
import "./../CSS/register.css";
import { Link } from "react-router";
import { Context } from "../Context/context";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const { Auth } = useContext(Context);
  const [Eye, setEye] = useState(false);
  const eye = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
  const eye_slash = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  );


  function register(e) {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;
    if (password.length < 6) {
      alert("Enter at least 6 digit");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      alert("must contain uppercase letter.");
      return;
    }

    if (!/[a-z]/.test(password)) {
      alert("must contain lowercase letter.");
      return;
    } else {
      createUserWithEmailAndPassword(Auth, email, password)
        .then((res) => {
          alert("success");
        })
        .catch((error) => {
          alert("error");
        });
    }
  }

  return (
    <div id="register-container">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        rel="stylesheet"
      />

      {/* <img
                className="background-img"
                src="https://i.pinimg.com/736x/ca/6b/0f/ca6b0f7177229f00b2ec1ea2f48385fd.jpg"
                alt="background"
              /> */}
      <section id="register-bg">
        <div className="reg-wrapper">
          <h1 className="call-to-action">Register</h1>

          <form onSubmit={register}>
            <div className="field">
              <label htmlFor="username">Username</label>
              <br />
              <i className="bx bx-user"></i>
              <input
                type="text"
                id="username"
                name="name"
                required
                placeholder="type your username"
              />
            </div>

            <div className="field">
              <label htmlFor="username">Username</label>
              <br />
              <i className="bx bx-envelope"></i>
              <input
                type="text"
                id="username"
                name="email"
                required
                placeholder="type your email"
              />
            </div>

            <div className="field">
              <label htmlFor="pwd">Password</label>
              <br />
              <div className="relative w-fit h-fit ">
                <i className="bx bx-lock-alt"></i>
                <input
                  type={Eye ? "text" : "password"}
                  id="pwd"
                  name="password"
                  required
                  placeholder="type your password"
                />
                <div
                  onClick={() => setEye(!Eye)}
                  className="absolute w-fit h-fit top-[10%] right-0"
                >
                  {Eye ? eye : eye_slash}
                </div>
              </div>
            </div>
            <Link>Forgot password?</Link>
            <button id="register-button">Register</button>
          </form>

          <div className="sign-up">
            <Link to={"/login"}>LogIn</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
