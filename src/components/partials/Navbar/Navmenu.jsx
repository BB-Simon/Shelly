import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Classmenu = () => {
  return (
    <Wrapper className="sub-nav-item">
      <NavLink to="/events">Events</NavLink>
      <NavLink to="/schedules">Schedules</NavLink>
    </Wrapper>
  );
};
export const Blogmenu = () => {
  return (
    <Wrapper className="sub-nav-item">
      <NavLink to="/signgle-post">Signl Post</NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 200px;
  height: auto;
  position: absolute;
  top: 170%;
  left: 0;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 15px;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: all 0.5s ease-in-out;
  z-index: 1;
`;
