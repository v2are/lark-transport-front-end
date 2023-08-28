// import React, { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const Datepickers = () => {
//   // date Pikcer
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   useEffect(() => {
//     // Get the date from the URL and update the state if present
//     const urlSearchParams = new URLSearchParams(window.location.search);
//     const dateParam = urlSearchParams.get("date");
//     if (dateParam) {
//       setSelectedDate(new Date(dateParam));
//     }
//   }, []);

//   const handleChangeDate = (date) => {
//     setSelectedDate(date);

//     // Update the URL with the selected date
//     const urlSearchParams = new URLSearchParams(window.location.search);
//     urlSearchParams.set("date", date.toISOString().slice(0, 10));
//     const newUrl = window.location.pathname + "?" + urlSearchParams.toString();
//     window.history.pushState({ path: newUrl }, "", newUrl);
//   };
//   // const [selectedDate, setSelectedDate] = useState(null);

//   const [today, setToday] = useState(null);
//   const [tomorrow, setTomorrow] = useState(null);
//   const [Wed, setWed] = useState(null);
//   const [Thu, setThu] = useState(null);
//   const [Fri, setFri] = useState(null);
//   const [Sat, setSat] = useState(null);
//   const [Sun, setSun] = useState(null);

//   const getToday = () => {
//     const today = new Date();
//     // const today = new Date(today);
//     today.setDate(today.getDate() + 0);
//     return today;
//   };

//   const getTomorrow = () => {
//     const today = new Date();
//     const tomorrow = new Date(today);
//     tomorrow.setDate(today.getDate() + 1);
//     return tomorrow;
//   };

//   const getWed = () => {
//     const today = new Date();
//     const Wed = new Date(today);
//     Wed.setDate(today.getDate() + 2);
//     return Wed;
//   };

//   const getThu = () => {
//     const today = new Date();
//     const Thu = new Date(today);
//     Thu.setDate(today.getDate() + 3);
//     return Thu;
//   };

//   const getFri = () => {
//     const today = new Date();
//     const Fri = new Date(today);
//     Fri.setDate(today.getDate() + 4);
//     return Fri;
//   };

//   const getSat = () => {
//     const today = new Date();
//     const Sat = new Date(today);
//     Sat.setDate(today.getDate() + 5);
//     return Sat;
//   };

//   const getSun = () => {
//     const today = new Date();
//     const Sun = new Date(today);
//     Sun.setDate(today.getDate() + 6);
//     return Sun;
//   };

//   useEffect(() => {
//     const todayDate = getToday();
//     setToday(todayDate);

//     const tomorrowDate = getTomorrow();
//     setTomorrow(tomorrowDate);

//     const WedDate = getWed();
//     setWed(WedDate);

//     const ThuDate = getThu();
//     setThu(ThuDate);

//     const FriDate = getFri();
//     setFri(FriDate);

//     const SatDate = getSat();
//     setSat(SatDate);

//     const SunDate = getSun();
//     setSun(SunDate);
//   }, []);

//   const [activeButtonIndex, setActiveButtonIndex] = useState(0);
//   const handleButtonClick = (index) => {
//     setActiveButtonIndex(index);
//   };
//   const defaultBackgroundColor = "#fff";
//   const activeBackgroundColor = "#0e982d";
//   const defaultTextColor = "#fff";
//   const activeTextColor = "#000";

//   return (
//     <div className="datepickers-section">
//       <button
//         style={{
//           backgroundColor:
//             activeButtonIndex === 0
//               ? activeBackgroundColor
//               : defaultBackgroundColor,
//           color: activeButtonIndex === 0 ? defaultTextColor : activeTextColor,
//         }}
//         onClick={() => handleButtonClick(0)}
//         className="my-button "
//       >
//         {today && (
//           <p>
//             Thu,&nbsp;
//             {today.toLocaleDateString("en-US", {
//               // year: 'numeric',
//               month: "long",
//               day: "numeric",
//             })}
//           </p>
//         )}
//       </button>

//       <button
//         style={{
//           backgroundColor:
//             activeButtonIndex === 1
//               ? activeBackgroundColor
//               : defaultBackgroundColor,
//           color: activeButtonIndex === 1 ? defaultTextColor : activeTextColor,
//         }}
//         onClick={() => handleButtonClick(1)}
//         className="my-button"
//       >
//         {tomorrow && (
//           <p>
//             Fri,&nbsp;
//             {tomorrow.toLocaleDateString("en-US", {
//               // year: 'numeric',
//               month: "long",
//               day: "numeric",
//             })}
//           </p>
//         )}
//       </button>
//       <button
//         style={{
//           backgroundColor:
//             activeButtonIndex === 2
//               ? activeBackgroundColor
//               : defaultBackgroundColor,
//           color: activeButtonIndex === 2 ? defaultTextColor : activeTextColor,
//         }}
//         onClick={() => handleButtonClick(2)}
//         className="my-button"
//       >
//         {Wed && (
//           <p>
//             Sat,&nbsp;
//             {Wed.toLocaleDateString("en-US", {
//               // year: "numeric",
//               month: "long",
//               day: "numeric",
//             })}
//           </p>
//         )}
//       </button>
//       <button
//         style={{
//           backgroundColor:
//             activeButtonIndex === 3
//               ? activeBackgroundColor
//               : defaultBackgroundColor,
//           color: activeButtonIndex === 3 ? defaultTextColor : activeTextColor,
//         }}
//         onClick={() => handleButtonClick(3)}
//         className="my-button"
//       >
//         {Thu && (
//           <p>
//             Sun,&nbsp;
//             {Thu.toLocaleDateString("en-US", {
//               // year: "numeric",
//               month: "long",
//               day: "numeric",
//             })}
//           </p>
//         )}
//       </button>
//       <button
//         style={{
//           backgroundColor:
//             activeButtonIndex === 4
//               ? activeBackgroundColor
//               : defaultBackgroundColor,
//           color: activeButtonIndex === 4 ? defaultTextColor : activeTextColor,
//         }}
//         onClick={() => handleButtonClick(4)}
//         className="my-button"
//       >
//         {Fri && (
//           <p>
//             Mon,&nbsp;
//             {Fri.toLocaleDateString("en-US", {
//               // year: "numeric",
//               month: "long",
//               day: "numeric",
//             })}
//           </p>
//         )}
//       </button>
//       <button
//         style={{
//           backgroundColor:
//             activeButtonIndex === 5
//               ? activeBackgroundColor
//               : defaultBackgroundColor,
//           color: activeButtonIndex === 5 ? defaultTextColor : activeTextColor,
//         }}
//         onClick={() => handleButtonClick(5)}
//         className="my-button"
//       >
//         {Sat && (
//           <p>
//             Tue,&nbsp;
//             {Sat.toLocaleDateString("en-US", {
//               // year: "numeric",
//               month: "long",
//               day: "numeric",
//             })}
//           </p>
//         )}
//       </button>
//       <button
//         style={{
//           backgroundColor:
//             activeButtonIndex === 6
//               ? activeBackgroundColor
//               : defaultBackgroundColor,
//           color: activeButtonIndex === 6 ? defaultTextColor : activeTextColor,
//         }}
//         onClick={() => handleButtonClick(6)}
//         className="my-button"
//       >
//         {Sun && (
//           <p>
//             Wed,&nbsp;
//             {Sun.toLocaleDateString("en-US", {
//               // year: "numeric",
//               month: "long",
//               day: "numeric",
//             })}
//           </p>
//         )}
//       </button>
//       <span
//       // style={{
//       //   backgroundColor:
//       //     activeButtonIndex === 7
//       //       ? activeBackgroundColor
//       //       : defaultBackgroundColor,
//       //   color: activeButtonIndex === 7 ? defaultTextColor : activeTextColor,
//       // }}
//       // onClick={() => handleButtonClick(7)}
//       >
//         <i className="fa-solid fa-calendar-days"></i>

//         <DatePicker
//           selected={selectedDate}
//           onChange={handleChangeDate}
//           dateFormat="dd-MM-yyyy"
//           name="date"
//         />
//         {/* <DatePicker
//           selected={selectedDate}
//           onChange={(date) => setSelectedDate(date)}
//           dateFormat="dd/MM/yyyy"
//           placeholderText="Pick Date"
//         /> */}
//       </span>
//     </div>
//   );
// };

// export default Datepickers;

import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepickers = () => {
  // date Pikcer
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    // Get the date from the URL and update the state if present
    const urlSearchParams = new URLSearchParams(window.location.search);
    const dateParam = urlSearchParams.get("date");
    if (dateParam) {
      setSelectedDate(new Date(dateParam));
    }
  }, []);

  const handleChangeDate = (date) => {
    setSelectedDate(date);

    // Update the URL with the selected date
    const urlSearchParams = new URLSearchParams(window.location.search);
    urlSearchParams.set("date", date.toISOString().slice(0, 10));
    const newUrl = window.location.pathname + "?" + urlSearchParams.toString();
    window.history.pushState({ path: newUrl }, "", newUrl);
  };
  // date Pikcer
  const generateNextSevenDays = () => {
    let dates = [];
    for (let i = 0; i < 7; i++) {
      let date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date.toDateString());
    }
    return dates;
  };

  const nextSevenDays = generateNextSevenDays();

  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
  };
  const defaultBackgroundColor = "#fff";
  const activeBackgroundColor = "#0e982d";
  const defaultTextColor = "#fff";
  const activeTextColor = "#000";

  return (
    <div className="datepickers-section">
      <button
        style={{
          backgroundColor:
            activeButtonIndex === 0
              ? activeBackgroundColor
              : defaultBackgroundColor,
          color: activeButtonIndex === 0 ? defaultTextColor : activeTextColor,
        }}
        onClick={() => handleButtonClick(0)}
        className="my-button "
      >
        <p>{nextSevenDays[0]}</p>
      </button>

      <button
        style={{
          backgroundColor:
            activeButtonIndex === 1
              ? activeBackgroundColor
              : defaultBackgroundColor,
          color: activeButtonIndex === 1 ? defaultTextColor : activeTextColor,
        }}
        onClick={() => handleButtonClick(1)}
        className="my-button"
      >
        <p>{nextSevenDays[1]}</p>
      </button>
      <button
        style={{
          backgroundColor:
            activeButtonIndex === 2
              ? activeBackgroundColor
              : defaultBackgroundColor,
          color: activeButtonIndex === 2 ? defaultTextColor : activeTextColor,
        }}
        onClick={() => handleButtonClick(2)}
        className="my-button"
      >
        <p>{nextSevenDays[2]}</p>
      </button>
      <button
        style={{
          backgroundColor:
            activeButtonIndex === 3
              ? activeBackgroundColor
              : defaultBackgroundColor,
          color: activeButtonIndex === 3 ? defaultTextColor : activeTextColor,
        }}
        onClick={() => handleButtonClick(3)}
        className="my-button"
      >
        <p>{nextSevenDays[3]}</p>
      </button>
      <button
        style={{
          backgroundColor:
            activeButtonIndex === 4
              ? activeBackgroundColor
              : defaultBackgroundColor,
          color: activeButtonIndex === 4 ? defaultTextColor : activeTextColor,
        }}
        onClick={() => handleButtonClick(4)}
        className="my-button"
      >
        <p>{nextSevenDays[4]}</p>
      </button>
      <button
        style={{
          backgroundColor:
            activeButtonIndex === 5
              ? activeBackgroundColor
              : defaultBackgroundColor,
          color: activeButtonIndex === 5 ? defaultTextColor : activeTextColor,
        }}
        onClick={() => handleButtonClick(5)}
        className="my-button"
      >
        <p>{nextSevenDays[5]}</p>
      </button>
      <button
        style={{
          backgroundColor:
            activeButtonIndex === 6
              ? activeBackgroundColor
              : defaultBackgroundColor,
          color: activeButtonIndex === 6 ? defaultTextColor : activeTextColor,
        }}
        onClick={() => handleButtonClick(6)}
        className="my-button"
      >
        <p>{nextSevenDays[6]}</p>
      </button>
      <span>
        <i className="fa-solid fa-calendar-days"></i>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Pick Date"
        />
      </span>
    </div>
  );
};

export default Datepickers;

