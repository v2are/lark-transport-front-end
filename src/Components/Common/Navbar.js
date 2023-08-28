import "../../Css/App.css";
import { NavLink } from "react-router-dom";
import logo from "../../Images/Common/Favicon.svg";
import Activity2 from "../../Images/Activities/Activity2.svg";
import React from "react";

export default function Navbar() {
  const scrollToTop = () => {
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    window.scrollTo(0, 0);
  };
  const startToTop = () => {
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    window.scrollTo(0);
  };
  return (
    <div className="Navbar-head">
      <div className="first-container">
        <div className="Navigation bg-color nav-container">
          <div className="container">
            <nav className="navbar navbar-expand-lg nav-row">
              <div className="container-fluid">
                <NavLink to="/" onClick={startToTop}>
                  <img style={{ width: "95%" }} src={logo} alt="" />
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    {/* <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Homedemo"
                        onClick={scrollToTop}
                        style={({ isActive, isPending }) => {
                          return {
                            color: isActive ? "#0E982D" : "#fff",
                            borderBottom: isActive ? "3px solid ##0E982D" : "",
                          };
                        }}
                      >
                        Home
                      </NavLink>
                    </li> */}
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        aria-current="page"
                        onClick={scrollToTop}
                        to="/Transfer"
                        style={({ isActive, isPending }) => {
                          return {
                            // fontWeight: isActive ? "bold" : "",
                            color: isActive ? "#0E982D" : "#fff",
                            // color: isPending ? "red" : "black",
                            borderBottom: isActive ? "3px solid ##0E982D" : "",
                          };
                        }}
                      >
                        Transfer
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        aria-current="page"
                        onClick={scrollToTop}
                        to="/Activities"
                        style={({ isActive, isPending }) => {
                          return {
                            // fontWeight: isActive ? "bold" : "",
                            color: isActive ? "#0E982D" : "#fff",
                            // color: isPending ? "red" : "black",
                            borderBottom: isActive ? "3px solid ##0E982D" : "",
                          };
                        }}
                      >
                        Activities
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        to="/Hotels"
                        onClick={scrollToTop}
                        style={({ isActive, isPending }) => {
                          return {
                            color: isActive ? "#0E982D" : "#fff",
                            borderBottom: isActive ? "3px solid ##0E982D" : "",
                          };
                        }}
                      >
                        Hotels
                      </NavLink>
                    </li>

                    <li className="nav-register">
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Register
                      </button>
                      <div
                        className="modal fade"
                        id="exampleModal"
                        // tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                Modal title
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">...</div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="myaccoount">
                      <NavLink
                        className="nav-link"
                        aria-current="page"
                        onClick={scrollToTop}
                        to="/Myaccount"
                        style={({ isActive, isPending }) => {
                          return {
                            // fontWeight: isActive ? "bold" : "",
                            color: isActive ? "#0E982D" : "#fff",
                            // color: isPending ? "red" : "black",
                            borderBottom: isActive ? "3px solid ##0E982D" : "",
                          };
                        }}
                      >
                        My Account <img src={Activity2} alt="Activity2" />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
