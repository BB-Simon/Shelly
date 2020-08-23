import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";

const Imagegallery = () => {
  return (
    <Wrapper>
      <Container>
        <div className="item-wrapper">
          <div className="item-1">
            <img src="/img/asset-9.jpeg" alt="" />
          </div>
          <div className="item-1">
            <img src="/img/asset-10.jpeg" alt="" />
            <img src="/img/asset-11.jpeg" alt="" />
          </div>
          <div className="item-1">
            <img src="/img/asset-12.jpeg" alt="" />
            <img src="/img/asset-13.jpeg" alt="" />
          </div>
          <div className="item-1">
            <img src="/img/asset-14.jpeg" alt="" />
            <img src="/img/asset-15.jpeg" alt="" />
          </div>
          <div className="item-1">
            <img src="/img/asset-16.jpeg" alt="" />
            <img src="/img/asset-17.jpeg" alt="" />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Imagegallery;
const Wrapper = styled.div`
  margin-bottom: 50px;
  .item-wrapper {
    width: 100%;
    display: flex;
    img {
      border-radius: 15px;
    }
  }
`;
