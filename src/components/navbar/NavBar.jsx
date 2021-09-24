import React from "react";

function NavBar ({ title }) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href={"/"}>
          <h1>{title}</h1>
        </a>
        <form className="d-flex">
          <button
            className="btn btn-warning mx-1"
            type="submit">Login
          </button>
          <button
            className="btn btn-success mx-1"
            type="submit">Register
          </button>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
