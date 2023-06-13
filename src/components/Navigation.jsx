import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

function Navigation() {
  return (
    <div className="fixed-top">
    <div className="topbar">
        <div className="container">
            <div className="row ">
                <div className="col-md-6">
                    <p>info@vidusolutions.com | (832) 295-9666</p>
                </div>
                <div className="col-md-6">
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-youtube"></i>
                    <i className="bi bi-linkedin"></i>
                    <i className="bi bi-instagram"></i>
                </div>
            </div>
        </div>
    </div>
    <nav className="navbar navbar-expand-lg  nav-container box-shadow">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            <img src="images/logo-1.svg" alt=""/>
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link " to="/">HOME</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/About">ABOUT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Service">SERVICES</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/Portfolio">PORTFOLIO</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link red-color" to="/Contact">CONTACT</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
</div>



    );
}

export default Navigation;