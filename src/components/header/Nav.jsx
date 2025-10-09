import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png"
import { IoLogoGithub } from "react-icons/io";

const links = <>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/Apps"}>Apps</NavLink></li>
    <li><NavLink to={"/installation"}>Installation</NavLink></li>
</>


const Nav = () => {
  return (
    <>
      <div className="navbar bg-white px-5 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className=" text-[rgba(99,46,227,1)] flex gap-1.5 items-center text-sm lg:text-xl"><img src={logo} className="h-[min(6vw,32px)]" alt="" /> HERO.IO</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <button className=" flex lg:text-sm text-[10px] items-center p-2 gap-1 rounded-sm bg-gradient-to-r from-[rgba(99,46,227,1)] to-[rgba(159,98,242,1)] text-white  border-none">
                <IoLogoGithub />Contribute
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
