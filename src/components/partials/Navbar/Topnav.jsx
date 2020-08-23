import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";
import { FiPhoneCall } from "react-icons/fi";
import { BsClockHistory } from "react-icons/bs";
import { RiRoadMapFill } from "react-icons/ri";

const Topnav = () => {
  return (
    <Wrapper>
      <Container>
        <div className="top-nav-item">
          <img src="/img/asset-0.webp" width="68px" height="59px" alt="" />
          <span>Shelly</span>
          <div className="left-items">
            <div className="left-item-content">
              <FiPhoneCall />
              <h4>Call Us Now</h4>
              <p>+2 342 5446 67</p>
            </div>
            <div className="left-item-content">
              <BsClockHistory />
              <h4>Working Time</h4>
              <p>Mon - Fri 8 AM - 5 PM</p>
            </div>
            <div className="left-item-content">
              <RiRoadMapFill />
              <h4>Address</h4>
              <p>Franklin St, Greenpoint</p>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Topnav;
const Wrapper = styled.div`
  padding-top: 15px;
  z-index: 1;
  .top-nav-item {
    display: flex;
    align-items: center;
    padding-bottom: 15px;
    border-bottom: 1px solid #575757;
    span {
      font-family: "Poppins", sans-serif;
      font-size: 28px;
      font-weight: 700;
      margin: 0 5px;
    }
    .left-items {
      margin-left: auto;
      display: flex;
      align-items: center;
      .left-item-content {
        padding: 0 20px 0 30px;
        margin: 0 40px;
        position: relative;
        svg {
          position: absolute;
          top: 8%;
          left: 0;
          color: #f37335;
          font-size: 20px;
        }
        h4 {
          font-family: "Open Sans", sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #2b2b2b;
        }
        p {
          font-size: 14px;
          color: #575757;
        }
      }
    }
  }
`;
