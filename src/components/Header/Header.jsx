import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState("cupcake");
  const [menu, setMenu] = useState(false);

  const toggleTheme = () => {
    const currentTheme = theme === "cupcake" ? "sunset" : "cupcake";
    setTheme(currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const handleClickOutside = (event) => {
    if (event.target.closest(".dropdown")) return;
    setMenu(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
  });


  return (
    <>
      <div className="navbar py-2 mb-6 md:mb-8 lg:mb-10 lg:py-4 lg:w-4/5 lg:flex lg:justify-center mx-auto">
        <div className="navbar-start">
          <menu className="dropdown lg:hidden">
            <button
              className="btn btn-ghost"
              onClick={toggleMenu}
              aria-label="menu"
            >
              {menu ? (
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              ) : (
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>
              )}
            </button>
            <ul
              className={`p-2 shadow-2xl menu dropdown-content z-[1] bg-base-100 rounded-box w-52 ${
                menu ? "block" : "hidden"
              }`}
            >
              <li>
                <NavLink to="/" onClick={toggleMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={toggleMenu}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" onClick={toggleMenu}>
                  Projects
                </NavLink>
              </li>
            </ul>
          </menu>
          <NavLink
            to="/"
            className="btn btn-ghost text-base md:text-lg lg:text-2xl"
          >
            Martin Rouault 
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex rounded-xl">
          <ul className="menu text-sm menu-horizontal lg:text-lg xl:text-xl">
            <li>
              <NavLink className="menu-btn" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="menu-btn" to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className="menu-btn" to="/projects">Projects</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller"
              aria-label="theme-controller"
              onClick={toggleTheme}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </>
  );
};

export default Header;
