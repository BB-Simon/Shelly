import React from "react";
import styled from "styled-components";

const Benifititem = ({ title, subtitle, img }) => {
  return (
    <Wrapper>
      <img src={img} alt="" />
      {title}
      {subtitle}
    </Wrapper>
  );
};

export default Benifititem;
const Wrapper = styled.div`
  margin: 5px 0;
  background: #ffffff;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
