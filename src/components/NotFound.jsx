import React from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../style/NotFound.scss";
import "animate.css";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404</title>
      </Helmet>
      <div className="NotFound">
        <h1>
          <i className="fa fa-exclamation-triangle"></i> NotFound
        </h1>{" "}
        <NavLink
          to="/"
          className="btn btn-info btn-lg text-white fw-bold mt-5 
          animate__animated animate__fadeInUp animate__delay-1s"
        >
          Return Home
        </NavLink>
      </div>
    </>
  );
};

export default NotFound;
