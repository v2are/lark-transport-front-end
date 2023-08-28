import React, { useState } from "react";
import Navbar from "../../Common/Navbar";
import "../../Activities/Css/Activity.css";
import Activity11 from "../../../Images/Activities/Activity11.png";
import Activity12 from "../../../Images/Activities/Activity12.png";
import Activity13 from "../../../Images/Activities/Activity13.png";
import Activity14 from "../../../Images/Activities/Activity14.png";
import Activity15 from "../../../Images/Activities/Activity15.svg";
import Activity16 from "../../../Images/Activities/Activity16.png";
import Activity17 from "../../../Images/Activities/Activity17.png";
import Modal from "react-modal";
import { NavLink } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Activitymember from "./Activitymember";

export default function ActivityDetail() {
  const [selectedDate, setSelectedDate] = useState(null);

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

  // Page Start in Top
  const startToTop = () => {
    window.scrollTo(0);
  };
  // ====================  Check - Box - model - End ====================

  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="ActivityDetail">
      <Navbar />
      <div className="container">
        <div className="head pt-5">
          <h4>
            Koh Larn (Coral Island) and Koh Sak Day Trip with Water Activities
            from Pattaya
          </h4>
          <div className="pt-3">
            <button className="btn1 ">
              <i className="fa-regular fa-clock"></i> 4D/3N
            </button>
            <button className="btn2">
              <i className="fa-sharp fa-solid fa-location-dot"></i> Pattaya
            </button>
            <button className="btn3">+2K Booked</button>
            <button className="btn4">4.5 Ratings</button>
          </div>
        </div>

        <div className="banner-img pt-3">
          <div className="row">
            <div className="col-lg-7 bg-img-1">
              <img src={Activity11} alt="" />
            </div>
            <div className="col-lg-5 bg-img-2">
              <img src={Activity12} alt="" />

              <div className="row">
                <div
                  className="col-lg-6 bg-img-3"
                  style={{
                    padding: "6px 0 0 12px",
                  }}
                >
                  <img src={Activity13} alt="" />
                </div>
                <div
                  className="col-lg-6 bg-img-4"
                  style={{
                    padding: "6px 0 0 6px",
                  }}
                >
                  <img src={Activity14} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="highlight py-4">
            <a href="#highlight">Highlights</a>
            <a href="#">Amenties</a>
            <a href="#package-details">Packages Details</a>
            <a href="">Location</a>
            <a href="">Cancellation policy</a>
            <a href="">Reviews</a>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 p-0">
            <div className="inclusion-exclusion ">
              <div className="hightlight-content inc-exc" id="highlight">
                <h6>Highlights</h6>
                <ul>
                  <li>
                    Have a blast with your friends on your next visit to Tanjung
                    Benoa by trying thrilling water sports!
                  </li>
                  <li>
                    Satisfy your hunger for an adrenaline rush and go donut
                    boating, banana boat riding, jet skiing, and more
                  </li>
                  <li>
                    Join a 3-hour mangrove tour or go on a fun glass bottom boat
                    ride to see more of the island
                  </li>
                  <li>
                    Take advantage of the convenient round-trip hotel transfers
                    around Bali for a comfortable day
                  </li>
                </ul>
              </div>
              <div className="Packages-Details inc-exc">
                <h6>Packages Details</h6>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 ">
                    <h4>Included</h4>
                    <p>
                      <span className="material-symbols-outlined">done_all</span>
                      &nbsp;Insurance provided by the operator
                    </p>
                    <p>
                      <span className="material-symbols-outlined">done_all</span>
                      &nbsp;15-minute banana boat experience
                    </p>
                    <p>
                      <span className="material-symbols-outlined">done_all</span>
                      &nbsp;Water sports equipment
                    </p>
                    <p>
                      <span className="material-symbols-outlined">done_all</span>
                      &nbsp;Instructor
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <h4>Excluded</h4>
                    <p>
                      <i className="fa-solid fa-xmark"></i>&nbsp;Towel
                    </p>
                    <p>
                      <i className="fa-solid fa-xmark"></i>&nbsp;Locker
                    </p>
                    <p>
                      <i className="fa-solid fa-xmark"></i>&nbsp;Other items not
                      specified
                    </p>
                  </div>
                </div>
              </div>
              <div className="location inc-exc mt-3">
                <div className="row">
                  <div className="col-lg-7">
                    <h4>
                      <i className="fa-solid fa-location-dot"></i> SEA LIFE Ocean
                      World Tickets Map
                    </h4>
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;Siam Paragon Building, B1, B2
                      Floor, Thailand
                    </p>
                    <hr />
                    <h5>Near by Landmark</h5>
                    <div className="place">
                      <p>
                        <i className="fa-solid fa-location-dot"></i> From Airport{" "}
                        <br />
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;1.2km</span>
                      </p>
                      <p>
                        {" "}
                        <i className="fa-solid fa-location-dot"></i> From pattaya
                        busstop <br />{" "}
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;2.2km</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <img src={Activity15} alt="" />
                  </div>
                </div>
              </div>
              <div
                className="Packages-Options inc-exc mt-4"
                id="PackagesOptions"
              >
                <h6>Packages Options</h6>
                <div>
                  <label>
                    <div className="row">
                      <input
                        type="radio"
                        value="option1"
                        checked={selectedOption === "option1"}
                        onChange={handleRadioChange}
                        className="form-check-input"
                        name="exampleRadios"
                        id="exampleRadios1"
                      />
                      <div className="col-lg-4">
                        <img src={Activity16} alt="" />
                      </div>
                      <div className="col-lg-6 p-0">
                        <h5>Royal Alcazar + Marine + Indian Buffet Lunch</h5>
                        <h5>Tickets</h5>
                        <p>8 Hours</p>
                      </div>
                      <div className="col-lg-2">
                        <div>
                          <p>2999THB</p>
                          <h2>2000 THB</h2>
                          <button>Select </button>
                        </div>
                      </div>
                      <p className="cancel-policy">
                        {" "}
                        <i
                          className="fa-solid fa-check-double"
                          style={{ color: "#22b867" }}
                        ></i>{" "}
                        Cancellation Policy <div className="vr"></div>{" "}
                        <span>View More Details</span>
                      </p>
                      {selectedOption === "option1" && (
                        <div className="selectedoption">
                          <hr />
                          <h5>Age Policy:</h5>
                          <ul>
                            <li>
                              Children aged 0-1 year with a height of 0-99 cm
                              can enter free of charge.
                            </li>
                            <li>
                              Child rates are applicable for the age group 2-12
                              years with a height of 100-140 cm.{" "}
                            </li>
                            <li>
                              Adult rates are applicable for individuals aged
                              13+ years with a height of 141+ cm.
                            </li>
                          </ul>

                          <h5>Price Includes</h5>
                          <ul>
                            <li>
                              Admission to Safari Park (for 1 round of 30-45
                              minutes)
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </label>
                  <label>
                    <div className="row">
                      <input
                        type="radio"
                        value="option2"
                        checked={selectedOption === "option2"}
                        onChange={handleRadioChange}
                        className="form-check-input"
                        id="exampleRadios1"
                      />
                      <div className="col-lg-4">
                        <img src={Activity17} alt="" />
                      </div>
                      <div className="col-lg-6 p-0">
                        <h5>Marine Park Admission VIP Ticket + Lunch</h5>
                        <h5>Tickets</h5>
                        <p>8 Hours</p>
                      </div>
                      <div className="col-lg-2">
                        <div>
                          <p>2999THB</p>
                          <h2>1200 THB</h2>
                          <button>Select </button>
                        </div>
                      </div>
                      <p className="cancel-policy">
                        <i
                          className="fa-solid fa-check-double"
                          style={{ color: "#22b867" }}
                        ></i>{" "}
                        Cancellation Policy <div className="vr"></div>{" "}
                        <span>View More Details</span>
                      </p>
                      {selectedOption === "option2" && (
                        <div className="selectedoption">
                          <hr />
                          <h5>Age Policy:</h5>
                          <ul>
                            <li>
                              Children aged 0-1 year with a height of 0-99 cm
                              can enter free of charge.
                            </li>
                            <li>
                              Child rates are applicable for the age group 2-12
                              years with a height of 100-140 cm.{" "}
                            </li>
                            <li>
                              Adult rates are applicable for individuals aged
                              13+ years with a height of 141+ cm.
                            </li>
                          </ul>

                          <h5>Price Includes</h5>
                          <ul>
                            <li>
                              Admission to Safari Park (for 1 round of 30-45
                              minutes)
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </label>
                </div>
              </div>
              <div></div>

              <div className="Cancellation-Policy inc-exc">
                <h6>Cancellation Policy</h6>
                <div>
                  <p>
                    <i
                      className="fa-solid fa-check-double"
                      style={{ color: "#228838" }}
                    ></i>
                    You can cancel up to 24 hours in advance of the experience
                    for a full refund.
                  </p>
                  <p>
                    <i
                      className="fa-solid fa-check-double"
                      style={{ color: "#228838" }}
                    ></i>
                    For a full refund, you must cancel at least 24 hours before
                    the experience’s start time.
                  </p>
                  <p>
                    <i
                      className="fa-solid fa-check-double"
                      style={{ color: "#228838" }}
                    ></i>
                    If you cancel less than 24 hours before the experience’s
                    start time, the amount you paid will not be refunded.
                  </p>
                  <p>
                    <i
                      className="fa-solid fa-check-double"
                      style={{ color: "#228838" }}
                    ></i>
                    Any changes made less than 24 hours before the experience’s
                    start time will not be accepted.
                  </p>
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
                        Total review count and overall rating based on Viator
                        and Tripadvisor reviews
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
                    <p className="review-show">Showing 1-10 of 602 reviews</p>
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
                        Best tour guide , was speaking English , Informative,
                        easy to understand, friendly, Professional , Helpful
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
                        Best tour guide , was speaking English , Informative,
                        easy to understand, friendly, Professional , Helpful
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
                        Best tour guide , was speaking English , Informative,
                        easy to understand, friendly, Professional , Helpful
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
                        Best tour guide , was speaking English , Informative,
                        easy to understand, friendly, Professional , Helpful
                      </p>
                      <div className="name">Kristyna</div>
                      <div className="Reviews-date">June 23, 2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
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
                                  {/* <img src={CabBooking12} alt="" /> */}
                                  <p>Larkpoints applied</p>
                                  <h2>10THB</h2>
                                  <p>savings with this Larkpoints</p>
                                </div>
                              </div>
                              <div className="modal-body">
                                <h3>Done!</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button onClick={() => setIsModalOpen(false)}>
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
                      <a href="#PackagesOptions">
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
                          <NavLink
                            to="/Activityconformation"
                            onClick={startToTop}
                          >
                            Book Now
                          </NavLink>
                        </button>
                      </a>
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
            <div className="Travelers-Choose-Date">
              <div className="transfer-details">
                <h6>Choose Date and Travelers</h6>
                <div className="full-detail-section full-detail-section-1">
                  <div className="section-1">
                    <i
                      className="fa-solid fa-calendar-days"
                      style={{ color: "#797979" }}
                    ></i>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Mon, Jun 28"
                    />
                  </div>
                  <div className="section-2 decrease-increase">
                    {/* <i
                      className="fa-solid fa-calendar-days"
                      style={{ color: "#797979" }}
                    ></i> */}
                    <Activitymember />
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
                    <div className="coupon-button" type="submited1234">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
