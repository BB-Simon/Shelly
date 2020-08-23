import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import Title from "../partials/Title";
import Subtitle from "../partials/Subtitle";
import Button from "../partials/Button";

const Aboutwelcome = () => {
  return (
    <Wrapper>
      <Container>
        <Row xs="1" sm="1" md="2">
          <Col>
            <Title
              size="48px"
              margin="20px 0"
              weight="700"
              title="Welcome to Shelly School"
            />
            <Subtitle
              size="14px"
              margin="0 0 40px"
              title="Morbi vel augue et metus pellentesque lacinia eu non odio. Sed id purus urna. Maecenas ultrices ligula a nisi dictum tristique. Suspendisse potenti. Curabitur egestas ultrices sem, eu vestibulum leo sagittis et"
            />
            <Button title="Classes" />
          </Col>
          <Col>
            <div className="item">
              <img src="/img/asset-34.jpg" width="100%" height="100%" alt="" />
              <div className="item-2">
                <img src="/img/asset-37.jpg" alt="" />
              </div>
              <div className="item-3">
                <img src="/img/asset-35.jpg" alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Aboutwelcome;
const Wrapper = styled.div`
  margin-bottom: 60px;
  padding: 60px 0;
  .item {
    position: relative;
    img {
      border-radius: 100%;
    }
    .item-2 {
      position: absolute;
      top: -7%;
      left: 20%;
    }
    .item-3 {
      position: absolute;
      top: 20%;
      left: -5%;
    }
  }
`;
