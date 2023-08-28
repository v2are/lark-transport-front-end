import React from "react";
import Activity3 from "../../../Images/Activities/Activity3.png";
import Activity4 from "../../../Images/Activities/Activity4.png";
import Activity5 from "../../../Images/Activities/Activity5.png";
import Activity6 from "../../../Images/Activities/Activity6.png";
import Home2 from "../../../Images/Home/Home2.png";
import Home3 from "../../../Images/Home/Home3.png";
import Home4 from "../../../Images/Home/Home4.png";
import Home5 from "../../../Images/Home/Home5.png";
import Home6 from "../../../Images/Home/Home6.png";
import Home7 from "../../../Images/Home/Home7.png";
import Home8 from "../../../Images/Home/Home8.png";
import Home9 from "../../../Images/Home/Home9.png";
import Home10 from "../../../Images/Home/Home10.png";
import Home11 from "../../../Images/Home/Home11.png";
import Home12 from "../../../Images/Home/Home12.png";
import Home13 from "../../../Images/Home/Home13.png";
// import Home14 from "../../../Images/Home/Home14.svg";
import Home15 from "../../../Images/Home/Home15.png";
import Home16 from "../../../Images/Home/Home16.png";

// import Home17 from "../Images/Home/Home17.png";
import { NavLink } from "react-router-dom";
const Transfercardview = ({ selectedValue }) => {
  const cardData = [
    {
      id: 1,
      category: "Water Place",
      Image: Activity3,
      Head: "Safari World Tickets, Bangkok",
      Text: "Starting From ₹ 999",
      Price: "₹ 999",
      recplc: "Recommended Places",
    },
    {
      id: 2,
      category: "Water Place",
      Image: Activity4,
      Head: "Safari World Tickets, Bangkok",
      Text: "Starting From ₹ 999",
      Price: "₹ 888",
    },
    {
      id: 3,
      category: "Popular Place",
      Image: Activity5,
      Head: "Safari World Tickets, Bangkok",
      Text: "Starting From ₹ 999",
      Price: "₹ 777",
    },
    {
      id: 4,
      category: "Safari",
      Image: Activity6,
      Head: "Safari World Tickets, Bangkok",
      Text: "Starting From ₹ 999",
      Price: "₹ 666",
    },
    {
      id: 5,
      category: "Popular Place",
      Image: Activity5,
      Head: "Safari World Tickets, Bangkok",
      Text: "Starting From ₹ 999",
      Price: "₹ 555",
    },
    {
      id: 6,
      category: "Safari",
      Image: Activity6,
      Head: "Safari World Tickets, Bangkok",
      Text: "Starting From ₹ 999",
      Price: "₹ 1999",
    },
    {
      id: 7,
      category: "Water Place",
      Image: Activity3,
      Head: "Safari World Tickets, Bangkok",
      Text: "Starting From ₹ 999",
      Price: "₹ 1888",
      recplc: "Recommended Places",
    },
    {
      id: 8,
      category: "Water Place",
      Image: Activity4,
      Head: "Safari World Tickets, Bangkok",
      Text: "Starting From ₹ 999",
      Price: "₹ 1777",
    },
    {
      id: 9,
      category: "option1",
      Image: Activity5,
      Head: "Safari World Tickets, Bangkok",
      Text: "Starting From ₹ 999",
      Price: "₹ 1666",
    },
    {
      id: 10,
      category: "Safari",
      Image: Activity6,
      Head: "Safari World Tickets, Bangkok",
      Text: "Starting From ₹ 999",
      Price: "₹ 1555",
    },
    {
      id: 11,
      category: "option3",
      Image: Activity5,
      Head: "Safari World Tickets, Bangkok",
      Text: "Starting From ₹ 999",
      Price: "₹ 1444",
    },
    {
      id: 12,
      category: "Safari",
      Image: Activity6,
      Head: "Safari World Tickets, Bangkok",
      Text: "Starting From ₹ 999",
      Price: "₹ 1333",
    },
  ];

  // Filter the cards based on the selected value
  const filteredCards = selectedValue
    ? cardData.filter((card) => card.category === selectedValue)
    : cardData;

  return (
    <div>
      <div className="row">
        {filteredCards.map((card) => (
          <div className="col-lg-3 col-md-3 col-sm-12 p-0" key={card.id}>
            <NavLink to={"/ActivityDetail"}>
              <div className="card-section">
                <img src={card.Image} alt="" />
                <h4>{card.Head}</h4>
                <h6>{card.Text}</h6>
                <p>{card.Price}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transfercardview;
