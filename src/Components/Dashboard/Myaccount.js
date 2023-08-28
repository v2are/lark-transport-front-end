import "../../Css/App.css";
import React, { useState } from "react";
import Navbar from "../../Components/Common/Navbar";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
// Images
import Myaccount1 from "../../Images/Myaccount/Myaccount1.png";
import Myaccount2 from "../../Images/Myaccount/Myaccount2.svg";
import Myaccount3 from "../../Images/Myaccount/Myaccount3.svg";
import Myaccount4 from "../../Images/Myaccount/Myaccount4.svg";
import Myaccount5 from "../../Images/Myaccount/Myaccount5.svg";
import Myaccount6 from "../../Images/Myaccount/Myaccount6.svg";
import Myaccount7 from "../../Images/Myaccount/Myaccount7.svg";
import Myaccount8 from "../../Images/Myaccount/Myaccount8.svg";
import Myaccount9 from "../../Images/Myaccount/Myaccount9.svg";
import Myaccount10 from "../../Images/Myaccount/Myaccount10.svg";
import Myaccount11 from "../../Images/Myaccount/Myaccount11.jpg";
export default function Myaccount() {
  const [value, setValue] = React.useState(0);

  const [formData, setFormData] = useState({
    name: "",
    emailid: "",
    dob: "",
    phoneno: "",
    message: "",
    select: "",
    address: "",
    country: "",
    zipcode: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    emailid: "",
    dob: "",
    phoneno: "",
    message: "",
    select: "",
    address: "",
    country: "",
    zipcode: "",
  });

  const [ setPhno] = useState("");
  const [ setValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
    const inputValue = e.target.value;
    const numbersOnly = /^\d+$/;

    if (inputValue === "" || numbersOnly.test(inputValue)) {
      setValid(true);
      setPhno(inputValue);
    } else {
      setValid(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};

    // Validate Name
    if (formData.name.trim() === "") {
      errors.name = "Please Enter Your name is required !";
    }
    // Validate DOB
    if (formData.dob.trim() === "") {
      errors.dob = "Please Enter Your DOB is required !";
    }
    // Validate PhoneNo
    if (formData.phoneno.trim() === "") {
      errors.phoneno = "Please Enter Your Phone Number is required !";
    } else if (!/\S+@\S+\.\S+/.test(formData.phoneno)) {
      errors.phoneno = "Please Enter Your Phone Number is invalid !";
    }
    // Validate Gender
    if (formData.select.trim() === "") {
      errors.select = "Please select is required !";
    }
    // Validate email
    if (formData.email.trim() === "") {
      errors.email = "Please Enter Your Email ID is required !";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please Enter Your Email ID is invalid !";
    }
    // Validate Address
    if (formData.address.trim() === "") {
      errors.address = "Please Enter Address is required !";
    }
    // Validate Country
    if (formData.country.trim() === "") {
      errors.country = "Please Select Country is required !";
    }
    // Validate Zip Code
    if (formData.zipcode.trim() === "") {
      errors.zipcode = "Please Enter Your Zipcode is required !";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Form submission logic here
      console.log("Form submitted successfully");
    }
  };

  return (
    <div className="Myaccount-pages">
      <Navbar />
      <div className="container">
        <div className="Myaccount">
          <div className="section-1">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card-section-1">
                  <div className="img-name-email">
                    <img src={Myaccount1} alt="" />
                    <div>
                      <p className="name">Rajkumar</p>
                      <p className="email">rajkumar@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="card-section-2">
                  <div className="Your-Lark-Points-img">
                    <img src={Myaccount2} alt="" />
                    <div>
                      <p className="Your-Lark">Your Lark Points</p>
                      <p className="Your-Points">70 Points</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 d-flex">
                {/* <div className="dashboard-content">
                  <p>
                    <img src={Myaccount3} alt="Dashboard" />
                    Dashboard
                  </p>
                  <p>
                    <img src={Myaccount4} alt="Account " />
                    Account
                  </p>
                  <p>
                    <img src={Myaccount5} alt="Bookings" />
                    Bookings
                  </p>
                  <p>
                    <img src={Myaccount6} alt="Lark Points" />
                    Lark Points
                  </p>
                  <p>
                    <img src={Myaccount7} alt="History" />
                    History
                  </p>
                </div> */}
              </div>
            </div>
          </div>
          <div className="dashboard-wrapper-section">
            <div id="wrapper">
              <div id="content-wrapper" className="container d-flex flex-column">
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
                              <p>
                                <img src={Myaccount3} alt="Dashboard" />
                                Dashboard
                              </p>
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
                              <p>
                                <img src={Myaccount4} alt="Account " />
                                Account
                              </p>
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
                              <p>
                                <img src={Myaccount5} alt="Bookings" />
                                Bookings
                              </p>
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
                              <p>
                                <img src={Myaccount6} alt="Lark Points" />
                                Lark Points
                              </p>
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
                              <p>
                                <img src={Myaccount7} alt="History" />
                                History
                              </p>
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
                          <div className="section-2 Dashboard-section">
                            <div className="Dashboard">
                              <h3>Dashboard</h3>
                              <p>Update and manage your account information</p>
                              <div className="Completed-Pending">
                                <button className="completed">
                                  <p className="number">05</p>
                                  <p>Completed</p>
                                </button>
                                <button className="pending">
                                  <p className="number">02</p>
                                  <p>Pending</p>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-2"
                          role="tabpanel"
                          aria-labelledby="pills-profile-tab"
                        >
                          <div className="section-2 Account-settings">
                            <div className="Dashboard">
                              <h3>Account settings</h3>
                              <p>Update and manage your account information</p>
                              <div className="form" onSubmit={handleSubmit}>
                                <div className="row">
                                  <div className="col-lg-6 col-md-6 col-sm-12">
                                    {/* Name */}
                                    <div className="input-form">
                                      <label>Name</label>
                                      <br />
                                      <input
                                        type="text"
                                        placeholder="Rajkumar R"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                      />
                                      {formErrors.name && (
                                        <p
                                          className="error"
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            paddingLeft: "0%",
                                            marginTop: "-20px",
                                            marginBottom: "20px",
                                            fontSize: "14px",
                                            fontFamily: "auto",
                                          }}
                                        >
                                          {formErrors.name}
                                        </p>
                                      )}
                                    </div>
                                    {/* Email - ID */}
                                    <div className="input-form">
                                      <label>Email ID</label>
                                      <br />
                                      <input
                                        type="text"
                                        placeholder="rajkumar@gmail.com"
                                        id="emailid"
                                        name="emailid"
                                        value={formData.emailid}
                                        onChange={handleChange}
                                      />
                                      {formErrors.emailid && (
                                        <p
                                          className="error"
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            paddingLeft: "0%",
                                            marginTop: "-20px",
                                            marginBottom: "20px",
                                            fontSize: "14px",
                                            fontFamily: "auto",
                                          }}
                                        >
                                          {formErrors.emailid}
                                        </p>
                                      )}
                                    </div>
                                    {/* DOB */}
                                    <div className="input-form">
                                      <label>Date of Birth</label>
                                      <br />
                                      <input
                                        type="text"
                                        placeholder="28/07/2000"
                                        // id="dob"
                                        name="dob"
                                        id="datepicker"
                                        style={{
                                          width: "276",
                                        }}
                                        value={formData.dob}
                                        onChange={handleChange}
                                      />
                                      {formErrors.dob && (
                                        <p
                                          className="error"
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            paddingLeft: "0%",
                                            marginTop: "-20px",
                                            marginBottom: "20px",
                                            fontSize: "14px",
                                            fontFamily: "auto",
                                          }}
                                        >
                                          {formErrors.dob}
                                        </p>
                                      )}
                                    </div>
                                    {/* Mobile Number */}
                                    <div className="input-form">
                                      <label>Mobile Number</label>
                                      <br />
                                      <input
                                        type="text"
                                        placeholder="8986525654"
                                        id="phnoneo"
                                        value={formData.phoneno}
                                        onChange={handleChange}
                                      />
                                      {formErrors.phoneno && (
                                        <p
                                          className="error"
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            paddingLeft: "0%",
                                            marginTop: "-20px",
                                            marginBottom: "20px",
                                            fontSize: "14px",
                                            fontFamily: "auto",
                                          }}
                                        >
                                          {formErrors.phoneno}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                  <div className="col-lg-6 col-md-6 col-sm-12">
                                    {/* Gender */}
                                    <div className="input-form">
                                      <label for="">Gender</label>
                                      <br />
                                      <select
                                        name=""
                                        id="select"
                                        value={formData.select}
                                        onChange={handleChange}
                                      >
                                        {formErrors.select && (
                                          <p
                                            className="error"
                                            style={{
                                              color: "red",
                                              textAlign: "left",
                                              paddingLeft: "0%",
                                              marginTop: "-20px",
                                              marginBottom: "20px",
                                              fontSize: "14px",
                                              fontFamily: "auto",
                                            }}
                                          >
                                            {formErrors.select}
                                          </p>
                                        )}
                                        <option value="Select">Select</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Transgender">
                                          Transgender
                                        </option>
                                      </select>
                                    </div>
                                    {/* Address */}
                                    <div className="input-form">
                                      <label>Address</label>
                                      <br />
                                      <input
                                        type="text"
                                        placeholder="3615 Willow Greene Drive, Montgomery"
                                        id="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                      />
                                      {formErrors.address && (
                                        <p
                                          className="error"
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            paddingLeft: "0%",
                                            marginTop: "-20px",
                                            marginBottom: "20px",
                                            fontSize: "14px",
                                            fontFamily: "auto",
                                          }}
                                        >
                                          {formErrors.address}
                                        </p>
                                      )}
                                    </div>
                                    {/* Country */}
                                    <div className="input-form">
                                      <label>Country</label>
                                      <br />
                                      <input
                                        type="text"
                                        placeholder="India"
                                        id="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                      />
                                      {formErrors.country && (
                                        <p
                                          className="error"
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            paddingLeft: "0%",
                                            marginTop: "-20px",
                                            marginBottom: "20px",
                                            fontSize: "14px",
                                            fontFamily: "auto",
                                          }}
                                        >
                                          {formErrors.country}
                                        </p>
                                      )}
                                    </div>
                                    {/* Zip Code */}
                                    <div className="input-form">
                                      <label>Zip code</label>
                                      <br />
                                      <input
                                        type="text"
                                        placeholder="132 566"
                                        id="zipcode"
                                        value={formData.zipcode}
                                        onChange={handleChange}
                                      />
                                      {formErrors.zipcode && (
                                        <p
                                          className="error"
                                          style={{
                                            color: "red",
                                            textAlign: "left",
                                            paddingLeft: "0%",
                                            marginTop: "-20px",
                                            marginBottom: "20px",
                                            fontSize: "14px",
                                            fontFamily: "auto",
                                          }}
                                        >
                                          {formErrors.zipcode}
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="myacc-sub-btn">
                                  <button className="Submit" type="submit">
                                    Submit
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-3"
                          role="tabpanel"
                          aria-labelledby="pills-contact-tab"
                        >
                          <div className="section-2 Bookings">
                            <div className="Dashboard">
                              <h3>Bookings</h3>
                              <p>Update and manage your account information</p>
                              <table>
                                <div>
                                  <tr className="booking1">
                                    <th className="sno1">S.No</th>
                                    <th className="sno2">Name of activity</th>
                                    <th className="sno3"></th>
                                    <th>Date</th>
                                    <th>Payment</th>
                                    <th>Activity status</th>
                                    <th>Feedback S.No</th>
                                  </tr>
                                  <tr className="booking2">
                                    <td className="sno1">1</td>
                                    <td className="sno2">
                                      <span>Hotel</span>
                                    </td>
                                    <td className="sno3">
                                      Park Hotels and Re...
                                    </td>
                                    <td className="mdy">Jun 23, 2023</td>
                                    <td className="amt">1000THB</td>
                                    <td className="Activity-status status-pending ">
                                      <img src={Myaccount8} alt="" />
                                      pending
                                    </td>
                                    <td>
                                      <div
                                        className="modal fade"
                                        id="exampleModalToggle"
                                        aria-hidden="true"
                                        aria-labelledby="exampleModalToggleLabel"
                                        tabindex="-1"
                                      >
                                        <div className="modal-dialog modal-dialog-centered">
                                          <div className="modal-content">
                                            <div className="modal-body">
                                              <h6 className="heading">
                                                Name of Activity
                                              </h6>
                                              <div className="current-place">
                                                <img
                                                  src={Myaccount11}
                                                  alt="Myaccount11"
                                                />
                                                <p>
                                                  Fly Board, Banana Boat And
                                                  Sailing Activity...
                                                </p>
                                              </div>
                                              <div className="content">
                                                <h6 className="heading">
                                                  Messages
                                                </h6>
                                                <textarea
                                                  style={{
                                                    resize: "none",
                                                  }}
                                                  rows="5"
                                                  maxlength="230"
                                                  cols="50"
                                                  placeholder="  Lorem Ipsum is simply dummy
                                                 "
                                                ></textarea>
                                              </div>
                                              <div className="rating">
                                                <h6 className="heading">
                                                  Star Rating
                                                </h6>
                                                <div className="srat-rating">
                                                  <Box
                                                    sx={{
                                                      "& > legend": { mt: 2 },
                                                    }}
                                                  >
                                                    <Rating
                                                      name="simple-controlled"
                                                      value={value}
                                                      onChange={(
                                                        event,
                                                        newValue
                                                      ) => {
                                                        setValue(newValue);
                                                      }}
                                                    />
                                                  </Box>
                                                </div>
                                              </div>
                                              <div className="submit-btn">
                                                <button>Submit</button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <a
                                        className="btn btn-primary read-review"
                                        data-bs-toggle="modal"
                                        href="#exampleModalToggle"
                                        role="button"
                                      >
                                        write Review
                                      </a>
                                    </td>
                                  </tr>
                                  <tr className="booking3">
                                    <td className="sno1">2</td>
                                    <td className="sno2">
                                      <span>Transfer</span>
                                    </td>
                                    <td className="sno3">
                                      Transfer-suzuki swift car...
                                    </td>
                                    <td className="mdy">May 12, 2023</td>
                                    <td className="amt">999THB</td>
                                    <td className="Activity-status status-completed">
                                      <img src={Myaccount9} alt="" />
                                      Completed
                                    </td>
                                    <td>
                                      <a
                                        className="btn btn-primary read-review"
                                        data-bs-toggle="modal"
                                        href="#exampleModalToggle"
                                        role="button"
                                      >
                                        Read Review
                                      </a>
                                    </td>
                                  </tr>
                                  <tr className="booking4">
                                    <td className="sno1">3</td>
                                    <td className="sno2">
                                      <span>Activities</span>
                                    </td>
                                    <td className="sno3">Fly Board, Ban...</td>
                                    <td className="mdy">Mar 07, 2023</td>
                                    <td className="amt">1520THB</td>
                                    <td className="Activity-status status-completed">
                                      <img src={Myaccount9} alt="" />
                                      Completed
                                    </td>
                                    <td>
                                      <a
                                        className="btn btn-primary read-review"
                                        data-bs-toggle="modal"
                                        href="#exampleModalToggle"
                                        role="button"
                                      >
                                        Read Review
                                      </a>
                                    </td>
                                  </tr>
                                  <tr className="booking5">
                                    <td className="sno1">4</td>
                                    <td className="sno2">
                                      <span>Transfer</span>
                                    </td>
                                    <td className="sno3">
                                      suzuki swift car...
                                    </td>
                                    <td className="mdy">Feb 23, 2023</td>
                                    <td className="amt">500THB</td>
                                    <td className="Activity-status status-completed">
                                      <img src={Myaccount9} alt="" />
                                      Completed
                                    </td>
                                    <td>
                                      <div
                                        className="modal fade"
                                        id="exampleModalToggles"
                                        aria-hidden="true"
                                        aria-labelledby="exampleModalToggleLabel"
                                        tabindex="-1"
                                      >
                                        <div className="modal-dialog modal-dialog-centered">
                                          <div className="modal-content">
                                            <div className="modal-body">
                                              <h6 className="heading">
                                                Name of Activity
                                              </h6>
                                              <div className="current-place">
                                                <img
                                                  src={Myaccount11}
                                                  alt="Myaccount11"
                                                />
                                                <p>
                                                  Fly Board, Banana Boat And
                                                  Sailing Activity...
                                                </p>
                                              </div>
                                              <div className="content">
                                                <h6 className="heading">
                                                  Messages
                                                </h6>
                                                <textarea
                                                  style={{
                                                    resize: "none",
                                                  }}
                                                  rows="5"
                                                  maxlength="230"
                                                  placeholder="   Lorem Ipsum is simply dummy
                                                  text of the printing and
                                                  typesetting industry. Lorem
                                                  Ipsum has been the industry's
                                                  standard dummy text ever since
                                                 "
                                                ></textarea>
                                              </div>
                                              <div className="rating">
                                                <h6 className="heading">
                                                  Star Rating
                                                </h6>
                                                <div className="srat-rating">
                                                  <Box
                                                    sx={{
                                                      "& > legend": { mt: 2 },
                                                    }}
                                                  >
                                                    <Rating
                                                      name="simple-controlled"
                                                      value={value}
                                                      onChange={(
                                                        event,
                                                        newValue
                                                      ) => {
                                                        setValue(newValue);
                                                      }}
                                                    />
                                                  </Box>
                                                </div>
                                              </div>
                                              <div className="submit-btn">
                                                <button>Submit</button>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <a
                                        className="btn btn-primary read-review"
                                        data-bs-toggle="modal"
                                        href="#exampleModalToggles"
                                        role="button"
                                      >
                                        Read Review
                                      </a>
                                    </td>
                                  </tr>
                                </div>
                              </table>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-4"
                          role="tabpanel"
                          aria-labelledby="pills-contact-tab"
                        >
                          <div className="section-2 Lark-Points">
                            <div className="Dashboard">
                              <h3>Lark Points</h3>
                              <p>Update and manage your account information</p>
                              <table>
                                <div>
                                  <tr>
                                    <th className="sno1">S.No</th>
                                    <th>Name of activity</th>
                                    <th>Date</th>
                                    <th>Earned</th>
                                    <th>Reduction</th>
                                    <th>Total Balance</th>
                                  </tr>
                                  <tr>
                                    <td className="sno1">1</td>
                                    <td className="sno2">
                                      <span>Hotel</span>
                                    </td>
                                    <td className="sno3">
                                      Park Hotels and Re...
                                    </td>
                                    <td className="mdy">Jun 23, 2023</td>
                                    <td className="Earned">+10 Points</td>
                                    <td className="Reduction">-</td>
                                    <td className="TotalBalance">70 Points</td>
                                  </tr>
                                  <tr>
                                    <td className="sno1">2</td>
                                    <td className="sno2">
                                      <span>Transfer</span>
                                    </td>
                                    <td className="sno3">
                                      Transfer -suzuki swift car...
                                    </td>
                                    <td className="mdy">May 12, 2023</td>
                                    <td className="Earned">-</td>
                                    <td className="Reduction">-10 Points</td>
                                    <td className="TotalBalance">70 Points</td>
                                  </tr>
                                  <tr>
                                    <td className="sno1">3</td>
                                    <td className="sno2">
                                      <span>Activities</span>
                                    </td>
                                    <td className="sno3">Fly Board, Ban...</td>
                                    <td className="mdy">Mar 07, 2023</td>
                                    <td className="Earned">+10 Points</td>
                                    <td className="Reduction">-</td>
                                    <td className="TotalBalance">70 Points</td>
                                  </tr>
                                  <tr>
                                    <td className="sno1">4</td>
                                    <td className="sno2">
                                      <span>Transfer</span>
                                    </td>
                                    <td className="sno3">
                                      suzuki swift car...
                                    </td>
                                    <td className="mdy">Feb 23, 2023</td>
                                    <td className="Earned">-</td>
                                    <td className="Reduction">-10 Points</td>
                                    <td className="TotalBalance">70 Points</td>
                                  </tr>
                                </div>
                              </table>
                            </div>
                            <p className="Note1-lark-points">
                              *Note1 lark points = 1.25 THB
                            </p>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-5"
                          role="tabpanel"
                          aria-labelledby="pills-contact-tab"
                        >
                          <div className="section-2 History">
                            <div className="Dashboard">
                              <h3>History</h3>
                              <p>Update and manage your account information</p>
                              <table>
                                <div>
                                  <tr>
                                    <th className="sno1">S.No</th>
                                    <th className="sno2">Name of activity</th>
                                    <th className="sno3"></th>
                                    <th className="sno3">Date</th>
                                    <th>Activity status</th>
                                    <th>Invoice</th>
                                  </tr>
                                  <tr>
                                    <td className="sno1">1</td>
                                    <td className="sno2">
                                      <span>Hotel</span>
                                    </td>
                                    <td className="sno3">
                                      Park Hotels and Re...
                                    </td>
                                    <td className="mdy">Jun 23, 2023</td>
                                    <td className="Activity-status status-pending">
                                      <img src={Myaccount8} alt="" />
                                      pending
                                    </td>
                                    <td>
                                      <img src={Myaccount10} alt="" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="sno1">2</td>
                                    <td className="sno2">
                                      <span>Transfer</span>
                                    </td>
                                    <td className="sno3">
                                      Transfer -suzuki swift car...
                                    </td>
                                    <td className="mdy">May 12, 2023</td>
                                    <td className="Activity-status status-completed">
                                      <img src={Myaccount9} alt="" />
                                      Completed
                                    </td>
                                    <td>
                                      <img src={Myaccount10} alt="" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="sno1">3</td>
                                    <td className="sno2">
                                      <span>Activities</span>
                                    </td>
                                    <td className="sno3">Fly Board, Ban...</td>
                                    <td className="mdy">Mar 07, 2023</td>
                                    <td className="Activity-status status-completed">
                                      <img src={Myaccount9} alt="" />
                                      Completed
                                    </td>
                                    <td>
                                      <img src={Myaccount10} alt="" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="sno1">4</td>
                                    <td className="sno2">
                                      <span>Transfer</span>
                                    </td>
                                    <td className="sno3">suzuki swift car...</td>
                                    <td className="mdy">Feb 23, 2023</td>
                                    <td className="Activity-status status-completed">
                                      <img src={Myaccount9} alt="" />
                                      Completed
                                    </td>
                                    <td>
                                      <img src={Myaccount10} alt="" />
                                    </td>
                                  </tr>
                                </div>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
