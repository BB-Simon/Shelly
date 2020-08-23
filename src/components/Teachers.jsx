import React from "react";
import styled from "styled-components";
import Title from "./partials/Title";
import Subtitle from "./partials/Subtitle";
import { Row, Col, Container } from "reactstrap";
import Teacheritems from "./partials/Teacheritems";

const Teachers = () => {
  return (
    <Wrapper>
      <Container>
        <div className="heading">
          <Title size="48px" weight="700" title="Our Teachers" />
          <Subtitle
            size="14px"
            padding="10px"
            title="ullam fringilla ipsum sed enim scelerisque, ac porttitor libero egestas. Donec iaculis nisi eget bibendum efficitur. Lorem ipsum dolor sit."
          />
        </div>
        <Row xs="1" sm="1" md="4">
          <Col>
            <Teacheritems
              title="Polina Kerston"
              subtitle="English Teacher"
              img="/img/asset-23.webp"
            />
          </Col>
          <Col>
            <Teacheritems
              title="Faadi Al Rahman"
              subtitle="Instructor"
              img="/img/asset-24.webp"
            />
          </Col>
          <Col>
            <Teacheritems
              title="Chikelu Obasea"
              subtitle="Art Teacher"
              img="/img/asset-25.webp"
            />
          </Col>
          <Col>
            <Teacheritems
              title="Katayama Fumiki"
              subtitle="Teacher"
              img="/img/asset-26.webp"
            />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Teachers;
const Wrapper = styled.div`
  margin-bottom: 50px;
  .heading {
    text-align: center;
    margin: 15px 0;
    p {
      max-width: 540px;
      margin: 0 auto;
    }
  }
  .items {
  }
`;
