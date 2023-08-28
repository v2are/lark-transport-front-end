import Navbar from "../../Components/Common/Navbar";
import Footer from "../../Components/Common/Footer";
import Helpcenter from "../../Components/Common/Helpcenter";
import "../../Css/App.css";
import React, { useEffect } from "react";

import BookingConfirmed1 from "../../Images/BookingConfirmed/BookingConfirm1.png";
import BookingConfirmed3 from "../../Images/BookingConfirmed/BookingConfirm3.png";
import BookingConfirmed4 from "../../Images/BookingConfirmed/BookingConfirm4.png";
import BookingConfirmed5 from "../../Images/BookingConfirmed/BookingConfirm5.png";
import BookingConfirmed6 from "../../Images/BookingConfirmed/BookingConfirm6.png";
import BookingConfirmed7 from "../../Images/BookingConfirmed/BookingConfirm7.png";
import CabBooking6 from "../../Images/CabBooking/CabBooking6.png";
import CabBooking7 from "../../Images/CabBooking/CabBooking7.png";
import CabBooking8 from "../../Images/CabBooking/CabBooking8.png";
import CabBooking9 from "../../Images/CabBooking/CabBooking9.png";

export default function BookingConfirmed() {
  useEffect(() => {
    document.title = "LarkHolidays-Booking Confirmed";
  });

  // const startToTop = () => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   window.scrollTo(0, 0);
  // };
  
  return (
    <div className="BookingConfirmed-page">
      <Navbar />
      <Helpcenter />
      <div className="Bookingconfirmed">
        <div className="container">
          <h3>
            <img src={BookingConfirmed1} alt="" />
            Booking Confirmed
          </h3>
          <div className="We-will-soon">
            <p>We will soon receive an confirmation</p>
            <div>
              <input type="text" placeholder="UR347HDNXN234" />
              <span>Booking Reference No:</span>
            </div>

            <div className="You-have-earned">
              <p>You have earned 10+ Points from this Booking!</p>
            </div>

            <div className="We-Recommend">
              <p>
                We Recommend that you print this page now, and bring it with you
                for check in at the Vehicle you have been send an email with a
                copy of these confirmed Booking Details.
              </p>
            </div>

            <div className="Download">
              <button>Download</button>
            </div>
          </div>

          <div className="Your-Transfer-Details">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="Your-Transfer-Details-section-1">
                  <h4>Your-Transfer-Details</h4>
                  <div className="transfer-details-section">
                    <p>Your Booking has been Confirmed</p>

                    <div className="section1">
                      <i
                        className="fa-sharp fa-solid fa-location-dot"
                        style={{
                          color: "#31af12",
                          margin: "0 12px 0 0",
                          fontSize: "30px",
                        }}
                      ></i>
                      <div>
                        <p>From Phuket Airport</p>
                        <p className="pickup-drop">
                          Pick-up outside the airport. Call staff for pick up
                          after flight arrival
                        </p>
                        <p className="pickup-drop">July 23, 2023 -10:35 AM</p>
                      </div>
                    </div>
                    <img className="midline" src={BookingConfirmed3} alt="" />
                    <div className="section2">
                      <i
                        className="fa-sharp fa-solid fa-location-dot"
                        style={{
                          color: "#f21c1c",
                          margin: "0 12px 0 0",
                          fontSize: "30px",
                        }}
                      ></i>
                      <div>
                        <p>To Hotel</p>
                        <p className="pickup-drop">Novotel Phuket</p>
                        <p className="pickup-drop">July 24, 2023 -12:00 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <iframe title="This is a unique title"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7961712.058901661!2d96.99270603748052!3d13.000307634169468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304d8df747424db1%3A0x9ed72c880757e802!2sThailand!5e0!3m2!1sen!2sin!4v1688812922124!5m2!1sen!2sin"
                  loading="lazy"
                  // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="PassengerDetails">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="PassengerDetails-section1">
                  <h4>Passenger Details:</h4>
                  <div className="full-detail-section full-detail-section-1">
                    <div>
                      <p className="cc">Compact Car</p>
                      <p className="ss">
                        Suzuki Swift <span>or similar</span>
                      </p>
                    </div>
                    <div className="pas-det-heading">
                      <p className="p-d-h">
                        <img src={BookingConfirmed5} alt="" />
                        <span>Travellers</span>
                        <p className="p-d-c">2 Adults,2 Childs</p>
                      </p>
                      <p className="p-d-h">
                        <img src={BookingConfirmed6} alt="" />
                        <span>Travel Date</span>
                        <p className="p-d-c">Mon July23, 2023</p>
                      </p>
                      <p className="p-d-h">
                        <img src={BookingConfirmed7} alt="" />
                        <span>No of Vechicles</span>
                        <p className="p-d-c">2</p>
                      </p>
                    </div>
                    <div className="inclusion">
                      <p>
                        <span>
                          <img src={CabBooking6} alt="" />3
                        </span>
                        <span>
                          <img src={CabBooking7} alt="" />6
                        </span>
                        <span>
                          <img src={CabBooking8} alt="" />7
                        </span>
                        <span>
                          <img src={CabBooking9} alt="" />
                          A/C
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="PassengerDetails-section2">
                  <div className="details-section">
                    <img src={BookingConfirmed4} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
