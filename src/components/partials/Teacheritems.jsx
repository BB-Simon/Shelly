import React from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";
import styled from "styled-components";

const Teacheritems = ({ title, subtitle, img }) => {
  return (
    <Wrapper>
      <div>
        <img src={img} width="100%" height="100%" alt="" />
      </div>
      <Title size="18px" margin="10px 0 5px 0" title={title} />
      <Subtitle size="14px" color="#155799" title={subtitle} />
    </Wrapper>
  );
};

export default Teacheritems;
const Wrapper = styled.div`
  img {
    border-radius: 10px;
  }
`;
