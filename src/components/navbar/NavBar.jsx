import React from "react";
import { Link } from "react-router-dom";

function NavBar ({ title }) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <h1>{title}</h1>
        </Link>
        <form className="d-flex">
          <Link
            className="btn btn-warning mx-1"
            type="submit"
            to={"/login"}
          >Login
          </Link>
          <Link
            className="btn btn-success mx-1"
            type="submit"
            to={"/register"}
          >Register
          </Link>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
