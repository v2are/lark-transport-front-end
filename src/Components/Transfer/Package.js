import React, { useEffect, useState, useReducer, useRef } from "react";
import axios from "axios";
import "../../Css/App.css";
import Navbar from "../../Components/Common/Navbar";
import { NavLink } from "react-router-dom";
import CabSearch3 from "../../Images/CabSearch/CabSearch3.gif";
import CabSearch4 from "../../Images/CabSearch/CabSearch4.gif";
import CabSearch13 from "../../Images/CabSearch/CabSearch13.svg";
import CabSearch14 from "../../Images/CabSearch/CabSearch14.png";
import CabSearch15 from "../../Images/CabSearch/CabSearch15.png";
import CabSearch16 from "../../Images/CabSearch/CabSearch16.png";
import CabSearch17 from "../../Images/CabSearch/CabSearch17.png";
import CabSearch18 from "../../Images/CabSearch/CabSearch18.png";
import CabSearch20 from "../../Images/CabSearch/CabSearch20.gif";
import Footer from "../../Components/Common/Footer";
// import Datepickers from "../Common/Datepickers";
import Helpcenter from "../../Components/Common/Helpcenter";
// useNavigate
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import Passenger from "./Passenger";
var countries1 = [];
var countries2 = [];

export default function CabSearch() {
  // =============== Country Select Option Start==================
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [responseMessage, setResponseMessage] = useState(null);

  const [inputValue, setInputValue] = useState({
    from_city: localStorage.getItem("fromCity") || "",
    to_city: localStorage.getItem("toCity") || "",
    current_date: localStorage.getItem("currentDate") || "",
  });

  useEffect(() => {
    const currentUrl = window.location.href;

    const url = new URL(currentUrl);
    const fromCity = url.pathname.split("/")[2];
    const toCity = url.pathname.split("/")[3];
    const currentDate = url.searchParams.get("date") ?? getNextSecondDateFromToday();


    localStorage.removeItem("fromCity");
    localStorage.removeItem("toCity");
    localStorage.removeItem("currentDate");

    localStorage.setItem("fromCity", fromCity);
    localStorage.setItem("toCity", toCity);
    localStorage.setItem("currentDate", currentDate);

    setInputValue({
      ...inputValue,
      from_city: localStorage.getItem("fromCity") || "",
      to_city: localStorage.getItem("toCity") || "",
      current_date: localStorage.getItem("currentDate") || "",
    });
  }, [window.location.href]);

  // console.log(inputValue);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}public/api/cities?country_id=1`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  const handlechange = (e) => {
    const newUrl = `${
      window.location.origin
    }/Package/${e.target.value.replace(
      /\s+/g,
      ""
    )}/${inputValue.to_city.replace(/\s+/g, "")}?date=${
      inputValue.current_date
      }`;
     // window.history.pushState({ path: newUrl }, "", newUrl);
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handletoCity = (e) => { 
    const newUrl = `${
      window.location.origin
    }/Package/${inputValue.from_city.replace(
      /\s+/g,
      ""
    )}/${e.target.value.replace(/\s+/g, "")}?date=${
      inputValue.current_date
      }`;
      //window.history.pushState({ path: newUrl }, "", newUrl);
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  

  useEffect(() => {}, [
    inputValue.from_city,
    inputValue.to_city,
    inputValue.current_date,
  ]);

  const handleSubmitt = () => {
    const newUrl = `${
      window.location.origin
    }/Package/${inputValue.from_city.replace(
      /\s+/g,
      ""
    )}/${inputValue.to_city.replace(/\s+/g, "")}?date=${
      inputValue.current_date
      }`;
    window.history.pushState({ path: newUrl }, "", newUrl);

    setInputValue({
      ...inputValue,
      from_city: localStorage.getItem("fromCity") || "",
      to_city: localStorage.getItem("toCity") || "",
      current_date: localStorage.getItem("currentDate") || "",
    });
  };
  // =============== Country Select Option End==================
  // Country Select Option Start
  const [country1, setCountry1] = useState([]);
  const [country2, setCountry2] = useState([]);
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [searchText, setSearchText] = useState("");

  const dropdownRef1 = useRef(null);
  const dropdownRef2 = useRef(null);

  const handleCountry1Change = (value) => {
    setCountry1(value);
    setIsDropdown1Open(false);
  };

  const handleCountry2Change = (value) => {
    setCountry2(value);
    setIsDropdown2Open(false);
  };

  const handleDocumentClick = (event) => {
    if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
      setIsDropdown1Open(false);
    }
    if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
      setIsDropdown2Open(false);
    }
  };

  const handleSwap = () => {
    const tempCountry = inputValue;
    inputValue(inputValue);
    inputValue(tempCountry);
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const filteredCountries1 = countries1.filter((country) =>
    country.toLowerCase().includes(searchText.toLowerCase())
  );

  const filteredCountries2 = countries2.filter((country) =>
    country.toLowerCase().includes(searchText.toLowerCase())
  );
  // Country Select Option End

  // Common Date Picker Start
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleDateChange = (date) => {
    const diffInDays = Math.floor(
      (date - selectedDate) / (1000 * 60 * 60 * 24)
    );
    const newStartDate = new Date(startDate);
    newStartDate.setDate(startDate.getDate() + diffInDays);
    const newEndDate = new Date(endDate);
    newEndDate.setDate(endDate.getDate() + diffInDays);

    setSelectedDate(date);
    setStartDate(newStartDate);
    setEndDate(newEndDate);

    // Update URL with the new date using window.history.pushState or similar
    const formattedDate = date.toISOString().substring(0, 10);

    // window.history.pushState(
    //   {},
    //   "",
    //   `/Package/${from}/${to}?date=${formattedDate}`
    // );
  };

  const handleDayClick = (clickedDate) => {
    // alert("clickedDate",clickedDate)
    // console.log("clickedDate",clickedDate)
    const diffInDays = Math.floor(
      (clickedDate - selectedDate) / (1000 * 60 * 24 * 60)
    );
    const newStartDate = new Date(clickedDate);
    newStartDate.setDate(clickedDate.getDate() - diffInDays);
    const newEndDate = new Date(clickedDate);
    newEndDate.setDate(clickedDate.getDate() + (6 - diffInDays));

    setSelectedDate(clickedDate);
    setStartDate(newStartDate);
    setEndDate(newEndDate);

    // Update URL with the clicked date using window.history.pushState or similar
    const formattedDate = clickedDate.toISOString().substring(0, 10);


    fecthApiData(
      API +
        "api/vechile-search?from=" +
        from +
        "&to=" +
        to +
        "&date=" +
        formattedDate
    );


    // window.history.pushState(
    //   {},
    //   "",
    //   `/Package/${from}/${to}?date=${formattedDate}`
    // );

  };

  const renderSevenDays = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      const isSelected =
        currentDate.toDateString() === selectedDate.toDateString();
      days.push(
        <div
          key={i}
          className={`day ${isSelected ? "selected" : ""}`}
          onClick={() => handleDayClick(currentDate)}
          style={{
            backgroundColor: isSelected ? "green" : "transparent",
            cursor: "pointer",
          }}
        >
          {currentDate.toLocaleString("default", {
            weekday: "short",
            month: "short",
            day: "numeric",
          })}
        </div>
      );
    }
    return days;
  };
  //Date Session Storage Start
  useEffect(() => {
    // Update session storage whenever the Date
    sessionStorage.setItem("selectedDate", selectedDate.toString());
  });
  //Date Session Storage End
  // Common Date Picker End

  // Passenger Adult Children Infaunt Start
  const maxTotalPeople = 10;

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [totalPeople, setTotalPeople] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => { 
    setTotalPeople(0)
    handleAdultChange(0);
    handleChildrenChange(0);
    handleInfantChange(0);

  },[])

  const handleAdultChange = (value) => {
    const newAdults = parseInt(adults) + parseInt(value)
    if (newAdults >= 0 && newAdults <= maxTotalPeople) {
      setAdults(newAdults);
      updateTotalPeople(newAdults, children, infants);
      sessionStorage.setItem("adults", newAdults);
    }
  };

  const handleChildrenChange = (value) => {
    const newChildren = parseInt(children) +parseInt(value);

    if (newChildren >= 0 && newChildren <= maxTotalPeople - adults) {
      setChildren(newChildren);
      updateTotalPeople(adults, newChildren, infants);
      sessionStorage.setItem("children", newChildren);
    }
  };

  const handleInfantChange = (value) => {
    const newInfants =parseInt(infants) + parseInt(value);

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

  const { from } = useParams();
  const { to } = useParams();
  const queryParameters = new URLSearchParams(window.location.search);
  const current_date = queryParameters.get("date") ?? getNextSecondDateFromToday();
  // console.log(current_date);

  const navigate = useNavigate(); // <-- hooks must be INSIDE the component

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("refresh prevented");
    // console.log(e.target.date.value);
    var booking_date = e.target.date.value;
    var routes_with_price_id = e.target.routes_with_price_id.value;
    var from_value = e.target.from.value;
    var to_value = e.target.to.value;
localStorage.setItem("TravelersCount",totalPeople)
    axios
      .post(`${process.env.REACT_APP_API_URL}public/api/booking`, {
        routes_with_price_id: routes_with_price_id,
        date: booking_date,
        from: from_value,
        to: to_value,
        adult: adults,
        child: children,
        infint: infants,
      })
      .then(function (response) {
        var slat = response.data.id;
        // console.log(response.data);
        // this.props.history.push("/Cabbooking")

        navigate("/Cabbooking/" + slat);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // date Pikcer
  // const [selectedDate, setSelectedDate] = useState(new Date());

  // console.log(selectedDate.getDate());
const [existTravellersCount,setexistTravellersCount]=useState("")
  useEffect(() => {
    // Get the date from the URL and update the state if present
    const urlSearchParams = new URLSearchParams(window.location.search);
    const dateParam = urlSearchParams.get("date");
    if (!existTravellersCount) {
      let total = parseInt(localStorage.getItem("TravelersCount"))
      if (total) {
        setTotalPeople(total)
      } else { 
        setTotalPeople(totalPeople)
      }
    }
    
    if (dateParam) {
      setSelectedDate(new Date(dateParam));
    }
  }, [existTravellersCount]);

  const handleChangeDate = (date) => {
    setSelectedDate(date);

    // Update the URL with the selected date
    const urlSearchParams = new URLSearchParams(window.location.search);
    urlSearchParams.set("date", date.toISOString().slice(0, 10));
    const newUrl = window.location.pathname + "?" + urlSearchParams.toString();
    window.history.pushState({ path: newUrl }, "", newUrl);
  };
  // Page Start in Top
  const startToTop = () => {
    window.scrollTo(0);
  };

  // Per Page Title
  useEffect(() => {
    document.title = "LarkHolidays - Cab Search";
  });

  const { id } = useParams();

  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  // console.log(id);

  let API = `${process.env.REACT_APP_API_URL}public/`;

  const [mediaList, setMediaList] = useState([]);

  const fecthApiData = async (url) => {
    // console.log("url",url)
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log("data",data.data)
      setMediaList(data.data);
      updateCity();
    } catch (error) {
      console.log(error);
    }
    forceUpdate();
  };

  const fetchCityApi = async (url) => {
    try {
      const res = await fetch(url);
      const cities = await res.json();
      // console.log(cities.cities);
      var citiesnew = cities.cities;
      // console.log(citiesnew);

      const cityNames = Object.values(citiesnew);
      // console.log(cityNames);
      countries1 = cityNames;
      countries2 = cityNames;

      setCountry1(cityNames[0]);
      setCountry2(cityNames[0]);
    } catch (error) {
      console.log(error);
    }
    forceUpdate();
  };

  function updateCity() {
    // console.log("fghjk " + to);
    document.getElementById("to_city").value = to;
    // document.getElementById("from_city").value = from;
  }

  var renderAfterCalled = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      if (!renderAfterCalled.current) {

        fetchCityApi(API + "api/cities?country_id=1");

        var booking_date =
          selectedDate.getFullYear() +
          "-0" +
          parseInt(selectedDate.getMonth() + 1) +
          "-" +
          selectedDate.getDate();
        fecthApiData(
          API +
            "api/vechile-search?from=" +
            from +
            "&to=" +
            to +
            "&date=" +
            current_date
        );
      }

      renderAfterCalled.current = true;
    }, 500);
  }, [reducerValue]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let findDetails = mediaList;

  // console.log(findDetails);
  // let Navigate = useNavigate();

  // Page Loading Start
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const [data1, setData1] = useState(null); // State to store fetched data

  useEffect(() => {
    // Simulate fetching data (replace with actual data fetching logic)
    setTimeout(() => {
      // Once data is fetched, update state
      setData1(/* Your fetched data */);
      setIsLoading(false); // Set loading to false
    }, 5000); // Simulating a 2-second delay
  }, []);
  // Page Loading End

  const [number, setNumber] = useState("");

  const handleInputChange = (event) => {
    setNumber(event.target.value);
  };

    function getNextSecondDateFromToday ()  { 
var currentDate = new Date();

var nextDay = new Date(currentDate);
nextDay.setDate(currentDate.getDate() + 1);

var secondNextDay = new Date(currentDate);
secondNextDay.setDate(currentDate.getDate() + 2);

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

return formatDate(secondNextDay)

  }


  return (
    <div className="App">
      {isLoading ? (
        // Loading animation or spinner
        <div className="page_loading_animation">
          <div className="loading_animation"></div>
        </div>
      ) : (
        <div className="CabSearch">
          <div className="home-banner">
            <Navbar />
            <Helpcenter />

            {/* <button
              onClick={() => {
                updateCity();
              }}
            >
              click
            </button> */}
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
                              color: isActive ? "#fff" : "#818181",
                              backgroundColor: isActive ? "#0E982D" : "#fff",
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
                <div className="place-to-place">
                  <div className="container">
                    <form>
                      <div className="input-group">
                        <div className="from_to">
                          {/* <i className="fa-solid fas-locations-dots fa-location-dot"></i> */}
                          {/* <div ref={dropdownRef1}>
                            <input
                              // id="from_city"
                              type="text"
                              // value={country1}
                              readOnly
                              name="from_city"
                              value={inputValue.from_city}
                              onChange={handlechange}
                              className={`country-selector ${
                                isDropdown1Open ? "open" : ""
                              }`}
                              onClick={() => {
                                setIsDropdown1Open(!isDropdown1Open);
                                setIsDropdown2Open(false);
                              }}
                            />
                            {isDropdown1Open && (
                              <div className=" dropdown dropdown-content">
                                <input
                                  type="text"
                                  className="search_bar"
                                  placeholder="Search..."
                                  value={searchText}
                                  onChange={(e) =>
                                    setSearchText(e.target.value)
                                  }
                                />
                                {filteredCountries1.map((value, index) => (
                                  <div>
                                    {data?.cities !== undefined &&
                                    data?.cities !== null ? (
                                      <>
                                        {Object.entries(data?.cities).map(
                                          ([key, value]) => (
                                            <div
                                              key={key}
                                              value={value}
                                              // key={index}
                                              onClick={() =>
                                                handleCountry1Change(value)
                                              }
                                              className={`country-option ${
                                                value === country1
                                                  ? "selected"
                                                  : ""
                                              }`}
                                            >
                                              <i className="fa-solid country_location  fa-location-dot"></i>{" "}
                                              {value}
                                            </div>
                                          )
                                        )}
                                      </>
                                    ) : null}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div> */}
                            <i
                              className="fa-solid fas-locations-dots fa-location-dot"
                              style={{
                                color: "#4db84d",
                                fontSize: "24px",
                              }}
                            ></i>
                          <select
                            className="mb-3 form-control custom-select"
                            name="from_city"
                            value={inputValue.from_city}
                            onChange={handlechange}
                          >
                            <option value="">Select an option</option>
                            {data?.cities !== undefined &&
                            data?.cities !== null ? (
                              <>
                                {Object.entries(data?.cities).map(
                                  ([key, value]) => (
                                    <option key={key} value={value}>
                                      {value}
                                    </option>
                                  )
                                )}
                              </>
                            ) : null}
                          </select>
                        </div>

                        {/* <CountrySwapper /> */}
                      </div>
                      {/* Swap Button */}
                      <label className="search">
                        <img onClick={handleSwap} src={CabSearch20} alt="" />
                      </label>

                      <div className="input-group">
                        <div className="from_to">
                          {/* <div ref={dropdownRef2}>
                            <i
                              className="fa-solid fas-locations-dots fa-location-dot"
                              style={{
                                color: "#4db84d",
                                fontSize: "24px",
                              }}
                            ></i>
                            <input
                              id="to_city"
                              type="text"
                              // value={country2}
                              readOnly
                              className={`country-selector ${
                                isDropdown2Open ? "open" : ""
                              }`}
                              onClick={() => {
                                setIsDropdown2Open(!isDropdown2Open);
                                setIsDropdown1Open(false);
                              }}
                              onChange={(e) => setSearchText(e.target.value)}
                            />
                            {isDropdown2Open && (
                              <div className="dropdown-content dropdown">
                                <input
                                  type="text"
                                  className="search_bar"
                                  placeholder="Search..."
                                  value={searchText}
                                  onChange={(e) =>
                                    setSearchText(e.target.value)
                                  }
                                />
                                {filteredCountries2.map((country, index) => (
                                  <div
                                    key={index}
                                    onClick={() =>
                                      handleCountry2Change(country)
                                    }
                                    className={`country-option ${
                                      country === country2 ? "selected" : ""
                                    }`}
                                  >
                                    <i
                                      className="fa-solid country_location fa-location-dot"
                                      style={{
                                        color: "#4db84d",
                                        fontSize: "24px",
                                      }}
                                    ></i>{" "}
                                    {country}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div> */}
                          <i
                            className="fa-solid fas-locations-dots fa-location-dot"
                            style={{
                              color: "#4db84d",
                              fontSize: "24px",
                            }}
                          ></i>
                          <select
                            className="mb-3 form-control custom-select"
                            name="to_city"
                            value={inputValue.to_city}
                            onChange={handletoCity}
                          >
                            <option value="">Select an option</option>
                            {data?.cities !== undefined &&
                            data?.cities !== null ? (
                              <>
                                {" "}
                                {Object.entries(data?.cities).map(
                                  ([key, value]) => (
                                    <option key={key} value={value}>
                                      {value}
                                    </option>
                                  )
                                )}
                              </>
                            ) : null}
                          </select>
                        </div>
                      </div>
                      <div className="input-group">
                        <span>
                          <div className="centered">
                            <i className="fa-solid fa-calendar-days"></i>
                              <DatePicker
                                name="date"
                                //  format='yyyy-MM-dd'
                                dateFormat="yyyy-MM-dd"
                                selected={selectedDate}
                                onChange={handleDateChange}
                                placeholderText="Pick a date"
                              />
                          </div>
                          {/* <input
                            type="date"
                            className="mb-3 form-control custom-select"
                            name="current_date"
                            value={inputValue.current_date}
                            onChange={handlechange}
                            min={new Date().toISOString().split("T")[0]}
                          /> */}
                        </span>
                      </div>

                      <div className="input-group">
                        {/* <Passenger /> */}
                        <div>
                          <div>
                            <label className="traveler-main-input">
                              <i className="fa-solid fa-user"></i>
                              <input
                                type="text"
                                value={`${totalPeople}` }
                                readOnly
                                name="pax"
                                onChange={handleInputChange}
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                              />
                              {/* <span>Passenger</span> */}
                            </label>
                          </div>
                          {dropdownOpen && (
                            <div className="travellers-section">
                              <p className="travellers-heading">
                                No of Travelers
                              </p>
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
                                      <div
                                        className="minus"
                                        onClick={() => handleAdultChange(-1)}
                                      >
                                        -
                                      </div>
                                      <span className="ad_cl_fn">
                                        {" "}
                                        {adults}
                                      </span>
                                      <div
                                        className="plus"
                                        onClick={() => handleAdultChange(1)}
                                      >
                                        +
                                      </div>{" "}
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
                                    <div
                                      className="minus"
                                      onClick={() => handleChildrenChange(-1)}
                                    >
                                      -
                                    </div>
                                    <span className="ad_cl_fn">
                                      {" "}
                                      {children}
                                    </span>

                                    <div
                                      className="plus"
                                      onClick={() => handleChildrenChange(1)}
                                    >
                                      +
                                    </div>
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
                                    <div
                                      className="minus"
                                      onClick={() => handleInfantChange(-1)}
                                    >
                                      -
                                    </div>
                                    <span className="ad_cl_fn"> {infants}</span>

                                    <div
                                      className="plus"
                                      onClick={() => handleInfantChange(1)}
                                    >
                                      +
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {dropdownOpen && (
                                <div>
                                  <button
                                    className="traveller-update"
                                    onClick={() => setDropdownOpen(false)}
                                  >
                                    Done
                                  </button>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                      <input
                        type="submit"
                        value="Submit"
                        className="submit-button search-btn"
                        onClick={handleSubmitt}
                      />
                      {/* <button className="search-btn">Update</button> */}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 25 Results in Thailand Section Start */}
          <div className="Result-in-Thailand">
            <div className="container">
              <div className="tdy-tmr-date-picker">
                {/* <Datepickers /> */}
                <div className="seven_days">
                  {renderSevenDays()}
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    placeholderText="Pick a date"
                  />
                </div>
              </div>

              <p>{findDetails.length} Results in Thailand</p>
              {findDetails.map((data, index) => {
                return (
                  <div className="card">
                    <div key={index} className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 row-1">
                        <div className="card-section">
                          <img src={data.vechile_image} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-6 col-sm-12">
                        <div className="car-details">
                          <div className="card-content-section">
                            <h6>
                              {data.vechile_name} <span>or similar</span>
                            </h6>
                            <p>
                              <span>
                                <img src={CabSearch3} alt="CabSearch3" />
                                {data.from_city_text}
                              </span>
                              &nbsp;---&nbsp;
                              <span>
                                <img src={CabSearch4} alt="CabSearch4" />{" "}
                                {data.to_city_text}
                              </span>
                            </p>
                            <div className="inside-of-car">
                              {/* <span>
                              <img src={CabSearch12} alt="" />2
                            </span> */}
                              <span>
                                {data.is_Instant_confirmation !== 1 ? (
                                  <span>
                                    <img src={CabSearch13} alt="" />4
                                  </span>
                                ) : (
                                  ""
                                )}
                              </span>
                              <span>
                                {data.is_free_cancellation !== 1 ? (
                                  <span>
                                    <img src={CabSearch14} alt="" />5
                                  </span>
                                ) : (
                                  ""
                                )}
                              </span>
                              <span>
                                {data.is_mobile_voucher !== 1 ? (
                                  <span>
                                    <img src={CabSearch15} alt="" />
                                    A/C
                                  </span>
                                ) : (
                                  ""
                                )}
                              </span>
                            </div>
                          </div>
                          <div className="enclusion">
                            {data.is_free_cancellation !== 1 ? (
                              <span className="enclusion-para">
                                <img src={CabSearch16} alt="" />
                                <p>Free cancellation</p>
                              </span>
                            ) : (
                              ""
                            )}
                            {data.is_mobile_voucher !== 1 ? (
                              <span className="enclusion-para">
                                <img src={CabSearch17} alt="" />
                                <p>Mobile voucher</p>
                                <p>{data.Mobilevoucher1}</p>
                              </span>
                            ) : (
                              ""
                            )}
                            {data.is_Instant_confirmation !== 1 ? (
                              <span className="enclusion-para">
                                <img src={CabSearch18} alt="" />
                                <p>Instant confirmation</p>
                              </span>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-3 col-sm-12 row-3">
                        <div className="total-price">
                          <div className="day-price">
                            <p>
                              {data.price}
                              <br />
                              <span> Per Vehicle</span>
                            </p>
                          </div>
                          <form onSubmit={onSubmit}>
                            <input
                              type="hidden"
                              name="routes_with_price_id"
                              value={data.id}
                            />
                            <input
                              type="hidden"
                              name="date"
                              value={
                                selectedDate.getFullYear() +
                                "-" +
                                parseInt(selectedDate.getMonth() + 1) +
                                "-" +
                                selectedDate.getDate()
                              }
                            />
                            {/* <input type="hidden" name="from" value={from} /> */}
                            {/* <input type="hidden" name="to" value={to} /> */}
                            <input type="hidden" name="from" value="1" />
                            <input type="hidden" name="to" value="2" />

                            <div className="book-now">
                              <button type="submit">Book Now</button>
                            </div>
                            {/* <button type="submit">submit</button> */}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* 25 Results in Thailand Section End */}
          <Footer />
        </div>
      )}
    </div>
  );
}
