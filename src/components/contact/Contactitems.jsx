import React from "react";
import styled from "styled-components";
import Subtitle from "../partials/Subtitle";
import Title from "../partials/Title";
const Contactitems = ({ title, subtitle, img }) => {
  return (
    <Wrapper>
      <img src={img} alt="" />
      <div>
        <Title weight="500" size="14px" title={title} />
        <Subtitle size="14px" title={subtitle} />
      </div>
    </Wrapper>
  );
};

export default Contactitems;
const Wrapper = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
  div {
    padding: 0 20px;
  }
`;
