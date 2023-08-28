import React, { useState, useEffect } from "react";
import "../../../Css/App.css";
import "../../Activities/Css/Activity.css";
import { NavLink } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import Navbar from "../../Common/Navbar";
import Helpcenter from "../../Common/Helpcenter";
import Footer from "../../Common/Footer";
import CardView from "./Cardview";
export default function CabSearch() {
  // Page Start in Top
  const startToTop = () => {
    window.scrollTo(0);
  };

  // Per Page Title
  useEffect(() => {
    document.title = "LarkHolidays - Cab Search";
  });

  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    {
      value: "Popular Place",
      label: "Popular Place",
    },
    { value: "Water Place", label: "Water Place" },
    { value: "Safari", label: "Safari" },
  ];

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 1:
        return (
          <div>
            <CardView selectedValue={selectedValue} />
          </div>
        );
      case 2:
        return (
          <div>
            <div>
              <CardView selectedValue={selectedValue} />
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <div>
              <CardView selectedValue={selectedValue} />
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <div>
              <CardView selectedValue={selectedValue} />
            </div>
          </div>
        );
      case 5:
        return (
          <div>
            <div>
              <CardView selectedValue={selectedValue} />
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="Activities">
      <div className="home-banner">
        <Navbar />
        <Helpcenter />
        <div className="container">
          <div className="tab-search">
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
                      onClick={startToTop}
                      to="/Transfer"
                      style={({ isActive, isPending }) => {
                        return {
                          color: isActive ? "#818181" : "#fff",
                          backgroundColor: isActive ? "#fff" : " #0E982D",
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
                      onClick={startToTop}
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
                      onClick={startToTop}
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
                      onClick={startToTop}
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
            <div className="searchbar">
              <div className="container">
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      id="search"
                      placeholder="Where do you wish to travel?"
                      // autocomplete="off"
                      style={{ borderRadius: "50px" }}
                    />
                    <label className="search">
                      {/* <i className="fas fa-search"></i> */}
                      <button>Search</button>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recent-search-head p-5">
        <div className="container p-0">
          <div className="search-activity-city">
            <div className="search">
              <span>Search</span>
              <input
                type="text"
                className="search__input"
                placeholder="Search Activities, City...
                "
              />
              <button className="search__button">
                <svg
                  className="search__icon"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                  </g>
                </svg>
              </button>
            </div>
            <div style={{ width: "22%", color: "#fff" }}>
              <label htmlFor="filterDropdown">Short By:</label>
              <select
                id="filterDropdown"
                value={selectedValue}
                onChange={handleSelectChange}
              >
                <option value="">All</option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="Result-in-Activity">
        <div className="container ">
          <div>
            {renderPageContent()}
            <div>
              <div className="d-flex">
                {currentPage > 1 && (
                  <button onClick={handlePreviousPage}>
                    <i className="fa-solid fa-angles-left"></i>
                  </button>
                )}
                <nav>
                  <ul>
                    <span onClick={() => setCurrentPage(1)}>1</span>
                    <span onClick={() => setCurrentPage(2)}>2</span>
                    <span onClick={() => setCurrentPage(3)}>3</span>
                    <span onClick={() => setCurrentPage(4)}>4</span>
                    <span onClick={() => setCurrentPage(5)}>5</span>
                  </ul>
                </nav>
                {currentPage < 5 && (
                  <button onClick={handleNextPage}>
                    <i className="fa-solid fa-angles-right"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
