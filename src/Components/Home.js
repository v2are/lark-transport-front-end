import "../Css/App.css";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Common/Navbar";
import Home2 from "../Images/Home/Home2.png";
import Home3 from "../Images/Home/Home3.png";
import Home4 from "../Images/Home/Home4.png";
import Home5 from "../Images/Home/Home5.png";
import Home6 from "../Images/Home/Home6.png";
import Home7 from "../Images/Home/Home7.png";
import Home8 from "../Images/Home/Home8.png";
import Home9 from "../Images/Home/Home9.png";
import Home10 from "../Images/Home/Home10.png";
import Home11 from "../Images/Home/Home11.png";
import Home12 from "../Images/Home/Home12.png";
import Home13 from "../Images/Home/Home13.png";
import Home15 from "../Images/Home/Home15.png";
import Home16 from "../Images/Home/Home16.png";
import CountUp from "react-countup";
import Footer from "./Common/Footer";
import Helpcenter from "./Common/Helpcenter";
export default function Home() {
  useEffect(() => {
    document.title = "LarkHolidays-Home";
  });

  const startToTop = () => {
    window.scrollTo(0);
  };
  // Image Filter
  const [showedIndex, setShowedIndex] = useState(8);
  const [selectedIndex, setSelectedIndex] = useState("");
  const Newsrooom1 = ["Popular Places"];
  const Newsrooom2 = ["Recommended Places"];
  const [companyList] = useState([
    {
      rowid: "1",
      id: "Bankok-Pattaya",
      distension: "All Places",
      from: " Bankok",
      to: "Pattaya",
      image: Home2,
      price: "From  2500",
    },
    {
      rowid: "2",
      id: "Pattaya-Bankok",
      distension: "Popular Places",
      from: "Pattaya",
      to: "Bankok",
      image: Home3,
      price: "From  2500",
    },
    {
      rowid: "3",
      distension: "Recommended Places",
      from: " Bankok",
      to: "Pattaya",
      image: Home6,
      price: "From  2500",
    },
    {
      distension: "All Places ",
      from: " Bankok",
      to: "Pattaya",
      image: Home4,
      price: "From  2500",
    },
    {
      rowid: "4",
      distension: "Popular Places",
      from: " Bankok",
      to: "Pattaya",
      image: Home5,
      price: "From  2500",
    },
    {
      rowid: "6",
      distension: "Recommended Places",
      from: " Bankok",
      to: "Pattaya",
      image: Home8,
      price: "From  2500",
    },
    {
      rowid: "7",
      distension: "All Places ",
      from: " Bankok",
      to: "Pattaya",
      image: Home6,
      price: "From  2500",
    },
    {
      rowid: "8",
      distension: "Popular Places",
      from: " Bankok",
      to: "Pattaya",
      image: Home7,
      price: "From  2500",
    },
    {
      rowid: "9",
      distension: "All Places ",
      from: " Bankok",
      to: "Pattaya",
      image: Home8,
      price: "From  2500",
    },
    {
      rowid: "10",
      distension: "Popular Places",
      from: " Bankok",
      to: "Pattaya",
      image: Home9,
      price: "From  2500",
    },
  ]);

  // Home Banner Video Play
  const videoEl = useRef(null);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        // console.error("Error attempting to play", error);
      });
  };
  useEffect(() => {
    attemptPlay();
  }, []);

  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
  };
  const defaultStyle = {
    borderBottom: "0px solid transparent",
    padding: "10px",
    textDecoration: "none",
    color: "#000",
  };

  const activeStyle = {
    borderBottom: "4px solid #0e982d",
    padding: "10px",
    textDecoration: "none",
    color: "#0e982d",
  };
  return (
    <div className="Home-Head">
      <div>
        <video
          style={{
            width: "100%",
            position: "absolute",
            pointerEvents: "none",
            height: "auto",
          }}
          // playsInline="false"
          loop
          muted
          // controls="false"
          alt="All the devices"
          src="https://oceanjar-new.s3.ap-south-1.amazonaws.com/Austria_1_1_806f1fe7a0.mp4"
          ref={videoEl}
        />
        {/* Home Banner Section Start */}
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
        {/* Home Banner Section Start */}

        {/* Where To Go Section Start */}

        <div className="Where-to-Go tac">
          <div className="container">
            <h4 className="Section-Heading">Where to Go?</h4>

            <div id="wrapper">
              <div
                id="content-wrapper"
                className="container d-flex flex-column"
              >
                <div id="content">
                  <div className="container-fluid">
                    <div className="tabControl">
                      <div className="container">
                        <ul
                          className="nav nav-pills nav-fill"
                          id="pills-tab"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              id="pills-home-tab"
                              data-toggle="pill"
                              href="#pills-1"
                              role="tab"
                            >
                              Bangkok
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="pills-profile-tab"
                              data-toggle="pill"
                              href="#pills-2"
                              role="tab"
                            >
                              Chiang Mai
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="pills-contact-tab"
                              data-toggle="pill"
                              href="#pills-3"
                              role="tab"
                            >
                              Pattaya
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="pills-contact-tab"
                              data-toggle="pill"
                              href="#pills-4"
                              role="tab"
                            >
                              Ayutthaya
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="pills-contact-tab"
                              data-toggle="pill"
                              href="#pills-5"
                              role="tab"
                            >
                              Krabi
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="pills-contact-tab"
                              data-toggle="pill"
                              href="#pills-6"
                              role="tab"
                            >
                              Phuket
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="pills-contact-tab"
                              data-toggle="pill"
                              href="#pills-7"
                              role="tab"
                            >
                              Nong Khai
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="pills-contact-tab"
                              data-toggle="pill"
                              href="#pills-8"
                              role="tab"
                            >
                              Chanthaburi
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              id="pills-contact-tab"
                              data-toggle="pill"
                              href="#pills-9"
                              role="tab"
                            >
                              Chanthaburi
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade show active"
                          id="pills-1"
                          role="tabpanel"
                          aria-labelledby="pills-home-tab"
                        >
                          {/* Popular Place Section Start */}
                          <div className="Popular-Place pt">
                            <div className="container">
                              <div className="allstory-head allstory-head-br-bt ">
                                <h2
                                  onClick={() => {
                                    setSelectedIndex("");
                                    setShowedIndex(8);
                                  }}
                                  className="all-place-1 nav-item"
                                >
                                  <a
                                    href="#All Place"
                                    style={
                                      activeButtonIndex === 0
                                        ? activeStyle
                                        : defaultStyle
                                    }
                                    onClick={() => handleButtonClick(0)}
                                  >
                                    All Places
                                  </a>
                                </h2>
                                {Newsrooom1.map((company, companyIn) => {
                                  return (
                                    <h2
                                      key={companyIn}
                                      onClick={() => {
                                        setSelectedIndex(company);
                                        setShowedIndex(4);
                                      }}
                                      className="all-place-2 all-place-1 nav-item"
                                    >
                                      <a
                                        href="#Popular Places"
                                        style={
                                          activeButtonIndex === 1
                                            ? activeStyle
                                            : defaultStyle
                                        }
                                        onClick={() => handleButtonClick(1)}
                                      >
                                        Popular Places
                                      </a>
                                    </h2>
                                  );
                                })}
                                {Newsrooom2.map((company, companyIn) => {
                                  return (
                                    <h2
                                      key={companyIn}
                                      onClick={() => {
                                        setSelectedIndex(company);
                                        setShowedIndex(4);
                                      }}
                                      className="all-place-2 all-place-1 nav-item"
                                    >
                                      <a
                                        href="#Recommended Places"
                                        style={
                                          activeButtonIndex === 2
                                            ? activeStyle
                                            : defaultStyle
                                        }
                                        onClick={() => handleButtonClick(2)}
                                      >
                                        Recommended Places
                                      </a>
                                    </h2>
                                  );
                                })}

                                <div className="al-story-hr-line"></div>
                              </div>

                              <div className="row company-page">
                                {companyList
                                  .filter(
                                    (item) =>
                                      !selectedIndex ||
                                      item.distension === selectedIndex
                                  )
                                  .slice(0, showedIndex)
                                  .map((data, index) => {
                                    return (
                                      <div
                                        key={index}
                                        className=" col-lg-3 col-md-3 col-sm-12 company-img"
                                      >
                                        <NavLink
                                          onClick={startToTop}
                                          // to="/Cabsearch"
                                          to={"/Package/thailand"}
                                        >
                                          <img src={data.image} alt="" />
                                          <h1>
                                            {data.from}&nbsp;
                                            <i className="bi bi-arrow-right"></i>
                                            &nbsp;
                                            {data.to}
                                          </h1>
                                          <p>{data.price}</p>
                                        </NavLink>
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                          {/* Popular Place Section End */}
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-2"
                          role="tabpanel"
                          aria-labelledby="pills-profile-tab"
                        >
                          {/* Popular Place Section Start */}
                          <div className="Popular-Place pt">
                            <div className="container">
                              <div className="allstory-head allstory-head-br-bt ">
                                <h2
                                  onClick={() => {
                                    setSelectedIndex("");
                                    setShowedIndex(8);
                                  }}
                                  className="all-place-1"
                                >
                                  All Places
                                </h2>
                                {Newsrooom1.map((company, companyIn) => {
                                  return (
                                    <h2
                                      key={companyIn}
                                      onClick={() => {
                                        setSelectedIndex(company);
                                        setShowedIndex(4);
                                      }}
                                      className="all-place-2 all-place-1"
                                    >
                                      {company}
                                    </h2>
                                  );
                                })}
                              </div>

                              <div className="row company-page">
                                {companyList
                                  .filter(
                                    (item) =>
                                      !selectedIndex ||
                                      item.distension === selectedIndex
                                  )
                                  .slice(0, showedIndex)
                                  .map((data, index) => {
                                    return (
                                      <div
                                        key={index}
                                        className=" col-lg-3 col-md-3 col-sm-12 company-img"
                                      >
                                        <NavLink
                                          onClick={startToTop}
                                          to="/Cabsearch"
                                          // to={"/Package/bali"}
                                        >
                                          <img src={data.image} alt="" />
                                          <h1>
                                            {data.from}&nbsp;
                                            <i className="bi bi-arrow-right"></i>
                                            &nbsp;
                                            {data.to}
                                          </h1>
                                          <p>{data.price}</p>
                                        </NavLink>
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                          {/* Popular Place Section End */}
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-3"
                          role="tabpanel"
                          aria-labelledby="pills-contact-tab"
                        >
                          {/* Popular Place Section Start */}
                          <div className="Popular-Place pt">
                            <div className="container">
                              <div className="allstory-head allstory-head-br-bt ">
                                <h2
                                  onClick={() => {
                                    setSelectedIndex("");
                                    setShowedIndex(8);
                                  }}
                                  className="all-place-1"
                                >
                                  All Places
                                </h2>
                                {Newsrooom1.map((company, companyIn) => {
                                  return (
                                    <h2
                                      key={companyIn}
                                      onClick={() => {
                                        setSelectedIndex(company);
                                        setShowedIndex(4);
                                      }}
                                      className="all-place-2 all-place-1"
                                    >
                                      {company}
                                    </h2>
                                  );
                                })}
                              </div>

                              <div className="row company-page">
                                {companyList
                                  .filter(
                                    (item) =>
                                      !selectedIndex ||
                                      item.distension === selectedIndex
                                  )
                                  .slice(0, showedIndex)
                                  .map((data, index) => {
                                    return (
                                      <div
                                        key={index}
                                        className=" col-lg-3 col-md-3 col-sm-12 company-img"
                                      >
                                        <NavLink
                                          onClick={startToTop}
                                          to="/Cabsearch"
                                        >
                                          <img src={data.image} alt="" />
                                          <h1>
                                            {data.from}&nbsp;
                                            <i className="bi bi-arrow-right"></i>
                                            &nbsp;
                                            {data.to}
                                          </h1>
                                          <p>{data.price}</p>
                                        </NavLink>
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                          {/* Popular Place Section End */}
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-4"
                          role="tabpanel"
                          aria-labelledby="pills-contact-tab"
                        >
                          {/* Popular Place Section Start */}
                          <div className="Popular-Place pt">
                            <div className="container">
                              <div className="allstory-head allstory-head-br-bt ">
                                <h2
                                  onClick={() => {
                                    setSelectedIndex("");
                                    setShowedIndex(8);
                                  }}
                                  className="all-place-1"
                                >
                                  All Places
                                </h2>
                                {Newsrooom1.map((company, companyIn) => {
                                  return (
                                    <h2
                                      key={companyIn}
                                      onClick={() => {
                                        setSelectedIndex(company);
                                        setShowedIndex(4);
                                      }}
                                      className="all-place-2 all-place-1"
                                    >
                                      {company}
                                    </h2>
                                  );
                                })}
                              </div>
                              <div className="row company-page">
                                {companyList
                                  .filter(
                                    (item) =>
                                      !selectedIndex ||
                                      item.distension === selectedIndex
                                  )
                                  .slice(0, showedIndex)
                                  .map((data, index) => {
                                    return (
                                      <div
                                        key={index}
                                        className=" col-lg-3 col-md-3 col-sm-12 company-img"
                                      >
                                        <NavLink
                                          onClick={startToTop}
                                          to="/Cabsearch"
                                        >
                                          <img src={data.image} alt="" />
                                          <h1>
                                            {data.from}&nbsp;
                                            <i className="bi bi-arrow-right"></i>
                                            &nbsp;
                                            {data.to}
                                          </h1>
                                          <p>{data.price}</p>
                                        </NavLink>
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                          {/* Popular Place Section End */}
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-5"
                          role="tabpanel"
                          aria-labelledby="pills-contact-tab"
                        >
                          {/* Popular Place Section Start */}
                          <div className="Popular-Place pt">
                            <div className="container">
                              <div className="allstory-head allstory-head-br-bt ">
                                <h2
                                  onClick={() => {
                                    setSelectedIndex("");
                                    setShowedIndex(8);
                                  }}
                                  className="all-place-1"
                                >
                                  All Places
                                </h2>
                                {Newsrooom1.map((company, companyIn) => {
                                  return (
                                    <h2
                                      key={companyIn}
                                      onClick={() => {
                                        setSelectedIndex(company);
                                        setShowedIndex(4);
                                      }}
                                      className="all-place-2 all-place-1"
                                    >
                                      {company}
                                    </h2>
                                  );
                                })}
                              </div>

                              <div className="row company-page">
                                {companyList
                                  .filter(
                                    (item) =>
                                      !selectedIndex ||
                                      item.distension === selectedIndex
                                  )
                                  .slice(0, showedIndex)
                                  .map((data, index) => {
                                    return (
                                      <div
                                        key={index}
                                        className=" col-lg-3 col-md-3 col-sm-12 company-img"
                                      >
                                        <NavLink
                                          onClick={startToTop}
                                          to="/Cabsearch"
                                        >
                                          <img src={data.image} alt="" />
                                          <h1>
                                            {data.from}&nbsp;
                                            <i className="bi bi-arrow-right"></i>
                                            &nbsp;
                                            {data.to}
                                          </h1>
                                          <p>{data.price}</p>
                                        </NavLink>
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                          {/* Popular Place Section End */}
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-6"
                          role="tabpanel"
                          aria-labelledby="pills-contact-tab"
                        >
                          {/* Popular Place Section Start */}
                          <div className="Popular-Place pt">
                            <div className="container">
                              <div className="allstory-head allstory-head-br-bt ">
                                <h2
                                  onClick={() => {
                                    setSelectedIndex("");
                                    setShowedIndex(8);
                                  }}
                                  className="all-place-1"
                                >
                                  All Places
                                </h2>
                                {Newsrooom1.map((company, companyIn) => {
                                  return (
                                    <h2
                                      key={companyIn}
                                      onClick={() => {
                                        setSelectedIndex(company);
                                        setShowedIndex(4);
                                      }}
                                      className="all-place-2 all-place-1"
                                    >
                                      {company}
                                    </h2>
                                  );
                                })}
                              </div>
                              <div className="row company-page">
                                {companyList
                                  .filter(
                                    (item) =>
                                      !selectedIndex ||
                                      item.distension === selectedIndex
                                  )
                                  .slice(0, showedIndex)
                                  .map((data, index) => {
                                    return (
                                      <div
                                        key={index}
                                        className=" col-lg-3 col-md-3 col-sm-12 company-img"
                                      >
                                        <NavLink
                                          onClick={startToTop}
                                          to="/Cabsearch"
                                        >
                                          <img src={data.image} alt="" />
                                          <h1>
                                            {data.from}&nbsp;
                                            <i className="bi bi-arrow-right"></i>
                                            &nbsp;
                                            {data.to}
                                          </h1>
                                          <p>{data.price}</p>
                                        </NavLink>
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                          {/* Popular Place Section End */}
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-7"
                          role="tabpanel"
                          aria-labelledby="pills-contact-tab"
                        >
                          {/* Popular Place Section Start */}
                          <div className="Popular-Place pt">
                            <div className="container">
                              <div className="allstory-head allstory-head-br-bt ">
                                <h2
                                  onClick={() => {
                                    setSelectedIndex("");
                                    setShowedIndex(8);
                                  }}
                                  className="all-place-1"
                                >
                                  All Places
                                </h2>
                                {Newsrooom1.map((company, companyIn) => {
                                  return (
                                    <h2
                                      key={companyIn}
                                      onClick={() => {
                                        setSelectedIndex(company);
                                        setShowedIndex(4);
                                      }}
                                      className="all-place-2 all-place-1"
                                    >
                                      {company}
                                    </h2>
                                  );
                                })}
                              </div>

                              <div className="row company-page">
                                {companyList
                                  .filter(
                                    (item) =>
                                      !selectedIndex ||
                                      item.distension === selectedIndex
                                  )
                                  .slice(0, showedIndex)
                                  .map((data, index) => {
                                    return (
                                      <div
                                        key={index}
                                        className=" col-lg-3 col-md-3 col-sm-12 company-img"
                                      >
                                        <NavLink
                                          onClick={startToTop}
                                          to="/Cabsearch"
                                        >
                                          <img src={data.image} alt="" />
                                          <h1>
                                            {data.from}&nbsp;
                                            <i className="bi bi-arrow-right"></i>
                                            &nbsp;
                                            {data.to}
                                          </h1>
                                          <p>{data.price}</p>
                                        </NavLink>
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                          {/* Popular Place Section End */}
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-8"
                          role="tabpanel"
                          aria-labelledby="pills-contact-tab"
                        >
                          {/* Popular Place Section Start */}
                          <div className="Popular-Place pt">
                            <div className="container">
                              <div className="allstory-head allstory-head-br-bt ">
                                <h2
                                  onClick={() => {
                                    setSelectedIndex("");
                                    setShowedIndex(8);
                                  }}
                                  className="all-place-1"
                                >
                                  All Places
                                </h2>
                                {Newsrooom1.map((company, companyIn) => {
                                  return (
                                    <h2
                                      key={companyIn}
                                      onClick={() => {
                                        setSelectedIndex(company);
                                        setShowedIndex(4);
                                      }}
                                      className="all-place-2 all-place-1"
                                    >
                                      {company}
                                    </h2>
                                  );
                                })}
                              </div>

                              <div className="row company-page">
                                {companyList
                                  .filter(
                                    (item) =>
                                      !selectedIndex ||
                                      item.distension === selectedIndex
                                  )
                                  .slice(0, showedIndex)
                                  .map((data, index) => {
                                    return (
                                      <div
                                        key={index}
                                        className=" col-lg-3 col-md-3 col-sm-12 company-img"
                                      >
                                        <NavLink
                                          onClick={startToTop}
                                          to="/Cabsearch"
                                        >
                                          <img src={data.image} alt="" />
                                          <h1>
                                            {data.from}&nbsp;
                                            <i className="bi bi-arrow-right"></i>
                                            &nbsp;
                                            {data.to}
                                          </h1>
                                          <p>{data.price}</p>
                                        </NavLink>
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                          {/* Popular Place Section End */}
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-9"
                          role="tabpanel"
                          aria-labelledby="pills-contact-tab"
                        >
                          {/* Popular Place Section Start */}
                          <div className="Popular-Place pt">
                            <div className="container">
                              <div className="allstory-head allstory-head-br-bt ">
                                <h2
                                  onClick={() => {
                                    setSelectedIndex("");
                                    setShowedIndex(8);
                                  }}
                                  className="all-place-1"
                                >
                                  All Places
                                </h2>
                                {Newsrooom1.map((company, companyIn) => {
                                  return (
                                    <h2
                                      key={companyIn}
                                      onClick={() => {
                                        setSelectedIndex(company);
                                        setShowedIndex(4);
                                      }}
                                      className="all-place-2 all-place-1"
                                    >
                                      {company}
                                    </h2>
                                  );
                                })}
                              </div>

                              <div className="row company-page">
                                {companyList
                                  .filter(
                                    (item) =>
                                      !selectedIndex ||
                                      item.distension === selectedIndex
                                  )
                                  .slice(0, showedIndex)
                                  .map((data, index) => {
                                    return (
                                      <div
                                        key={index}
                                        className=" col-lg-3 col-md-3 col-sm-12 company-img"
                                      >
                                        <NavLink
                                          onClick={startToTop}
                                          to="/Cabsearch"
                                        >
                                          <img src={data.image} alt="" />
                                          <h1>
                                            {data.from}&nbsp;
                                            <i className="bi bi-arrow-right"></i>
                                            &nbsp;
                                            {data.to}
                                          </h1>
                                          <p>{data.price}</p>
                                        </NavLink>
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                          {/* Popular Place Section End */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Where To Go Section End */}

        {/* Why Choose Us Section Start */}
        <div className="Why-Choose-Us tac pt">
          <div className="container">
            <h4 className="Section-Heading">Where Choose Us?</h4>
            <p className="section-para">
              These popular destinations have a lot to offer
            </p>
            <div className="row pt">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="why-choose-card">
                  <img src={Home10} alt="" />
                  <h5>Best Price Guarantee</h5>
                  <p>
                    Find a Best price and we'll match it, so you can buy with
                    confidence!"
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="why-choose-card">
                  <img src={Home11} alt="" />
                  <h5>Easy & Quick Booking</h5>
                  <p>
                    Our easy and quick booking process makes it simple to secure
                    your reservation!
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="why-choose-card">
                  <img src={Home12} alt="" />
                  <h5>Customer Care 24/7</h5>
                  <p>
                    Always here for you: Our dedicated team is available 24/7 to
                    provide the support you need!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Why Choose Us Section End */}

        {/* Client Count Up section Start */}
        <div className="counter-client tac mt">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="counter"
                  data-aos-delay="100"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                >
                  <CountUp
                    className="CountUp"
                    start={0}
                    end={25}
                    duration={6}
                    ref={(countUp) => {
                      this.myCountUp = countUp;
                    }}
                  />
                  <span className="plus">+</span>
                  <p>Destinations</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="counter"
                  data-aos-delay="150"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                >
                  <CountUp
                    className="CountUp"
                    start={0}
                    end={1000}
                    duration={4}
                    ref={(countUp) => {
                      this.myCountUp = countUp;
                    }}
                  />
                  <span className="plus">+</span>
                  <p>Total Vechicle</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="counter"
                  data-aos-delay="200"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                >
                  <CountUp
                    className="CountUp"
                    start={0}
                    end={100}
                    duration={10}
                    ref={(countUp) => {
                      this.myCountUp = countUp;
                    }}
                  />
                  <span className="plus">+</span>
                  <p>Happy customers</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <div
                  className="counter"
                  data-aos-delay="250"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                >
                  <CountUp
                    className="CountUp"
                    start={0}
                    end={25}
                    duration={7}
                    ref={(countUp) => {
                      this.myCountUp = countUp;
                    }}
                  />
                  <span className="plus">+</span>
                  <p>Our Drivers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Client Count Up section End */}

        {/* Download Our Application Section Start */}
        <div className="Download-Our-Application pt tac">
          <div className="container">
            {/* <h4 className="Section-Heading">Download Our Application</h4> */}
            <div className="row d-flex align-items-center">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="mobile-logo">
                  <img src={Home13} alt="" className="mobile" />
                  {/* <div className="logo-mobile">
                    <img src={Home17} alt="" className="logo" />
                  </div> */}
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-12 detail-section">
                <h4>Get the Lark holidays Application</h4>
                <p>
                  We will send you a link, open it on your phone to download the
                  application
                </p>

                <div className="">
                  <form>
                    <input type="mail" placeholder="Email" />
                    <button>Share App Link</button>
                  </form>
                </div>
                <p>
                  <span>Download app from</span>
                </p>
                <div className="app-store">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="http://play.google.com/store/apps/details?id=com.google.android.apps.maps"
                  >
                    {" "}
                    <img src={Home15} alt="" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.apple.com/in/app-store/"
                  >
                    {" "}
                    <img src={Home16} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Download Our Application Section End */}

        {/* Quick Booking Confirmation Section Start */}
        <div className="Quick-Booking-Confirmation tac pt">
          <div className="container">
            <h4>
              Quick Booking Confirmation, Instant Payment, Online Vouchers
            </h4>
            <button>Download</button>
          </div>
        </div>
        {/* Quick Booking Confirmation Section End */}
      </div>
      <Footer />
    </div>
  );
}
