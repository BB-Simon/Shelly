import React from "react";
import Header from "./partials/Header";
import Welcome from "./Welcome";
import Imagegallery from "./Imagegallery";
import Classes from "./Classes";
import Teachers from "./Teachers";
import Courses from "./Courses";
import News from "./News";
import Footer from "./partials/Footer";
import Joinus from "./Joinus";

const Home = () => {
  return (
    <>
      <Header />
      <Welcome />
      <Imagegallery />
      <Classes />
      <Teachers />
      <Courses />
      <News />
      <Joinus />
      <Footer />
    </>
  );
};

export default Home;
