import React, { useEffect, useState } from "react";
import Modal from "react-modal";

import { useFormik } from "formik";
import * as yup from "yup";
import "../../Css/App.css";
import { NavLink } from "react-router-dom";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import Helpcenter from "../Common/Helpcenter";
import { HashLink } from "react-router-hash-link";
import CabBooking1 from "../../Images/CabBooking/CabBooking1.png";
import CabBooking2 from "../../Images/CabBooking/CabBooking2.png";
import CabBooking3 from "../../Images/CabBooking/CabBooking3.png";
import CabBooking4 from "../../Images/CabBooking/CabBooking4.png";

import CabBooking5 from "../../Images/CabBooking/CabBooking5.png";
import CabBooking6 from "../../Images/CabBooking/CabBooking6.png";
import CabBooking7 from "../../Images/CabBooking/CabBooking7.png";
import CabBooking8 from "../../Images/CabBooking/CabBooking8.png";
import CabBooking9 from "../../Images/CabBooking/CabBooking9.png";
import CabBooking10 from "../../Images/CabBooking/CabBooking10.svg";
import CabBooking12 from "../../Images/CabBooking/CabBooking12.gif";
import OtpInput from "react-otp-input";
// images

import { useParams } from "react-router-dom";

const Packages = () => {
  // ====================  Check - Box - model - Start ====================

  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    window.scrollTo(0, 0);
  };
  // ====================  Check - Box - model - End ====================

  // ==================== Otp - verification - Start ====================
  const [otp, setOtp] = useState("");

  useEffect(() => {
    document.title = "LarkHolidays - Cab Booking";
  });

  // ==================== Otp - verification - End ====================

  // ==================== Form - Validation - Start ====================
  const [isModalOpen_s, setIsModalOpen_s] = useState(false);

  const validationSchema = yup.object({
    from: yup.string().required("From field is required"),
    to: yup.string().required("To field is required"),
    name: yup.string().required("Name is required"),
    phonenumber: yup.string().required("Phone number is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      from: "",
      to: "",
      name: "",
      phonenumber: "",
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Handle form submission logic here (e.g., send data to the server)
      setIsModalOpen_s(true);
    },
  });

  // ==================== Form - Validation - End ====================

  //  ==================== Adult - Increase - Decrease - Start ====================

  const [count, setCount] = useState(0);

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }
  //  ==================== Adult - Increase - Decrease - End ====================

  //  ==================== Children - Increase - Decrease - Start ====================
  const [countcl, setCountcl] = useState(0);

  function incrementcl() {
    //setCount(prevCount => prevCount+=1);
    setCountcl(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrementcl() {
    setCountcl(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }
  //  ==================== Children - Increase - Decrease - End ====================

  //  ==================== Children - Increase - Decrease - Start ====================
  const [counti, setCounti] = useState(0);

  function incrementi() {
    //setCount(prevCount => prevCount+=1);
    setCounti(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrementi() {
    setCounti(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }
  //  ==================== Children - Increase - Decrease - End ====================
  // const [loading, setLoading] = useState(false);

  const { id } = useParams();
  console.log(id);
  let isLoading = false;

  let API = `http://webapi.toucanleisures.com/package_details/${id}`;

  const [mediaList1, setMediaList1] = useState([]);

  const fecthApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMediaList1(data.data);
      console.log(data.data);
      isLoading = true;
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fecthApiData(API);
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let findDetails1 = mediaList1;
  console.log(findDetails1);
  if (findDetails1.length >= 1) {
    isLoading = true;
  }

  console.log(setMediaList1);

  if (isLoading) {
    document.title = findDetails1[0].country;
    return (
      <div className="CabBooking">
        <div className="home-banner">
          <Navbar />
          <Helpcenter />
        </div>
        <div className="tour-packages" id="Tour-Packages">
          <div className="container">
            <div className="tour-package-card">
              {findDetails1[0].itinerary.map((data, index) => {
                // console.log(JSON.stringify(iten))
                return (
                  <div key={index} className="row">
                    {/* ==================== Home Top Banner Section Start ==================== */}
                    <div className="home-top-banner">
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-lg-7 bg-img-1">
                            <img src={CabBooking1} alt="" />
                          </div>
                          <div className="col-lg-5 bg-img-2">
                            <img src={CabBooking2} alt="" />

                            <div className="row">
                              <div className="col-lg-6 bg-img-3">
                                <img src={CabBooking3} alt="" />
                              </div>
                              <div className="col-lg-6 bg-img-4">
                                <img src={CabBooking4} alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ==================== Home Top Banner Section End ==================== */}

                    {/* ==================== Day Selected Section Start ==================== */}
                    <div className="day-selected">
                      <div className="container"></div>
                    </div>
                    {/* ==================== Day Selected Section End ==================== */}

                    {/*====================  Details Section Start ==================== */}
                    <div className="details">
                      <div className="container">
                        <form
                          action=""
                          onSubmit={formik.handleSubmit}
                          id="contactForm"
                        >
                          <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12">
                              <div className="transfer-details">
                                <h6>Transfer Details</h6>
                                <div className="full-detail-section">
                                  <div className="details-section">
                                    <img src={CabBooking5} alt="" />
                                    <div>
                                      <p className="cc">Compact Car</p>
                                      <p className="ss">
                                        Suzuki Swift <span>or similar</span>
                                      </p>
                                    </div>
                                    <div className="star-num">
                                      <i
                                        className="fa-solid fa-star"
                                        style={{ color: "#f5c721" }}
                                      ></i>
                                      4
                                    </div>
                                  </div>
                                  <div className="inclusion">
                                    <p>
                                      <span>
                                        <img
                                          src={CabBooking6}
                                          alt="CabBooking6"
                                        />
                                        3
                                      </span>
                                      <span>
                                        <img
                                          src={CabBooking7}
                                          alt="CabBooking7"
                                        />
                                        6
                                      </span>
                                      <span>
                                        <img
                                          src={CabBooking8}
                                          alt="CabBooking8"
                                        />
                                        7
                                      </span>
                                      <span>
                                        <img
                                          src={CabBooking9}
                                          alt="CabBooking9"
                                        />
                                        A/C
                                      </span>
                                    </p>
                                  </div>
                                  <div className="Service-provideds">
                                    <img
                                      src={CabBooking10}
                                      style={{
                                        width: "95px",
                                      }}
                                      alt=""
                                    />
                                    <span>
                                      Service provided by Lark Transport
                                    </span>
                                  </div>
                                  <div className="Free-cancellation">
                                    <HashLink smooth to="#Cancellation-Policy">
                                      <p>
                                        <i
                                          className="fa-sharp fa-regular fa-circle-check"
                                          style={{ color: "#0e982d" }}
                                        ></i>
                                        Cancellation possible (check rules)
                                      </p>
                                    </HashLink>
                                  </div>
                                </div>
                              </div>
                              <div className="transfer-details">
                                <h6>Passenger Details</h6>
                                <div className="full-detail-section">
                                  <div className="form">
                                    <form action="" id="contactForm">
                                      <p>Pick-up and drop-off details</p>
                                      <div>
                                        <label htmlFor="">
                                          From - Phuket Airport
                                        </label>{" "}
                                        <br />
                                        <i
                                          className="fa-sharp fa-solid fa-location-dot"
                                          style={{ color: "#31af12" }}
                                        ></i>
                                        <input
                                          type="text"
                                          name="from"
                                          value={formik.values.from}
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}
                                          placeholder="Enter your From"
                                        />
                                        {formik.touched.from &&
                                          formik.errors.from && (
                                            <div
                                              style={{
                                                color: "red",
                                                textAlign: "left",
                                                paddingLeft: "15px",
                                                marginTop: "10px",
                                                fontSize: "14px",
                                                fontFamily: "auto",
                                              }}
                                            >
                                              {formik.errors.from}
                                            </div>
                                          )}
                                      </div>
                                      <div>
                                        <label htmlFor="">To - Hotel</label>
                                        <br />
                                        <i
                                          className="fa-sharp fa-solid fa-location-dot"
                                          style={{ color: "#f21c1c" }}
                                        ></i>
                                        <input
                                          type="text"
                                          name="to"
                                          value={formik.values.to}
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}
                                          placeholder="Enter your To"
                                        />
                                        {formik.touched.to &&
                                          formik.errors.to && (
                                            <div
                                              style={{
                                                color: "red",
                                                textAlign: "left",
                                                paddingLeft: "15px",
                                                marginTop: "10px",
                                                fontSize: "14px",
                                                fontFamily: "auto",
                                              }}
                                            >
                                              {formik.errors.to}
                                            </div>
                                          )}
                                      </div>
                                      <br />
                                      <hr />
                                      <br />
                                      <div>
                                        <label htmlFor="">
                                          Please Enter Your Full Name
                                        </label>
                                        <br />
                                        <i
                                          className="fa-solid fa-user"
                                          // style={{ color: "#797979" }}
                                        ></i>

                                        <input
                                          type="text"
                                          name="name"
                                          value={formik.values.name}
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}
                                          placeholder="Enter your name"
                                        />
                                        {formik.touched.name &&
                                          formik.errors.name && (
                                            <div
                                              style={{
                                                color: "red",
                                                textAlign: "left",
                                                paddingLeft: "15px",
                                                marginTop: "10px",
                                                fontSize: "14px",
                                                fontFamily: "auto",
                                              }}
                                            >
                                              {formik.errors.name}
                                            </div>
                                          )}
                                      </div>
                                      <div>
                                        <label htmlFor="">
                                          Please Enter Your Email ID
                                        </label>
                                        <br />
                                        <i
                                          className="fa-solid fa-envelope"
                                          // style={{ color: "#797979" }}
                                        ></i>

                                        <input
                                          type="email"
                                          name="email"
                                          value={formik.values.email}
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}
                                          placeholder="Email"
                                        />
                                        {formik.touched.email &&
                                          formik.errors.email && (
                                            <div
                                              style={{
                                                color: "red",
                                                textAlign: "left",
                                                paddingLeft: "15px",
                                                marginTop: "10px",
                                                fontSize: "14px",
                                                fontFamily: "auto",
                                              }}
                                            >
                                              {formik.errors.email}
                                            </div>
                                          )}
                                      </div>
                                      {/* ------- */}
                                      <div id="Cancellation-Policy">
                                        <label htmlFor="">
                                          Please Enter Your Mobile Number
                                        </label>
                                        <br />
                                        <i
                                          className="fa-solid fa-phone-volume"
                                          // style={{ color: "#797979" }}
                                        ></i>
                                        <input
                                          type="text"
                                          name="phonenumber"
                                          value={formik.values.phonenumber}
                                          onChange={formik.handleChange}
                                          onBlur={formik.handleBlur}
                                          placeholder="Phone Number"
                                        />
                                        {formik.touched.phonenumber &&
                                          formik.errors.phonenumber && (
                                            <div
                                              style={{
                                                color: "red",
                                                textAlign: "left",
                                                paddingLeft: "15px",
                                                marginTop: "10px",
                                                fontSize: "14px",
                                                fontFamily: "auto",
                                              }}
                                            >
                                              {formik.errors.phonenumber}
                                            </div>
                                          )}
                                      </div>
                                    </form>
                                    <Modal
                                      isOpen={isModalOpen_s}
                                      onRequestClose={() =>
                                        setIsModalOpen_s(false)
                                      }
                                      contentLabel="Form Submission Modal"
                                    >
                                      <div>
                                        <div className="otp-verfication-section">
                                          <div className="modal-dialog modal-lg">
                                            <div className="modal-content p-4.5">
                                              <div>
                                                <h2>
                                                  Mobile Number Verfication
                                                </h2>
                                                <p>
                                                  Enter the code we just send on
                                                  your mobile phone
                                                  <input
                                                    type="tel"
                                                    maxLength={10}
                                                    placeholder=" +91 8668867856"
                                                  />
                                                  <i
                                                    className="fa-solid fa-pen-to-square"
                                                    style={{ color: "#e90c0c" }}
                                                  ></i>
                                                </p>

                                                <div className="otp-verifacation">
                                                  <OtpInput
                                                    value={otp}
                                                    onChange={setOtp}
                                                    className="otpinput"
                                                    numInputs={4}
                                                    renderSeparator={
                                                      <span></span>
                                                    }
                                                    renderInput={(props) => (
                                                      <input {...props} />
                                                    )}
                                                  />
                                                  <div className="done">
                                                    <NavLink
                                                      onClick={scrollToTop}
                                                      to="/BookingConfirmed"
                                                    >
                                                      <button className="Submit book-now">
                                                        Book Now
                                                      </button>
                                                    </NavLink>
                                                  </div>
                                                </div>

                                                <div>
                                                  <span>
                                                    Don’t Receive the code?
                                                  </span>
                                                </div>
                                                <a href="/">Resend..! </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        {/* <button onClick={() => setIsModalOpen_s(false)}>
                              Close
                            </button> */}
                                      </div>
                                    </Modal>
                                  </div>
                                </div>
                              </div>

                              <div className="transfer-details">
                                <h6>Cancellation Policy</h6>
                                <div className="full-detail-section Cancellation-Policy">
                                  <p className="para-1">
                                    You can cancel up to 24 hours in advance of
                                    the experience for a full refund.
                                  </p>
                                  <ul>
                                    <li>
                                      For a full refund, you must cancel at
                                      least 24 hours before the experience’s
                                      start time.
                                    </li>
                                    <li>
                                      If you cancel less than 24 hours before
                                      the experience’s start time, the amount
                                      you paid will not be refunded.
                                    </li>
                                    <li>
                                      Any changes made less than 24 hours before
                                      the experience’s start time will not be
                                      accepted.
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="transfer-details">
                                <h6>Ratings</h6>
                                <div className="full-detail-section Ratings">
                                  <div className="Reviews">
                                    <div>
                                      <h5>Reviews</h5>
                                      <p>
                                        <i
                                          className="fa-solid fa-star"
                                          style={{ color: "#e8bb1e" }}
                                        ></i>
                                        <i
                                          className="fa-solid fa-star"
                                          style={{ color: "#e8bb1e" }}
                                        ></i>
                                        <i
                                          className="fa-solid fa-star"
                                          style={{ color: "#e8bb1e" }}
                                        ></i>
                                        <i
                                          className="fa-solid fa-star"
                                          style={{ color: "#e8bb1e" }}
                                        ></i>
                                        <i
                                          className="fa-solid fa-star-half-stroke"
                                          style={{ color: "#e8bb1e" }}
                                        ></i>
                                      </p>
                                    </div>
                                    <div>
                                      <p>
                                        Total review count and overall rating
                                        based on Viator and Tripadvisor reviews
                                      </p>
                                      <div className="bar-1">
                                        <p className="star-rating">5 Star</p>
                                        <div className="progress progress-primary progress-m">
                                          <div className="progress-bar"></div>
                                        </div>
                                        <p className="star-rating">450</p>
                                      </div>
                                      <div className="bar-2">
                                        <p className="star-rating">4 Star</p>
                                        <div className="progress progress-primary progress-m">
                                          <div className="progress-bar"></div>
                                        </div>
                                        <p className="star-rating">312</p>
                                      </div>
                                      <div className="bar-3">
                                        <p className="star-rating">3 Star</p>
                                        <div className="progress progress-primary progress-m">
                                          <div className="progress-bar"></div>
                                        </div>
                                        <p className="star-rating">130</p>
                                      </div>
                                      <div className="bar-4">
                                        <p className="star-rating">2 Star</p>
                                        <div className="progress progress-primary progress-m">
                                          <div className="progress-bar"></div>
                                        </div>
                                        <p className="star-rating">25</p>
                                      </div>
                                      <div className="bar-5">
                                        <p className="star-rating">1 Star</p>
                                        <div className="progress progress-primary progress-m">
                                          <div className="progress-bar"></div>
                                        </div>
                                        <p className="star-rating">15</p>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="Reviews-1">
                                    <p className="review-head">
                                      Reviews by Lark holidays travelers
                                    </p>
                                    <p className="review-show">
                                      Showing 1-10 of 602 reviews
                                    </p>
                                    <div className="rating-review-section">
                                      <i
                                        className="fa-solid fa-star"
                                        style={{ color: "#e8bb1e" }}
                                      ></i>
                                      <i
                                        className="fa-solid fa-star"
                                        style={{ color: "#e8bb1e" }}
                                      ></i>
                                      <i
                                        className="fa-solid fa-star"
                                        style={{ color: "#e8bb1e" }}
                                      ></i>
                                      <i
                                        className="fa-solid fa-star"
                                        style={{ color: "#e8bb1e" }}
                                      ></i>
                                      <i
                                        className="fa-solid fa-star"
                                        style={{ color: "#e8bb1e" }}
                                      ></i>
                                      <p className="Reviews-details">
                                        Best tour guide , was speaking English ,
                                        Informative, easy to understand,
                                        friendly, Professional , Helpful
                                      </p>
                                      <div className="name">Kristyna</div>
                                      <div className="Reviews-date">
                                        June 23, 2023
                                      </div>
                                    </div>
                                    <div className="rating-review-section">
                                      <i
                                        className="fa-solid fa-star"
                                        style={{ color: "#e8bb1e" }}
                                      ></i>
                                      <i
                                        className="fa-solid fa-star"
                                        style={{ color: "#e8bb1e" }}
                                      ></i>
                                      <i
                                        className="fa-solid fa-star"
                                        style={{ color: "#e8bb1e" }}
                                      ></i>
                                      <i
                                        className="fa-solid fa-star"
                                        style={{ color: "#e8bb1e" }}
                                      ></i>
                                      <i
                                        className="fa-solid fa-star"
                                        style={{ color: "#e8bb1e" }}
                                      ></i>
                                      <p className="Reviews-details">
                                        Best tour guide , was speaking English ,
                                        Informative, easy to understand,
                                        friendly, Professional , Helpful
                                      </p>
                                      <div className="name">Kristyna</div>
                                      <div className="Reviews-date">
                                        June 23, 2023
                                      </div>
                                    </div>
                                    <div className="rating-review-section">
                                      <i
                                        className="fa-solid fa-star"
                                        style={{ color: "#e8bb1e" }}
                                      ></i>
                                      <i
                                        className="fa-solid fa-star"
                                        style={{ color: "#e8bb1e" }}
                                      ></i>
                                      <i
                                        className="fa-solid fa-star"
                                        style={{ color: "#e8bb1e" }}
                                      ></i>
                                      <i
                                        className="fa-solid fa-star"
                                        style={{ color: "#e8bb1e" }}
                                      ></i>
                                      <i
                                        className="fa-solid fa-star"
                                        style={{ color: "#e8bb1e" }}
                                      ></i>
                                      <p className="Reviews-details">
                                        Best tour guide , was speaking English ,
                                        Informative, easy to understand,
                                        friendly, Professional , Helpful
                                      </p>
                                      <div className="name">Kristyna</div>
                                      <div className="Reviews-date">
                                        June 23, 2023
                                      </div>
                                    </div>
                                    <div className="rating-review-section">
                                      <i
                                        className="fa-solid fa-star"
                                        style={{ color: "#e8bb1e" }}
                                      ></i>
                                      <i
                                        className="fa-solid fa-star"
                                        style={{ color: "#e8bb1e" }}
                                      ></i>
                                      <i
                                        className="fa-solid fa-star"
                                        style={{ color: "#e8bb1e" }}
                                      ></i>
                                      <i
                                        className="fa-solid fa-star"
                                        style={{ color: "#e8bb1e" }}
                                      ></i>
                                      <i
                                        className="fa-solid fa-star"
                                        style={{ color: "#e8bb1e" }}
                                      ></i>
                                      <p className="Reviews-details">
                                        Best tour guide , was speaking English ,
                                        Informative, easy to understand,
                                        friendly, Professional , Helpful
                                      </p>
                                      <div className="name">Kristyna</div>
                                      <div className="Reviews-date">
                                        June 23, 2023
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                              <div className="Travelers-Choose-Date">
                                <div className="transfer-details">
                                  <h6>Transfer Details</h6>
                                  <div className="full-detail-section full-detail-section-1">
                                    <div className="section-2 decrease-increase">
                                      <p>No of Travelers</p>
                                      <div className="adult-in-de-ct-p">
                                        <div className="row">
                                          <div className="col-lg-8">
                                            <p>
                                              Adult <br />
                                              <span>12 Years and Above</span>
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <div className="adult-in-de-ct">
                                              <div
                                                className="decreaseCount"
                                                onClick={decrement}
                                              >
                                                <i className="fa-solid fa-minus"></i>
                                              </div>
                                              <div className="numberCount">
                                                {count}
                                              </div>
                                              <div
                                                className="increaseCount"
                                                onClick={increment}
                                              >
                                                <i className="fa-solid fa-plus"></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="Children-in-de-ct-p">
                                        <div className="row">
                                          <div className="col-lg-8">
                                            <p>
                                              Children <br />
                                              <span>2 to 11 Years</span>
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <div className="Children-in-de-ct">
                                              <div
                                                className="decreaseCount"
                                                onClick={decrementcl}
                                              >
                                                <i className="fa-solid fa-minus"></i>
                                              </div>
                                              <div className="numberCount">
                                                {countcl}
                                              </div>
                                              <div
                                                className="increaseCount"
                                                onClick={incrementcl}
                                              >
                                                <i className="fa-solid fa-plus"></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="Children-in-de-ct-p">
                                        <div className="row">
                                          <div className="col-lg-8">
                                            <p>
                                              Infants <br />
                                              <span>Below 2 Years</span>
                                            </p>
                                          </div>
                                          <div className="col-lg-4">
                                            <div className="Children-in-de-ct">
                                              <div
                                                className="decreaseCount"
                                                onClick={decrementi}
                                              >
                                                <i className="fa-solid fa-minus"></i>
                                              </div>
                                              <div className="numberCount">
                                                {counti}
                                              </div>
                                              <div
                                                className="increaseCount"
                                                onClick={incrementi}
                                              >
                                                <i className="fa-solid fa-plus"></i>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="section-1">
                                      <p>Choose Date</p>
                                      <i
                                        className="fa-solid fa-calendar-days"
                                        style={{ color: "#79797900" }}
                                      ></i>
                                      <input
                                        type="date"
                                        name=""
                                        id=""
                                        placeholder="Mon23, July"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="transfer-details">
                                  <h6>Coupon code</h6>
                                  <div className="full-detail-section full-detail-section-2">
                                    <div>
                                      <iconify-icon
                                        className="coupon-icon"
                                        icon="bxs:offer"
                                        style={{
                                          height: "42px",
                                          alignItem: "center",
                                          color: "#0e982d",
                                          position: "absolute",
                                          top: "0px",
                                          left: "0px",
                                          fontSize: "22px",
                                          padding: "10px",
                                          borderRight: "1px solid #ccc",
                                          display: "flex",
                                          alignItems: "center",
                                          background: "#cccccc6b",
                                        }}
                                      ></iconify-icon>
                                      <input
                                        type="coupon"
                                        name="coupon"
                                        id="coupon"
                                        placeholder="Enter coupon code"
                                      />
                                      <div
                                        className="coupon-button"
                                        type="submited1234"
                                      >
                                        Apply
                                      </div>
                                    </div>
                                    <p>
                                      <a href="/" alt="">
                                        How it works?
                                      </a>
                                    </p>
                                  </div>
                                </div>
                                <div className="transfer-details transfer-details-pos-fix">
                                  <h6>Price Details</h6>
                                  <div className="full-detail-section full-detail-section-3">
                                    <p>
                                      {" "}
                                      <i
                                        className="fa-solid fa-circle-check"
                                        style={{ color: "#0e9820" }}
                                      ></i>
                                      Instant confirmation
                                    </p>
                                    <p>
                                      {" "}
                                      <i
                                        className="fa-solid fa-circle-check"
                                        style={{ color: "#0e9820" }}
                                      ></i>
                                      Free cancellation
                                    </p>
                                  </div>

                                  <div className="full-detail-section full-detail-section-4">
                                    <p className="lark-point-10">
                                      <div className="checkbox-pop-up-modal">
                                        <div>
                                          <div>
                                            <label>
                                              <input
                                                type="checkbox"
                                                checked={isChecked}
                                                onChange={handleCheckboxChange}
                                              />
                                              Use your 10 lark points balance
                                              (15 THB)
                                            </label>
                                          </div>
                                        </div>
                                        <div className="showdailog-modal">
                                          <Modal
                                            isOpen={isModalOpen}
                                            onRequestClose={() =>
                                              setIsModalOpen(false)
                                            }
                                            contentLabel="Example Modal"
                                          >
                                            <div className="dialog">
                                              <div
                                                className="modal-dialog"
                                                role="document"
                                              >
                                                <div className="modal-content">
                                                  <div className="modal-header">
                                                    <div>
                                                      <img
                                                        src={CabBooking12}
                                                        alt=""
                                                      />
                                                      <p>Larkpoints applied</p>
                                                      <h2>10THB</h2>
                                                      <p>
                                                        savings with this
                                                        Larkpoints
                                                      </p>
                                                    </div>
                                                  </div>
                                                  <div className="modal-body">
                                                    <h3>Done!</h3>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <button
                                              onClick={() =>
                                                setIsModalOpen(false)
                                              }
                                            >
                                              <i
                                                className="fa-solid fa-square-xmark"
                                                style={{
                                                  color: "#0e982d",
                                                  margin: "0",
                                                  position: "absolute",
                                                  top: "10px",
                                                  fontSize: "45px",
                                                  right: "10px",
                                                }}
                                              ></i>
                                            </button>
                                          </Modal>
                                        </div>
                                      </div>
                                    </p>
                                    <div>
                                      <p>
                                        <span>Transfer</span>
                                        <span>1000THB</span>{" "}
                                      </p>
                                      <p>
                                        <span>Taxs and fees</span>
                                        <span>12THB</span>{" "}
                                      </p>
                                      <p className="lark-point">
                                        <span>Lark points deduction</span>
                                        <span>-10THB </span>{" "}
                                      </p>
                                      <p className="total">
                                        <span>Total</span>
                                        <span>1022THB</span>
                                      </p>

                                      <div className="otp-verfication-section">
                                        <div className="pb pt message-button">
                                          <button
                                            className="Submit"
                                            type="submited"
                                            id="button"
                                            style={{
                                              width: "100%",
                                              height: "40px",
                                              background: "#f12929",
                                              borderRadius: "2px",
                                              color: "#fff",
                                              fontFamily: "Lato",
                                              fontStyle: "normal",
                                              fontWeight: "500",
                                              fontSize: "18px",
                                              lineHeight: "22px",
                                              margin: "15px 0",
                                              border: "none",
                                            }}
                                          >
                                            Submit
                                          </button>
                                        </div>
                                      </div>
                                      <div className="share-save">
                                        <button>
                                          <i
                                            className="fa-solid fa-share-nodes"
                                            style={{ color: "#525050" }}
                                          ></i>
                                          Share
                                        </button>
                                        <button>
                                          <i
                                            className="fa-solid fa-heart"
                                            style={{ color: "#f1502d" }}
                                          ></i>
                                          Save
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* ==================== Details Section End ==================== */}
                    <Footer />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Packages;
