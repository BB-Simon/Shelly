import React from "react";
import styled from "styled-components";
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "./Subtitle";
import Title from "./Title";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Row xs="1" sm="1" md="4">
          <Col>
            <div>
              <img src="/img/asset-0.webp" width="68px" height="59px" alt="" />
              <span>Shelly</span>
              <Subtitle
                size="14px"
                title="Vivamus porta efficitur nibh nec convallis. Vestibulum egestas eleifend justo. Ut tellus ips, accumsan"
              />
            </div>
          </Col>
          <Col>
            <ul>
              <li>
                <Title size="18px" title="Our Contacts" />
              </li>
              <li>
                <FiPhoneCall />
                <h4>Call Us Now</h4>
                <p>+2 342 5446 67</p>
              </li>
              <li>
                <BsClockHistory />
                <h4>Working Time</h4>
                <p>Mon - Fri 8 AM - 5 PM</p>
              </li>
              <li>
                <FaMapMarkerAlt />
                <h4>Address</h4>
                <p>Franklin St, Greenpoint</p>
              </li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li>
                <Title size="18px" title="Quick Links" />
              </li>
              <li>About Us</li>
              <li>Our Classes</li>
              <li>School Teachers</li>
              <li>Reacent Events</li>
              <li>Our News</li>
              <li>Schedule</li>
            </ul>
          </Col>
          <Col>
            <div>
              <iframe
                title="This is a unique title"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.317818288053!2d31.276577513298857!3d30.056423216942903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f71710eeac7%3A0x1625087bcec07134!2sIslamic%20Mission%20City!5e0!3m2!1sen!2seg!4v1598080757660!5m2!1sen!2seg"
                width="100%"
                height="100%"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>
          </Col>
        </Row>
        <div className="last-item">
          <Subtitle
            size="14px"
            title="&copy; Copyrights 2020 shelly all rights reserved."
          />
          <ul className="icons">
            <li to="/">
              <FaFacebookF />
            </li>
          </ul>
          <ul>
            <li to="/">
              <FaLinkedinIn />
            </li>
          </ul>
          <ul>
            <li to="/">
              <FaInstagram />
            </li>
          </ul>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Footer;
const Wrapper = styled.footer`
  background: #f2f7fd;
  padding: 50px 0;
  h4 {
    font-size: 18px;
  }
  p {
    font-size: 14px;
  }
  .last-item {
    padding: 30px 0;
    border-top: 1px solid #575757;
    display: flex;
    ul.icons {
      margin-left: auto;
      li {
        margin: 0 5px;
      }
    }
  }
`;
