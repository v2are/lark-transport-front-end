import "../../Css/App.css";
import { NavLink } from "react-router-dom";
import React, { useEffect, useState, useRef, useReducer } from "react";
import Navbar from "../../Components/Common/Navbar";
import Home10 from "../../Images/Home/Home10.png";
import Home11 from "../../Images/Home/Home11.png";
import Home12 from "../../Images/Home/Home12.png";
import Home13 from "../../Images/Home/Home13.png";
// import Home14 from "../../Images/Home/Home14.svg";
import Home15 from "../../Images/Home/Home15.png";
import Home16 from "../../Images/Home/Home16.png";

// import Home17 from "../Images/Home/Home17.png";
import CountUp from "react-countup";
import Footer from "../../Components/Common/Footer";
import Helpcenter from "../../Components/Common/Helpcenter";

// useNavigate / useParams
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Transfer() {
  useEffect(() => {
    document.title = "LarkHolidays-Home1";
    //fecthApiData(API);
  });

  const [buttonAct, setbuttonAct] = useState(1);

  const country_id = 1;

  const { id } = useParams();

  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 1);
  // console.log(id);

  let API = `http://apinew.larkholidays.com/public/`;

  const [mediaList, setMediaList] = useState([]);
  // const cities = [];

  const fecthApiData = async () => {
    try {
      const res = await fetch(
        API + "api/cities?country_id=" + country_id + "&is_favourite=1"
      );
      const cities = await res.json();
      setMediaList(cities.cities);
      var newdata = cities.cities;
      var city_id = Object.keys(newdata)[0];
      if (buttonAct == 0) {
        setbuttonAct(city_id);
      }
      fecthApiData1(city_id);
    } catch (error) {
      console.log(error);
    }
    forceUpdate();
  };

  let findDetails = mediaList;

  const [mediaList1, setMediaList1] = useState([]);
  // const cities = [];
  const fecthApiData1 = async (city_id) => {
    if (buttonAct != city_id) {
      setbuttonAct(city_id);
    }
    try {
      const res = await fetch(
        API + "api/countries/" + country_id + "/" + city_id
      );
      const cities = await res.json();
      setMediaList1(cities);
    } catch (error) {
      console.log(error);
    }
    forceUpdate();
  };

  function sayHello() {
    console.log("clicked");
  }
  var renderAfterCalled = useRef(false);

  useEffect(() => {
    if (!renderAfterCalled.current) {
      fecthApiData();

      attemptPlay();
    }

    renderAfterCalled.current = true;
  }, []);

  let findDetails1 = mediaList1;
  // const firstKey = Object.keys(findDetails)[0];
  // console.log(firstKey);
  // console.log(buttonAct);
  let Navigate = useNavigate();

  const startToTop = () => {
    window.scrollTo(0);
  };
  // Image Filter
  const [showedIndex, setShowedIndex] = useState(8);
  const [selectedIndex, setSelectedIndex] = useState("");
  const Newsrooom1 = ["Popular Places"];
  const Newsrooom2 = ["Recommended Places"];

  // Home Banner Video Play
  const videoEl = useRef(null);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        // console.error("Error attempting to play", error);
      });
  };

  // const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  // const handleButtonClick = (index) => {
  //   setActiveButtonIndex(index);
  // };
  // const defaultStyle = {
  //   borderBottom: "0px solid transparent",
  //   padding: "10px",
  // };

  // const activeStyle = {
  //   borderBottom: "4px solid #0e982d",
  //   padding: "10px",
  // };

  // City In Thailand Bg-color Start
  const [activeButton, setActiveButton] = useState(1);

  const buttonsData = [
    { id: 1, color: activeButton === 1 ? "green" : "blue" },
    { id: 2, color: activeButton === 2 ? "green" : "blue" },
    { id: 3, color: activeButton === 3 ? "green" : "blue" },
    // Add more button data as needed
  ];

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  // City In Thailand Bg-color End

  // Page Loading Start
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const [data, setData] = useState(null); // State to store fetched data

  useEffect(() => {
    // Simulate fetching data (replace with actual data fetching logic)
    setTimeout(() => {
      // Once data is fetched, update state
      setData(/* Your fetched data */);
      setIsLoading(false); // Set loading to false
    }, 4000); // Simulating a 2-second delay
  }, []);
  // Page Loading End

  // Section Loading Start
  const [isLoadings, setIsLoadings] = useState(false); // Loading state

  const fetchData = () => {
    setIsLoadings(true); // Start loading animation
    // Simulate data fetching with a delay
    setTimeout(() => {
      setIsLoadings(false); // Stop loading animation after data is fetched
      // Add logic to process the fetched data
    }, 5000); // Simulated delay of 2 seconds
  };


  // Section Loading End
  return (
    <div className="App">
      {isLoading ? (
        // Loading animation or spinner
        <div className="page_loading_animation">
          <div className="loading_animation"></div>
        </div>
      ) : (
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
                                borderBottom: isActive
                                  ? "3px solid ##0E982D"
                                  : "",
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
                                borderBottom: isActive
                                  ? "3px solid ##0E982D"
                                  : "",
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
                                borderBottom: isActive
                                  ? "3px solid ##0E982D"
                                  : "",
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
                                borderBottom: isActive
                                  ? "3px solid ##0E982D"
                                  : "",
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
                <h4 className="Section-Heading">City in Thailand?</h4>
                <div className="city-names">
                  <div className="container">
                    <ul></ul>
                  </div>
                </div>

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
                                {Object.keys(findDetails).map(function (data, index) {
                                
                                return (
                                  <li className="nav-item">
                            
                                      <button
                                        className={buttonAct==data?"nav-link active":"nav-link"}    
                                        
                                        id={"city_" + data}
                                        data-toggle="pill"
                                        href="#pills-1"
                                        role="tab"
                                        data_id={data}
                                        onClick={() => fecthApiData1(data)}
                                      >
                                        {findDetails[data]}
                                      </button>
                                      {/* <button
                                        className={ 
                                          "nav-link " +   buttonAct == data
                                            ? ""
                                            : "nav-link"
                                        }
                                        id={"city_" + data}
                                        data-toggle="pill"
                                        href="#pills-1"
                                        role="tab"
                                        data_id={data}
                                        onClick={() => fecthApiData1(data)}
                                      >
                                        {findDetails[data]}
                                      </button> */}
                                  
                                  </li>
                                );
                              })}
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
                              <div className="Popular-Place">
                                <div className="container">
                                  {/* <div className="allstory-head allstory-head-br-bt ">
                                    <h2
                                      onClick={() => {
                                        setSelectedIndex("");
                                        setShowedIndex(8);
                                      }}
                                      className="all-place-1 nav-item"
                                    >
                                      <a
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
                                  </div> */}
                                    {0<findDetails1.length ? <section
                                      className={`content ${isLoadings ? "loading" : ""
                                        }`}
                                    >
                                      {isLoadings ? (
                                        <div className="loading_animation">
                                          <div className="spin_aniamtion"></div>
                                        </div>
                                      ) : (
                                        <div>
                                          <div className="row company-page">
                                            {findDetails1.map((data, index) => {
                                              //console.log(data.from);
                                              return (
                                                <div
                                                  className=" col-lg-3 col-md-3 col-sm-12 company-img"
                                                  onClick={() =>
                                                    Navigate(
                                                      `/Package/${data.from}/${data.to}`
                                                    )
                                                  }
                                                >
                                                  <div data_id={data}>
                                                    <img
                                                      src={data.city_image}
                                                      alt=""
                                                    />
                                                    <h1>
                                                      {data.from}&nbsp;
                                                      <i className="bi bi-arrow-right"></i>
                                                      &nbsp;
                                                      {data.to}
                                                    </h1>
                                                    <p>
                                                      {data.route_with_min_price}
                                                      THB
                                                    </p>
                                                  </div>
                                                </div>
                                              );
                                            })}
                                          </div>
                                        </div>
                                      )}
                                    </section>
                                      : <span className="error-message">No Packages available</span>}
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
                        Find a Best price and we'll match it, so you can buy
                        with confidence!"
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="why-choose-card">
                      <img src={Home11} alt="" />
                      <h5>Easy & Quick Booking</h5>
                      <p>
                        Our easy and quick booking process makes it simple to
                        secure your reservation!
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="why-choose-card">
                      <img src={Home12} alt="" />
                      <h5>Customer Care 24/7</h5>
                      <p>
                        Always here for you: Our dedicated team is available
                        24/7 to provide the support you need!
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
                      We will send you a link, open it on your phone to download
                      the application
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
      )}
    </div>
  );
}
