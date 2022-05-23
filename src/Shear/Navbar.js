import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  const munus = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/blogs"}>Blogs</Link>
      </li>
      <li>
        <Link to={"/review"}>Review</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
      {user && (
        <li>
          <Link to={"/deashbord"}> Dashboard</Link>
        </li>
      )}
      <li>
        {user ? (
          <button onClick={logout} className="btn btn-ghost">
            SIGN OUT
          </button>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            {munus}
          </ul>
        </div>
        <a className="text-xl normal-case btn btn-ghost">
          <Link to="/"> Electric pars</Link>
        </a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="p-0 menu menu-horizontal">{munus}</ul>
      </div>
      <div className="navbar-end">
        <label
          htmlFor="dashbord-sidebar"
          tabIndex="0"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
