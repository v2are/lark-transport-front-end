import "../Css/App.css";
import Navbar from "./Common/Navbar";
import { NavLink } from "react-router-dom";

export default function ComboTours() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="ComboTours">
      <Navbar />
      <div className="homebannernavControl">
                <div className="container">
                  <ul
                    className="nav nav-pills nav-fill"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        aria-current="page"
                        onClick={scrollToTop}
                        to="/Transfer"
                        style={({ isActive, isPending }) => {
                          return {
                            color: isActive ? "#fff" : "#818181",
                            backgroundColor: isActive ? "#0E982D" : "#fff",
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
                            color: isActive ? "#fff" : "#818181",
                            backgroundColor: isActive ? "#0E982D" : "#fff",
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
                        aria-current="page"
                        onClick={scrollToTop}
                        to="/Hotels"
                        style={({ isActive, isPending }) => {
                          return {
                            color: isActive ? "#fff" : "#818181",
                            backgroundColor: isActive ? "#0E982D" : "#fff",
                            borderBottom: isActive ? "3px solid ##0E982D" : "",
                          };
                        }}
                      >
                        Hotels
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        aria-current="page"
                        onClick={scrollToTop}
                        to="/ComboTours"
                        style={({ isActive, isPending }) => {
                          return {
                            color: isActive ? "#fff" : "#818181",
                            backgroundColor: isActive ? "#0E982D" : "#fff",
                            borderBottom: isActive ? "3px solid ##0E982D" : "",
                          };
                        }}
                      >
                        Combo Tours
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
     
    </div>
  );
}
