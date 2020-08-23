import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import styled from "styled-components";

const Button = ({ title, icon }) => {
  return (
    <ButtonWrapper>
      {title} {icon ? icon : <FaLongArrowAltRight />}
    </ButtonWrapper>
  );
};

export default Button;
const ButtonWrapper = styled.button`
  border: none;
  border-radius: 505px;
  padding: 15px 40px;
  background: #155799;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  line-height: 18px;
  svg {
    margin-left: 10px;
  }

  &:focus {
    outline: none;
  }
`;
