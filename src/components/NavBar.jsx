import React, { useEffect, useState } from "react";
import "../style/NavBar.scss";
import { Link, NavLink } from "react-router-dom";
import Login from "./buttons/Login";
import Signup from "./buttons/SignUp";
import CartBtn from "./buttons/CartBtn";

const NavBar = () => {
  const [navBar, setNavBar] = useState(false);
  const [navBarScroll, setnavBarScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setnavBarScroll(true);
      } else {
        setnavBarScroll(false);
      }
    });
  });
  return (
    <>
      <nav
        className={
          !navBarScroll
            ? "navbar navbar-expand-lg bg-light"
            : "navbar navbarScroll navbar-expand-lg bg-light"
        }
      >
        <div className="container-fluid py-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              onClick={() => {
                setNavBar(!navBar);
              }}
            >
              <i className={!navBar ? "fa fa-bars" : "fa fa-close"}></i>
            </span>
          </button>

          <div
            className={!navBar ? "collapse navbar-collapse" : ""}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  onClick={() => {
                    setNavBar(!navBar);
                  }}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/product"
                  onClick={() => {
                    setNavBar(!navBar);
                  }}
                >
                  Product
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  onClick={() => {
                    setNavBar(!navBar);
                  }}
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  onClick={() => {
                    setNavBar(!navBar);
                  }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <Link to="/" className="navbar-brand me-2 fw-bold">
              Apple Store
            </Link>
            <Login />
            <Signup />
            <CartBtn />
          </div>
        </div>
        <Link to="/" className="navbar-brand2 me-2 fw-bold">
          Apple Store
        </Link>
      </nav>

      {navBarScroll && (
        <div
          className="ScrolUp"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <i className="fa fa-level-up"></i>
        </div>
      )}
    </>
  );
};

export default NavBar;
