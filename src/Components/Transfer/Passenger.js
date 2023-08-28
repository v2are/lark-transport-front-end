import React, { useState } from "react";
// import "../../Css/App.css";
import "../../Css/Passenger.css";

const Passenger = () => {
  const maxPersons = 20; // Specify the maximum number of persons allowed
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [totalPersons, setTotalPersons] = useState(adults + children + infants);

  const handleIncrease = (type) => {
    if (type === "adults") {
      setAdults((prevAdults) =>
        Math.min(prevAdults + 1, maxPersons - children)
      );
    } else if (type === "children") {
      setChildren((prevChildren) =>
        Math.min(prevChildren + 1, maxPersons - adults)
      );
    } else if (type === "infants") {
      setInfants((prevInfants) =>
        Math.min(prevInfants + 1, maxPersons - infants)
      );
    }
  };

  const handleDecrease = (type) => {
    if (type === "adults") {
      setAdults((prevAdults) => Math.max(prevAdults - 1, 1));
    } else if (type === "children") {
      setChildren((prevChildren) => Math.max(prevChildren - 1, 0));
    } else if (type === "infants") {
      setInfants((prevInfants) => Math.max(prevInfants - 1, 0));
    }
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleUpdate = () => {
    setTotalPersons(adults + children + infants);
    setShowDropdown(false);
  };

  return (
    <div>
      <div>
        <label className="traveler-main-input">
          <i className="fa-solid fa-user"></i>
          <input
            type="number"
            onClick={handleDropdownClick}
            value={totalPersons}
            placeholder="Passenger"
            placeholderTextColor="red"
            keyboardType="numeric"
            name="pax"
            readOnly
          />
          <span>Passenger</span>
        </label>
      </div>
      {showDropdown && (
        <div className="travellers-section">
          <p className="travellers-heading">No of Travelers</p>
          <div className="row p-3">
            <div className="col-lg-6 col-md-6 col-12">

              <label>
                Adult: <br />
                <span>12 Years and Above </span>
              </label>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div>
                <div className="traveler-input">
                  <button
                    type="button"
                    className="minus"
                    onClick={() => handleDecrease("adults")}
                  >
                    -
                  </button>
                  <input
                    // type="number"
                    value={adults}
                    onChange={(e) => setAdults(parseInt(e.target.value))}
                    min="1"
                    max={maxPersons - children}
                  />
                  <button
                    type="button"
                    className="plus"
                    onClick={() => handleIncrease("adults")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row p-3">
            <div className="col-lg-6 col-md-6 col-12">
              <label>
                Children:
                <br />
                <span>2 to 11 Years</span>
              </label>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="traveler-input">
                <button
                  type="button"
                  className="minus"
                  onClick={() => handleDecrease("children")}
                >
                  -
                </button>
                <input
                  //   type="number"
                  value={children}
                  onChange={(e) => setChildren(parseInt(e.target.value))}
                  min="0"
                  max={maxPersons - adults}
                />

                <button
                  type="button"
                  className="plus"
                  onClick={() => handleIncrease("children")}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="row p-3">
            <div className="col-lg-6 col-md-6 col-12">
              <label>
                Infants:
                <br />
                <span>Below 2 Years</span>
              </label>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="traveler-input">
                <button
                  type="button"
                  className="minus"
                  onClick={() => handleDecrease("infants")}
                >
                  -
                </button>
                <input
                  //   type="number"
                  value={infants}
                  onChange={(e) => setChildren(parseInt(e.target.value))}
                  min="0"
                  max={maxPersons - infants}
                />

                <button
                  type="button"
                  className="plus"
                  onClick={() => handleIncrease("infants")}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <button className="traveller-update" onClick={handleUpdate}>
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default Passenger;
