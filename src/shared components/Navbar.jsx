import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { user, logout, setRegistered } = useAuth();
  const [dark, setDark] = useState(false);
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/courses"}>Courses</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      {/* <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li> */}
      {/* <li><NavLink to={"/chat"}>ChatRoom</NavLink></li> */}
      <li>
        <NavLink to={"/live-class"}>Live Class</NavLink>
      </li>
    </>
  );
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div>
      <div className="navbar bg-primary-400 text-white px-5 md:px-7 lg:px-10 fixed z-50 dark:bg-primary-600">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost p-0 lg:hidden"
            >
              <BsFillMenuButtonWideFill className="text-2xl m-0 mx-2" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-primary rounded-box z-20 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <Link>
            <div className="bg-white rounded-sm">
              <img src={logo} alt="logo" className="h-10 rounded-sm " />
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">{links}</ul>
        </div>
        <div className="navbar-end gap-3 items-center">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="border-2 border-secondary rounded-xl bg-white p-[2px]"
              >
                <img
                  src={user?.photoURL}
                  alt=""
                  className="h-10 w-10 object-cover rounded-lg"
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-primary rounded-box z-20 w-64 p-2 shadow"
              >
                <li>
                  <p>{user.email}</p>
                </li>
                <li>{/* <Link to={"/dashboard"}>Dashboard</Link> */}</li>
                <li>
                  <button
                    onClick={() => {
                      logout();
                      setRegistered(false);
                    }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to={"/join-us"}>
              <button>Join Us</button>
            </Link>
          )}
          <div>
            <button onClick={() => darkModeHandler()}>
              {
                dark && <IoSunny className="text-3xl " /> // render sunny when dark is true
              }
              {
                !dark && <IoMoon className="text-3xl text-gray-700" /> // render moon when dark is false
              }
            </button>
          </div>
        </div>
      </div>
      <div className="h-[64px] "></div>
    </div>
  );
};

export default Navbar;
