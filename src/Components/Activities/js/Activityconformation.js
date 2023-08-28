import "../../../Css/App.css";
import "../../Activities/Css/Activity.css";
import React, { useEffect, useState } from "react";
import Navbar from "../../Common/Navbar";
import Helpcenter from "../../Common/Helpcenter";
import Footer from "../../Common/Footer";
import BookingConfirmed1 from "../../../Images/BookingConfirmed/BookingConfirm1.png";
import Activity18 from "../../../Images/Activities/Activity18.svg";
import Activity19 from "../../../Images/Activities/Activity19.svg";
import Activity20 from "../../../Images/Activities/Activity20.svg";
import Activity21 from "../../../Images/Activities/Activity21.svg";
import Activity22 from "../../../Images/Activities/Activity22.svg";
import Activity23 from "../../../Images/Activities/Activity23.svg";
import Activity24 from "../../../Images/Activities/Activity24.svg";
import Activity25 from "../../../Images/Activities/Activity25.svg";
import Activity26 from "../../../Images/Activities/Activity26.svg";
import Activity27 from "../../../Images/Activities/Activity27.svg";
import star from "../../../Images/Activities/star.png";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import Activitymember from "./Activitymember";
export default function Activityconformation() {
  const [selectedDate, setSelectedDate] = useState(null);
  useEffect(() => {
    document.title = "LarkHolidays-Booking Confirmed";
  });

  // Page Start in Top
  const startToTop = () => {
    window.scrollTo(0);
  };

  const [showedIndex] = useState(16);
  const [selectedIndex] = useState("");
  const [companyList] = useState([
    {
      Image: Activity20,
      Head: "Thailand Honeymoon Special - Bangkok, Phuket & Krabi",
      Text: "Hulhumale",
      Price: "1599THB",
      Offer: "1999THB",
    },
    {
      Image: Activity21,
      Head: "Thailand Honeymoon Special - Bangkok, Phuket & Krabi",
      Text: "Hulhumale",
      Price: "1599THB",
      Offer: "1999THB",
    },
    {
      Image: Activity22,
      Head: "Thailand Honeymoon Special - Bangkok, Phuket & Krabi",
      Text: "Hulhumale",
      Price: "1599THB",
      Offer: "1999THB",
    },
    {
      Image: Activity23,
      Head: "Thailand Honeymoon Special - Bangkok, Phuket & Krabi",
      Text: "Hulhumale",
      Price: "1599THB",
      Offer: "1999THB",
    },
    {
      Image: Activity24,
      Head: "Thailand Honeymoon Special - Bangkok, Phuket & Krabi",
      Text: "Hulhumale",
      Price: "1599THB",
      Offer: "1999THB",
    },
    {
      Image: Activity25,
      Head: "Thailand Honeymoon Special - Bangkok, Phuket & Krabi",
      Text: "Hulhumale",
      Price: "1599THB",
      Offer: "1999THB",
    },
    {
      Image: Activity26,
      Head: "Thailand Honeymoon Special - Bangkok, Phuket & Krabi",
      Text: "Hulhumale",
      Price: "1599THB",
      Offer: "1999THB",
    },
    {
      Image: Activity27,
      Head: "Thailand Honeymoon Special - Bangkok, Phuket & Krabi",
      Text: "Hulhumale",
      Price: "1599THB",
      Offer: "1999THB",
    },
  ]);
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
                  <h4>Your Activity Details:</h4>
                  <div className="transfer-details-section">
                    <p className="para1">SEA LIFE Ocean World Tickets Map</p>
                    <p className="para2">Booking Details</p>
                    <div className="transfer-details">
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
                          <Activitymember />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <img src={Activity18} alt="" />
              </div>
            </div>
          </div>

          <div className="SEA-LIFE">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12">
                  <div className="wtm">
                    <h5>
                      <i
                        className="fa-solid fa-location-dot"
                        style={{ color: "#0e982d" }}
                      ></i>
                      SEA LIFE Ocean World Tickets Map
                    </h5>
                    <h6>Sea life bangkok ocean world</h6>
                    <p>
                      Siam Paragon Building, B1, B2 Floor, <br /> 991 ถนน
                      พระรามที่ ๑ แขวง ปทุมวัน <br /> เขตปทุมวัน กรุงเทพมหานคร
                      10330,
                      <br /> Thailand
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <img src={Activity19} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="releted-places">
            <h3>Related Products</h3>
            <h5>You might also like Activities</h5>
            <div className="container">
              <div className="related-card">
                <div className="row">
                  {companyList
                    .filter(
                      (item) =>
                        !selectedIndex || item.distension === selectedIndex
                    )
                    .slice(0, showedIndex)
                    .map((data, index) => {
                      return (
                        <div
                          className="col-lg-3 col-md-3 col-sm-12 p-0"
                          key={index}
                        >
                          <div className="cards-sections">
                            <img src={data.Image} alt="" />
                            <h4>{data.Head}</h4>
                            <div className="d-flex">
                              <div>
                                <p className="star">
                                  <img src={star} alt="" />
                                  <img src={star} alt="" />
                                  <img src={star} alt="" />
                                  <img src={star} alt="" />
                                  <img src={star} alt="" />
                                </p>
                                <h6>{data.Text}</h6>
                              </div>
                              <div>
                                <p className="price">
                                  Starting from <span>1999THB</span>{" "}
                                </p>
                                <p className="offer">{data.Price}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
