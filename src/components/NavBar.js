import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          {/* <Link  to="/" className="navbar-brand"> */}
          <Link  to="/" className="navbar-brand">
            {props.title}
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link  className="nav-link active" aria-current="page" to="/"> */}
                <Link  to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {/* <Link  className="nav-link active" to="/about"> */}
                <Link to="/about" className="nav-link active">
                  {props.abouttext}
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
            Get {props.mode==='light'?'Dark':'Light'}Mode
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault" onClick={props.toggle}/>
          </div>
          </div>
          <button
            className="navbar-toggler my-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
}

NavBar.defaultProps = {
  title: "setTitle",
  abouttext: "setAbout",
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string.isRequired,
};
