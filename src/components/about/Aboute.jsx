import React from "react";
import Navigation from "../partials/Navbar/Navigation";
import Topnav from "../partials/Navbar/Topnav";
import Footer from "../partials/Footer";
import Aboutwelcome from "./Aboutwelcome";
import Mission from "./Mission";
import Benifits from "./Benifits";
import Classes from "../Classes";
import Itemheader from "../partials/Itamheader";
import Joinus from "../Joinus";

const Aboute = () => {
  return (
    <div>
      <Topnav />
      <Navigation />
      <Itemheader title="About Us" />
      <Aboutwelcome />
      <Mission />
      <Benifits />
      <Classes />
      <Joinus />
      <Footer />
    </div>
  );
};

export default Aboute;
