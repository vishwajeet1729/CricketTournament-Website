import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LoadingSpiner from "../../loader/LoadingSpiner";
import logof from "../../assets/logo/logof.gif";
import RainbowButtons from "../../assets/button/RainbowButtons";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [loader, setLoader] = useState(true);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");

    document.querySelector("html").setAttribute("data-theme", localTheme);

    const timer = setTimeout(() => {
      setLoader(false); // Set loader to false after 1 second
    }, 4000);

    return () => clearTimeout(timer);
  }, [theme]);



  if (loader) {
    return <LoadingSpiner></LoadingSpiner>;
  }

  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 z-50 h-2 rounded-2xl w-screen-auto	    ">
        <div className="navbar-start">
          <div className="dropdown z-50">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  className="focus:bg-transparent hover:bg-transparent hover:text-blue-400"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="focus:bg-transparent hover:bg-transparent hover:text-blue-400"
                  to="/instructor"
                >
                  Collabrators
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="focus:bg-transparent hover:bg-transparent hover:text-blue-400"
                  to="/classes"
                >
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/">
            <div className=" hidden md:flex ">
              <div className="w-20  ">
                <img src={logof} />
              </div>
            </div>
          </Link>
          <RainbowButtons>
            <Link to="/" className=" normal-case text-xl">
              VIRATIAN
            </Link>
          </RainbowButtons>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <NavLink
                className="focus:bg-transparent hover:bg-transparent hover:text-blue-400"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="focus:bg-transparent hover:bg-transparent hover:text-blue-400"
                to="/instructor"
              >
                Collabrators
              </NavLink>
            </li>
            <li>
              <NavLink
                className="focus:bg-transparent hover:bg-transparent hover:text-blue-400"
                to="/classes"
              >
                Register
              </NavLink>
            </li>
            <li>
              <Link
                className="focus:bg-transparent hover:bg-transparent hover:text-blue-400"
                to="/#steps"
              >
                Steps
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* toggle dark mode */}
          <label className="swap swap-rotate md:px-4">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "light" ? false : true}
            />

            {/* Cricket Ball Icon */}
            <svg
              className="swap-on fill-current w-16 h-16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" fill="#D32F2F" />
              <path
                d="M8,12a4,4,0,0,1,8,0"
                stroke="#fff"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M8,10a4,4,0,0,1,8,0"
                stroke="#fff"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M8,14a4,4,0,0,1,8,0"
                stroke="#fff"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>

            {/* Cricket Bat Icon */}
            <svg
              className="swap-off fill-current w-16 h-16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M19.07,2.93,13,9,14.46,10.46l6.07-6.07a1,1,0,0,0,0-1.41l-1-1A1,1,0,0,0,19.07,2.93ZM10.87,12.46,2,21.33V22H2.67l8.87-8.87Z"
                fill="#8D6E63"
              />
              <rect x="2" y="18" width="4" height="2" fill="#795548" />
            </svg>
          </label>
        </div>
      </div>
    </>
  );
};

export default Navbar;
