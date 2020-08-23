import React from "react";
import Itemheader from "../partials/Itamheader";
import Topnav from "../partials/Navbar/Topnav";
import Navigation from "../partials/Navbar/Navigation";
import Footer from "../partials/Footer";
import Joinus from "../Joinus";
import Map from "./Map";
import Ourcontacts from "./Ourcontacts";

const Contact = () => {
  return (
    <div>
      <Topnav />
      <Navigation />
      <Itemheader title="Contact Us" />
      <Map />
      <Ourcontacts />
      <Joinus />
      <Footer />
    </div>
  );
};

export default Contact;
