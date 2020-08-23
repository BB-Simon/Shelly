import React from "react";
import { FaRegCalendar, FaMapMarkerAlt } from "react-icons/fa";
import styled from "styled-components";
import Subtitle from "./Subtitle";
import Title from "./Title";

const Eventitems = ({ title, img, address, date, price }) => {
  return (
    <Wrapper>
      <ul className="item-header">
        <li>
          <FaRegCalendar />
        </li>
        <li>
          <Subtitle title={date} />
        </li>
        <li>
          <Title size="16px" color="#155799" title={price} />
        </li>
      </ul>
      <Title size="20px" padding="18px 0" title={title} />
      <ul className="item-footer">
        <li>
          <img src={img} alt="" />
        </li>
        <li>
          <FaMapMarkerAlt />
        </li>
        <li>
          <Subtitle title={address} />
        </li>
      </ul>
    </Wrapper>
  );
};

export default Eventitems;
const Wrapper = styled.div`
  border-left: 5px solid #f37335;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  margin: 10px 0;
  .item-header {
    display: flex;
    align-items: center;
    li {
      padding: 0 5px;
      &:nth-child(1) {
        color: #f37335;
      }
      &:nth-child(2) {
        font-style: italic;
        margin-right: auto;
      }
    }
  }
  .item-footer {
    display: flex;
    align-items: center;
    li {
      padding: 0 4px;
      &:nth-child(1) {
        margin-right: auto;
        img {
          border-radius: 100%;
        }
      }
      &:nth-child(2) {
        color: #f37335;
      }
      &:nth-child(3) {
        font-style: italic;
      }
    }
  }
`;
