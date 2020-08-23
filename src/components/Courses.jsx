import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import Title from "./partials/Title";
import Subtitle from "./partials/Subtitle";
import Eventitems from "./partials/Eventitems";

const Courses = () => {
  return (
    <Wrapper>
      <Container>
        <Row xs="1" sm="1" md="2">
          <Col>
            <div className="left-item">
              <Title size="48px" weight="700" title="Find Your Course" />
              <Subtitle
                size="14px"
                title="ullam fringilla ipsum sed enim scelerisque, ac porttitor libero egestas. Donec iaculis nisi eget bibendum efficitur. Lorem ipsum dolor si"
              />
              <div className="d-flex">
                <img src="/img/asset-27.webp" alt="" />
                <Title
                  size="20px"
                  margin="20px 10px"
                  color="#155799"
                  title="Call: +2 342 5446 67"
                />
              </div>
              <div>
                <img src="/img/asset-32.jpg" alt="" />
                <img src="/img/asset-33.jpg" alt="" />
              </div>
            </div>
          </Col>
          <Col>
            <Eventitems
              title="Digital Transformation Conference"
              img="/img/asset-21.jpeg"
              date="29/7/2020 8am-3pm"
              price="FREE"
              address="60 Road New York"
            />
            <Eventitems
              title="World University Convocation"
              img="/img/asset-21.jpeg"
              date="30/7/2020 8am-3pm"
              price="$123"
              address="60 Road New York"
            />
            <Eventitems
              title="Game Developers Conference"
              img="/img/asset-21.jpeg"
              date="3/8/2020 8am-3pm"
              price="$213"
              address="60 Road New York"
            />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Courses;
const Wrapper = styled.div`
  margin-bottom: 50px;
`;
