import React from "react";
import Topnav from "../partials/Navbar/Topnav";
import Navigation from "../partials/Navbar/Navigation";
import Itemheader from "../partials/Itamheader";
import Footer from "../partials/Footer";
import Teachersinfo from "./Teachersinfo";
import Joinus from "../Joinus";

const Teacher = () => {
  return (
    <div>
      <Topnav />
      <Navigation />
      <Itemheader title="Our Teachers" />
      <Teachersinfo />
      <Joinus />
      <Footer />
    </div>
  );
};

export default Teacher;
