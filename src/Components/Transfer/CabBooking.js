import React, { useEffect, useState, useReducer, useRef } from "react";
// useNavigate / useParams
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

import Modal from "react-modal";

import { useFormik } from "formik";
import * as yup from "yup";
import "../../Css/App.css";
import { NavLink } from "react-router-dom";
import Navbar from "../../Components/Common/Navbar";
import Footer from "../../Components/Common/Footer";
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
import CabBooking17 from "../../Images/CabBooking/CabBooking17.jpg";
import OtpInput from "react-otp-input";
import Helpcenter from "../../Components/Common/Helpcenter";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function CabBooking() {
  const [selectedDate, setSelectedDate] = useState(null);

  // ====================  Cab - Booking - Api - Start ====================

  // const { from } = useParams();
  const { id } = useParams();
  const { to } = useParams();
  // console.log(id)
  const navigate = useNavigate(); // <-- hooks must be INSIDE the component

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("refresh prevented");
    // console.log(e.target.date.value);
  };

  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  // console.log(id);

  let API = `http://apinew.larkholidays.com/public/`;

  const [mediaList, setMediaList] = useState([]);

  const fetchCityApi = async (url) => {
    try {
      const res = await fetch(url);
      const bookingData = await res.json();

      // console.log(bookingData.data);
      setMediaList(bookingData.data);
    } catch (error) {
      console.log(error);
    }
    forceUpdate();
  };

  var renderAfterCalled = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      if (!renderAfterCalled.current) {
        fetchCityApi(API + "api/get-booking-detail?id=" + id);
      }

      renderAfterCalled.current = true;
    }, 3000);
  }, [reducerValue]);

const [user,setuser]=useState("")
const [userstatus,setuserstatus ]=useState("")

  useEffect(() => {

    localStorage.setItem("user", 1)
    localStorage.setItem("userstatus","Verified")
    let user=localStorage.getItem("user")
    let userstatus = localStorage.getItem("userstatus")
    // localStorage.clear()

    if (user && userstatus) {
     setuserstatus(userstatus)
     setuser(user)
    } else { 
      setuserstatus("")
      setuser("")
    }
  }, []);

  let findDetails = mediaList;

  //console.log(findDetails);

  // ====================  Cab - Booking - Api - Start ====================

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

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   window.scrollTo(0, 0);
  // };
  // ==================== Check - Box - model - End ====================
  // ==================== New User - Check2- Box - model - start ====================
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  
  const openModal2 = () => {
    setIsModalOpen2(true);
  };

  // ==================== Check2 - Box - model - End ====================
  // ==================== OTP - Check3- Box - model - start ====================
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [PhoneNumber,setPhoneNumber]=useState("")
  const openModal3 = () => {
    setIsModalOpen3(true);
  };

  // ==================== Check3 - Box - model - End ====================

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
    // pickup_time: yup.string().required("Pickup time field is required"),
    // no_of_luggage: yup.string().required("Number of luggage field is required"),
    airline: yup.string().required("Airline field is required"),
    air_flight_no: yup.string().required("Air flight number field is required"),
    // flight_arrival_time: yup
    //   .string()
    //   .required("Flight arrival time field is required"),
  });

  const formik = useFormik({
    initialValues: {
      from: "",
      to: "",
      // pickup_time: "",
      // no_of_luggage: "",
      airline: "",
      air_flight_no: "",
      // flight_arrival_time: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values.from);

      console.log(id);
      setPhoneNumber("")
      axios
        .post("http://apinew.larkholidays.com/public/api/booking", {
          id: id,
          from_pickup: values.from,
          to_drop: values.to,
          // pickup_time: values.pickup_time,
        })
        .then(function (response) {
          var slat = response.data.id;
          console.log(response.data);
          // this.props.history.push("/Cabbooking")

          //navigate("/Cabbooking/" + slat);
          setIsModalOpen_s(true);
          console.log(user,userstatus)
          if (user == 1 && userstatus == "Verified") {
            setIsModalOpen1(true)
    setIsModalOpen2(false);
    setIsModalOpen3(false)

          } else { 
            setIsModalOpen1(false)
            setIsModalOpen3(false)
    setIsModalOpen2(true);

          }

        })
        .catch(function (error) {
          console.log(error);
        });

      // Handle form submission logic here (e.g., send data to the server)
    },
  });

  // ==================== Form - Validation - End ====================
  // ==================== Form - Validation - Start ====================
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);

    if (!newName) {
      setNameError("Name is required.");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);

    if (!newEmail) {
      setEmailError("Email is required.");
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(newEmail)
    ) {
      setEmailError("Invalid email format.");
    } else {
      setEmailError("");
    }
  };

  const handlePhoneChange = (event) => {
    const newPhone = event.target.value;
    setPhoneNumber(newPhone)

    if (/^\d{0,10}$/.test(newPhone)) {
      setPhone(newPhone);
      setPhoneError("Please enter valid mobile number");
    } else {
      setPhoneError("Please enter valid mobile number");
    }
  };

  const handleButtonClick = () => {
    if (name && email && phone) {
      setIsModalOpen2(false)
      openModal3();
      // Perform any necessary actions with the form data
      // Refresh the page
      // window.location.reload();
    } else {
      if (!name) setNameError("Please enter name is required.");
      if (!email) setEmailError("Please enter email_id is required.");
      if (!phone) setPhoneError("Please enter mobile number is required.");
    }
  };

  // ==================== Form - Validation - End ====================

  // ==================== Page - Loading - Start ====================
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData();
      setIsLoading(false);
    }, 500);
  });
  // ==================== Page - Loading - End ====================
  // ==================== Airport Pick Up Drop Start ====================
  const countries = [
    "00:00 AM",
    "00:01 AM",
    "00:02 AM",
    "00:03 AM",
    "00:04 AM",
    "00:05 AM",
  ];

  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedCountry1, setSelectedCountry1] = useState("");
  const [searchTerm1, setSearchTerm1] = useState("");
  const dropdownRef1 = useRef(null);

  useEffect(() => {
    const handleClickOutside1 = (event) => {
      if (
        dropdownRef1.current &&
        !dropdownRef1.current.contains(event.target)
      ) {
        setIsOpen1(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside1);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside1);
    };
  }, []);

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const handleCountryClick1 = (country) => {
    setSelectedCountry1(country);
    setIsOpen1(false);
  };

  const filteredCountries = countries.filter((country) =>
    country.toLowerCase().includes(searchTerm1.toLowerCase())
  );
  // ================
  const luggage = ["1", "2", "3", "4", "5"];

  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedluggage2, setSelectedluggage2] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const dropdownRef2 = useRef(null);

  useEffect(() => {
    const handleClickOutside2 = (event) => {
      if (
        dropdownRef2.current &&
        !dropdownRef2.current.contains(event.target)
      ) {
        setIsOpen2(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside2);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside2);
    };
  }, []);

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen1);
  };

  const handleluggageClick2 = (luggage) => {
    setSelectedluggage2(luggage);
    setIsOpen2(false);
  };

  const filteredluggage = luggage.filter((luggage) =>
    luggage.toLowerCase().includes(searchTerm2.toLowerCase())
  );

  // ==================

  const Flight_arrival_time = [
    "00:00 AM",
    "00:01 AM",
    "00:02 AM",
    "00:03 AM",
    "00:04 AM",
    "00:05 AM",
  ];

  const [isOpen3, setIsOpen3] = useState(false);
  const [selectedFlight_arrival_time3, setSelectedFlight_arrival_time3] =
    useState("");
  const [searchTerm3, setSearchTerm3] = useState("");
  const dropdownRef3 = useRef(null);

  useEffect(() => {
    const handleClickOutside3 = (event) => {
      if (
        dropdownRef3.current &&
        !dropdownRef3.current.contains(event.target)
      ) {
        setIsOpen3(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside3);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside3);
    };
  }, []);

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen1);
  };

  const handleFlight_arrival_timeClick3 = (Flight_arrival_time) => {
    setSelectedFlight_arrival_time3(Flight_arrival_time);
    setIsOpen3(false);
  };

  const filteredFlight_arrival_time = Flight_arrival_time.filter(
    (Flight_arrival_time) =>
      Flight_arrival_time.toLowerCase().includes(searchTerm3.toLowerCase())
  );

  // ==================== Airport Pick Up Drop End ====================

  // Passenger Adult Children Infaunt Start
  const maxTotalPeople = 10;

  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [totalPeople, setTotalPeople] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleAdultChange = (value) => {
    const newAdults = adults + value;
    if (newAdults >= 0 && newAdults <= maxTotalPeople) {
      setAdults(newAdults);
      updateTotalPeople(newAdults, children, infants);
      sessionStorage.setItem("adults", newAdults);
    }
  };

  const handleChildrenChange = (value) => {
    const newChildren = children + value;
    if (newChildren >= 0 && newChildren <= maxTotalPeople - adults) {
      setChildren(newChildren);
      updateTotalPeople(adults, newChildren, infants);
      sessionStorage.setItem("children", newChildren);
    }
  };

  const handleInfantChange = (value) => {
    const newInfants = infants + value;
    if (newInfants >= 0 && newInfants <= maxTotalPeople - adults - children) {
      setInfants(newInfants);
      updateTotalPeople(adults, children, newInfants);
      sessionStorage.setItem("infants", newInfants);
    }
  };

  const updateTotalPeople = (newAdults, newChildren, newInfants) => {
    const newTotal = newAdults + newChildren + newInfants;
    setTotalPeople(newTotal);
    sessionStorage.setItem("totalPeople", newTotal);
  };

  // Passenger Adult Children Infaunt End

  const { number } = useParams();
  return (
    <div className="App">
      {isLoading ? (
        // Loading animation or spinner
        <div className="page_loading_animation">
          <div className="loading_animation"></div>
        </div>
      ) : (
        <div className="CabBooking">
          <div className="home-banner">
            <Navbar />
            <Helpcenter />
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
                      <div className="col-lg-6 bg-img-4 p-0">
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
                  id="from_section"
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
                                <img src={CabBooking6} alt="CabBooking6" />3
                              </span>
                              <span>
                                <img src={CabBooking7} alt="CabBooking7" />6
                              </span>
                              <span>
                                <img src={CabBooking8} alt="CabBooking8" />7
                              </span>
                              <span>
                                <img src={CabBooking9} alt="CabBooking9" />
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
                            <span>Service provided by Lark Transport</span>
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
                      <div
                        className="transfer-details"
                        id="Cancellation-Policy"
                      >
                        <h6>Passenger Details</h6>

                        <div
                          className="full-detail-section container"
                          id="full_detail_section"
                        >
                          <div className="form">
                            {/* <form > */}
                            <form action="" id="contactForm">
                              <p>Pick-up and drop-off details</p>
                              <div>
                                <label htmlFor="">
                                  From - {findDetails.from_city}
                                </label>
                                <br />
                                <i
                                  className="fa-sharp fa-solid fa-location-dot"
                                  style={{ color: "#797979" }}
                                ></i>
                                <input
                                  type="text"
                                  name="from"
                                  value={formik.values.from}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  className="error"
                                  // placeholder="Enter your From"
                                />
                                {formik.touched.from && formik.errors.from && (
                                  <div
                                    style={{
                                      color: "red",
                                      textAlign: "left",
                                      marginTop: "10px",
                                      marginLeft: "0px",
                                      fontSize: "14px",
                                      fontFamily: "auto",
                                    }}
                                  >
                                    {formik.errors.from}
                                  </div>
                                )}
                              </div>
                              <div>
                                <label htmlFor="">
                                  To - {findDetails.to_city}
                                </label>
                                <br />
                                <i
                                  className="fa-sharp fa-solid fa-location-dot"
                                  style={{ color: "#797979" }}
                                ></i>
                                <input
                                  type="text"
                                  name="to"
                                  value={formik.values.to}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  className="error"

                                  // placeholder="Enter your To"
                                />
                                {formik.touched.to && formik.errors.to && (
                                  <div
                                    style={{
                                      color: "red",
                                      textAlign: "left",
                                      marginTop: "10px",
                                      marginLeft: "0px",
                                      fontSize: "14px",
                                      fontFamily: "auto",
                                    }}
                                  >
                                    {formik.errors.to}
                                  </div>
                                )}
                              </div>
                              <br />
                            </form>
                            <Modal
                              isOpen={isModalOpen_s}
                              onRequestClose={() => setIsModalOpen_s(false)}
                              contentLabel="Form Submission Modal"
                              >
                                {/* ================== Get PhoneNumber========== */}
                                {isModalOpen1 && <div>
                                  <div className="modal2">
                                    <div className="modal-content2">
                                      <div className="row">
                                        <div className="col-lg-6">
                                          <img
                                            className="CabBooking17"
                                            src={CabBooking17}
                                            alt=""
                                          />
                                        </div>
                                        <div className="col-lg-6">
                                          {/* <h2>Old User</h2> */}
                                          <div className="form">
                                            <form action="" id="contactsForms">
                                              <div className="veri_form">
                                                <label htmlFor="">
                                                  Please Enter Your Mobile Number
                                                </label>
                                                <br />
                                                <i className="fa-solid fa-phone"></i>
                                                <input
                                                  type="number"
                                                  value={PhoneNumber}
                                                  onChange={(e)=>setPhoneNumber(e.target.value)}
                                                />
                                                {nameError && (
                                                  <div className="error modal_error">
                                                    {nameError}
                                                  </div>
                                                )}
                                              </div>
                                            </form>
                                          </div>
                                          <button
                                            type="button"
                                            // onClick={handleButtonClick}
                                            className="veri_done"
                                            onClick={openModal3}
                                          >
                                            Get OTP
                                          </button>
                                          <br />
                                          {/* <div className="new_user">
                                            Don't have an account yet?
                                            <button
                                              onClick={openModal2}
                                              className="new-old"
                                            >
                                              New User
                                            </button>
                                          </div> */}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>}
                              {/* ========================OTP verification==================== */}
                              {isModalOpen3 && (
                                <div className="otp-verfication-section">
                                  <div className="modal-dialog modal-lg">
                                    <div className="modal-content p-4.5">
                                      <div>
                                        <h2>Mobile Number Verfication</h2>
                                        <p>
                                          Enter the code we just send on your
                                          mobile phone
                                          <input
                                              type="tel"
                                              maxLength={10}
                                              placeholder={PhoneNumber}
                                          />
                                          <i
                                            className="fa-solid fa-pen-to-square"
                                            style={{ color: "#797979" }}
                                          ></i>
                                        </p>

                                        <div className="otp-verifacation">
                                          <span className="otpinput">
                                            <OtpInput
                                              value={otp}
                                              onChange={setOtp}
                                              className="otpinput"
                                              numInputs={4}
                                              renderSeparator={<span></span>}
                                              renderInput={(props) => (
                                                <input {...props} />
                                              )}
                                            />
                                          </span>
                                          <div className="done">
                                            <NavLink
                                              // onClick={scrollToTop}
                                              to="/BookingConfirmed"
                                            >
                                              <button className="Submit book-now">
                                                Done
                                              </button>
                                            </NavLink>
                                          </div>
                                        </div>
                                        <div>
                                          <span>Don’t Receive the code?</span>
                                        </div>
                                        <a>Resend..!</a>
                                        <br />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {/* ====================New User================= */}
                              {isModalOpen2 && (
                                <div className="modal2">
                                  <div className="modal-content2">
                                    <div className="row">
                                      <div className="col-lg-6 col-md-6 col-sm-12">
                                        <img
                                          className="CabBooking17"
                                          src={CabBooking17}
                                          alt=""
                                        />  
                                      </div>  
                                      <div className="col-lg-6 col-md-6 col-sm-12 p-0">
                                        <h2>New User</h2>
                                        <div className="form">
                                          <form action="" id="contactsForms">
                                            <div className="veri_form">
                                              <label htmlFor="">
                                                Please Enter Your Full Name
                                              </label>
                                              <br />
                                              <i className="fa-solid fa-user"></i>

                                              <input
                                                type="text"
                                                value={name}
                                                onChange={handleNameChange}
                                              />
                                              {nameError && (
                                                <div className="error modal_error">
                                                  {nameError}
                                                </div>
                                              )}
                                            </div>
                                            <div className="veri_form">
                                              <label htmlFor="">
                                                Please Enter Your Email ID
                                              </label>
                                              <br />
                                              <i className="fa-solid fa-envelope"></i>

                                              <input
                                                type="email"
                                                value={email}
                                                onChange={handleEmailChange}
                                              />
                                              {emailError && (
                                                <div className="error modal_error">
                                                  {emailError}
                                                </div>
                                              )}
                                            </div>
                                            <div
                                              className="veri_form"
                                              id="Cancellation-Policy"
                                            >
                                              <label htmlFor="">
                                                Please Enter Your Mobile Number
                                              </label>
                                              <br />
                                              <i className="fa-solid fa-phone-volume"></i>
                                              <input
                                                type="tel"
                                                value={phone}
                                                onChange={handlePhoneChange}
                                              />
                                              {phoneError && (
                                                <div className="error modal_error">
                                                  {phoneError}
                                                </div>
                                              )}
                                            </div>
                                          </form>
                                        </div>
                                        <button
                                          type="button"
                                          onClick={handleButtonClick}
                                          className="veri_done"
                                          // onClick={openModal3}
                                        >
                                          Get OTP
                                        </button>
                                        <br />
                                        {/* <div className="new_user">
                                          Already have an account?
                                          <button
                                            onClick={openModal3}
                                            className="new-old"
                                          >
                                            Login
                                          </button>
                                        </div> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Modal>
                          </div>
                        </div>
                      </div>

                      <div className="transfer-details">
                        <h6>Trip from Suvarnabhumi Airport to Pattaya Town</h6>
                        <div className="full-detail-sections Trip_from_Suvarnabhumi">
                          <div className="form airport_to_pattaya_town">
                            {/* <form > */}
                            <form action="" id="contactForm">
                              <div className="input_pickup_tym">
                                <label htmlFor="" className="pickup_tym">
                                  Pickup time
                                </label>
                                <div
                                  className="flight_dropdown"
                                  ref={dropdownRef1}
                                >
                                  <div
                                    className="flight_selected"
                                    onClick={toggleDropdown1}
                                  >
                                    {selectedCountry1
                                      ? selectedCountry1
                                      : "00:00 AM"}
                                  </div>
                                  {isOpen1 && (
                                    <div className="flight_options">
                                      <input
                                        type="text"
                                        placeholder="Search..."
                                        value={searchTerm1}
                                        onChange={(e) =>
                                          setSearchTerm1(e.target.value)
                                        }
                                      />
                                      {filteredCountries.map(
                                        (country, index) => (
                                          <div
                                            key={index}
                                            className="flight_option"
                                            onClick={() =>
                                              handleCountryClick1(country)
                                            }
                                          >
                                            {country}
                                          </div>
                                        )
                                      )}
                                    </div>
                                  )}
                                </div>
                                <p>
                                  You will arrive at your destination (Pattaya
                                  Town) at Monday, November 11, 2024 3:15 AM.
                                  The estimated arrival time may vary depending
                                  on the traffic conditions and other factors.
                                  Please consider this when planning your trip.
                                </p>
                              </div>
                              <div className="number_of_luggage">
                                {/* No of luggage */}
                                <div className="input_pickup_tym">
                                  <label htmlFor="" className="pickup_tym">
                                    Number of luggage
                                  </label>
                                  <div
                                    className="flight_dropdown"
                                    ref={dropdownRef2}
                                  >
                                    <div
                                      className="flight_selected error"
                                      onClick={toggleDropdown2}
                                    >
                                      {selectedluggage2
                                        ? selectedluggage2
                                        : "1"}
                                    </div>

                                    {isOpen2 && (
                                      <div className="flight_options">
                                        <input
                                          type="text"
                                          placeholder="Search..."
                                          value={searchTerm2}
                                          onChange={(e) =>
                                            setSearchTerm2(e.target.value)
                                          }
                                        />
                                        {filteredluggage.map(
                                          (luggage, index) => (
                                            <div
                                              key={index}
                                              className="flight_option"
                                              onClick={() =>
                                                handleluggageClick2(luggage)
                                              }
                                            >
                                              {luggage}
                                            </div>
                                          )
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="Airline">
                                <div className="input_pickup_tyms">
                                  <label htmlFor="" className="pickup_tym">
                                    Airline
                                  </label>
                                  <input
                                    type="text"
                                    name="airline"
                                    value={formik.values.airline}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="error"

                                    // placeholder="Enter your To"
                                  />
                                  {formik.touched.airline &&
                                    formik.errors.airline && (
                                      <div
                                        style={{
                                          color: "red",
                                          textAlign: "left",
                                          marginTop: "10px",
                                          marginLeft: "0px",
                                          fontSize: "14px",
                                          fontFamily: "auto",
                                        }}
                                      >
                                        {formik.errors.airline}
                                      </div>
                                    )}
                                </div>
                              </div>
                              <div className="Air_flight_number">
                                <div className="input_pickup_tyms">
                                  <label htmlFor="" className="pickup_tym">
                                    Air flight number
                                  </label>
                                  <input
                                    type="number"
                                    name="air_flight_no"
                                    value={formik.values.air_flight_no}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="error"

                                    // placeholder="Enter your To"
                                  />
                                  {formik.touched.air_flight_no &&
                                    formik.errors.air_flight_no && (
                                      <div
                                        style={{
                                          color: "red",
                                          textAlign: "left",
                                          marginTop: "10px",
                                          marginLeft: "0px",
                                          fontSize: "14px",
                                          fontFamily: "auto",
                                        }}
                                      >
                                        {formik.errors.air_flight_no}
                                      </div>
                                    )}
                                </div>
                              </div>
                              <div className="Flight_arrival_time">
                                {/* Flight_arrival_time */}
                                <div className="input_pickup_tym">
                                  <label htmlFor="" className="pickup_tym">
                                    Flight arrival time
                                  </label>
                                  <div
                                    className="flight_dropdown error"
                                    ref={dropdownRef3}
                                  >
                                    <div
                                      className="flight_selected "
                                      onClick={toggleDropdown3}
                                    >
                                      {selectedFlight_arrival_time3
                                        ? selectedFlight_arrival_time3
                                        : "00:00 AM"}
                                    </div>

                                    {isOpen3 && (
                                      <div className="flight_options">
                                        <input
                                          type="text"
                                          placeholder="Search..."
                                          value={searchTerm3}
                                          onChange={(e) =>
                                            setSearchTerm3(e.target.value)
                                          }
                                        />
                                        {filteredFlight_arrival_time.map(
                                          (Flight_arrival_time, index) => (
                                            <div
                                              key={index}
                                              className="flight_option"
                                              onClick={() =>
                                                handleFlight_arrival_timeClick3(
                                                  Flight_arrival_time
                                                )
                                              }
                                            >
                                              {Flight_arrival_time}
                                            </div>
                                          )
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>

                      <div className="transfer-details">
                        <h6>Cancellation Policy</h6>
                        <div className="full-detail-section Cancellation-Policy">
                          <p className="para-1">
                            You can cancel up to 24 hours in advance of the
                            experience for a full refund.
                          </p>
                          <ul>
                            <li>
                              For a full refund, you must cancel at least 24
                              hours before the experience’s start time.
                            </li>
                            <li>
                              If you cancel less than 24 hours before the
                              experience’s start time, the amount you paid will
                              not be refunded.
                            </li>
                            <li>
                              Any changes made less than 24 hours before the
                              experience’s start time will not be accepted.
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
                                Total review count and overall rating based on
                                Viator and Tripadvisor reviews
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
                                Informative, easy to understand, friendly,
                                Professional , Helpful
                              </p>
                              <div className="name">Kristyna</div>
                              <div className="Reviews-date">June 23, 2023</div>
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
                                Informative, easy to understand, friendly,
                                Professional , Helpful
                              </p>
                              <div className="name">Kristyna</div>
                              <div className="Reviews-date">June 23, 2023</div>
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
                                Informative, easy to understand, friendly,
                                Professional , Helpful
                              </p>
                              <div className="name">Kristyna</div>
                              <div className="Reviews-date">June 23, 2023</div>
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
                                Informative, easy to understand, friendly,
                                Professional , Helpful
                              </p>
                              <div className="name">Kristyna</div>
                              <div className="Reviews-date">June 23, 2023</div>
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
                              <p>Number Of Travellers</p>
                            </div>
                            <div className="section-1">
                              <p>Choose Date</p>
                              <i
                                className="fa-solid fa-calendar-days"
                                style={{ color: "#797979" }}
                              ></i>
                              <DatePicker
                                selected={selectedDate}
                                onChange={(date) => setSelectedDate(date)}
                                dateFormat="dd/MM/yyyy"
                                value={findDetails.date}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="transfer-details">
                          <h6>Agent Coupon code</h6>
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
                                placeholder="Enter agent coupon code"
                              />
                              <div
                                className="coupon-button"
                                type="submited1234"
                              >
                                Apply
                              </div>
                            </div>
                            {/* <p>
                              <a href="/" alt="">
                                Generate Otp
                              </a>
                            </p> */}
                          </div>
                        </div>
                        <div className="transfer-details">
                          <h6>Customer Coupon code</h6>
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
                                placeholder="Enter agent coupon code"
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
                                Generate Code
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
                                    </label>
                                  </div>
                                </div>
                                <div className="showdailog-modal">
                                  <Modal
                                    isOpen={isModalOpen}
                                    onRequestClose={() => setIsModalOpen(false)}
                                    contentLabel="Example Modal"
                                  >
                                    <div className="dialog">
                                      <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                          <div className="modal-header">
                                            <div>
                                              <img src={CabBooking12} alt="" />
                                              <p>Larkpoints applied</p>
                                              <h2>10THB</h2>
                                              <p>
                                                savings with this Larkpoints
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
                                      onClick={() => setIsModalOpen(false)}
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
                                  {/* <HashLink smooth to="#Form_section"> */}

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
                                    Book Now
                                  </button>
                                  {/* </HashLink> */}
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
        </div>
      )}
    </div>
  );
}
