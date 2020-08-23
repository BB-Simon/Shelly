import React, { useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { Classmenu, Blogmenu } from "./Navmenu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Wrapper>
      <Navbar light expand="md">
        <Container>
          <NavbarBrand>
            <NavLink to="/">Home</NavLink>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">
                  Classes <MdKeyboardArrowDown />
                  <Classmenu />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/our-teachers">Teachers</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">
                  Blog <MdKeyboardArrowDown />
                  <Blogmenu />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact-us">Contacts</NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto rightside-item" navbar>
              <ul>
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
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </Wrapper>
  );
};

export default Navigation;

const Wrapper = styled.div`
  .nav-item {
    padding: 0 30px;
    position: relative;
    a {
      font-family: "Poppins", sans-serif;
      font-size: 20px;
      text-decoration: none;
      color: #2b2b2b;
    }
  }
  .rightside-item {
    ul li {
      padding: 5px;
      margin: 0 5px;
      width: 30px;
      height: 30px;
      background: #155799;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        color: #ffffff;
        font-size: 16px;
      }
    }
  }
`;
