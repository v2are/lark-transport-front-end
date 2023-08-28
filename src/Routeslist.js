import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ComboTours from "./Components/ComboTours";
import Myaccount from "./Components/Dashboard/Myaccount";
import Hotels from "./Components/Hotels/Hotels";
import Home from "./Components/Home";

// Common
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import Helpcenter from "./Components/Common/Helpcenter";
import Datepickers from "./Components/Common/Datepickers";
import Heartlike from "./Components/Common/Heartlike";
import Starlike from "./Components/Common/Starlike";

// Transfer
import Transfer from "./Components/Transfer/Transfer";
import CabBooking from "./Components/Transfer/CabBooking";
// or
import Package from "./Components/Transfer/Package";
import Packages from "./Components/Transfer/Packages";

import Passenger from "./Components/Transfer/Passenger";
import BookingConfirmed from "./Components/Transfer/BookingConfirmed";

// Activity
import Activities from "./Components/Activities/js/Activities";
import Activitymember from "./Components/Activities/js/Activitymember";
import ActivityDetail from "./Components/Activities/js/ActivityDetail";
import Activityconformation from "./Components/Activities/js/Activityconformation";
import { Form } from "formik";


export default function Routeslist() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* ========== Common ========== */}
          <Route path="/" element={<Transfer />} />
          <Route path="/Navbar" element={<Navbar />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Helpcenter" element={<Helpcenter />} />
          <Route path="/Datepickers" element={<Datepickers />} />
          <Route path="/Heartlike" element={<Heartlike />} />
          <Route path="/Starlike" element={<Starlike />} />

          {/* ========== Transfer ========== */}
          <Route path="/Transfer" element={<Transfer />} />
          <Route path="/CabBooking/:id" element={<CabBooking />} />
          <Route path="/BookingConfirmed" element={<BookingConfirmed />} />
          <Route path="/Passenger" element={<Passenger />} />
          <Route path="/Form" element={<Form />} />
          {/* <Route path="/Package" element={<Package />} /> */}
          <Route path="/Package/:from/:to" element={<Package />} />
          <Route path="/Packages/:id" element={<Packages />} />

          {/* ========== Activity ========== */}
          <Route path="/Activities" element={<Activities />} />
          <Route path="/ActivityDetail" element={<ActivityDetail />} />
          <Route path="/Activitymember" element={<Activitymember />} />
          <Route path="/Activityconformation" element={<Activityconformation />} />

          {/* ========== Hotal ========== */}
          <Route path="/Hotels" element={<Hotels />} />

          {/* ========== Combo Tour ========== */}
          <Route path="/ComboTours" element={<ComboTours />} />

          {/* ========== Dashboard ========== */}
          <Route path="/Myaccount" element={<Myaccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
