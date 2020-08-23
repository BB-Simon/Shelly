import React from "react";
import Topnav from "../partials/Navbar/Topnav";
import Navigation from "../partials/Navbar/Navigation";
import Joinus from "../Joinus";
import Footer from "../partials/Footer";
import Itemheader from "../partials/Itamheader";
import Schedulelist from "./Schedulelist";

const Schedules = () => {
  return (
    <div>
      <Topnav />
      <Navigation />
      <Itemheader title="Schedule" />
      <Schedulelist />
      <Joinus />
      <Footer />
    </div>
  );
};

export default Schedules;
