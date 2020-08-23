import React from "react";
import Topnav from "../partials/Navbar/Topnav";
import Navigation from "../partials/Navbar/Navigation";
import Itemheader from "../partials/Itamheader";
import Joinus from "../Joinus";
import Footer from "../partials/Footer";
import Eventitems from "./Eventlists";

const Events = () => {
  return (
    <div>
      <Topnav />
      <Navigation />
      <Itemheader title="Events" />
      <Eventitems />
      <Joinus />
      <Footer />
    </div>
  );
};

export default Events;
