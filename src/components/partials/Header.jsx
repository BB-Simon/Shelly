import React from "react";
import Navigation from "./Navbar/Navigation";
import styled from "styled-components";
import Topnav from "./Navbar/Topnav";
import Subheader from "./Subheader";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="circle"></div>
      <Topnav />
      <Navigation />
      <Subheader />
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  height: 1200px;
  overflow: hidden;
  .circle {
    padding: 700px;
    background: #f2f7fd;
    border-radius: 100%;
    position: absolute;
    top: -20%;
    right: -45%;
    z-index: -1;
  }
`;
