import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import Teacheritems from "../partials/Teacheritems";
const Teachersinfo = () => {
  return (
    <Wrapper>
      <Container>
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
        <Row xs="1" sm="1" md="4">
          <Col>
            <Teacheritems
              title="Dai Jiang"
              subtitle="English Teacher"
              img="/img/asset-38.jpg"
            />
          </Col>
          <Col>
            <Teacheritems
              title="Hubert Franck"
              subtitle="Instructor"
              img="/img/asset-41.jpg"
            />
          </Col>
          <Col>
            <Teacheritems
              title="Vincent Luggers"
              subtitle="Art Teacher"
              img="/img/asset-40.jpg"
            />
          </Col>
          <Col>
            <Teacheritems
              title="Masood El Toure"
              subtitle="Teacher"
              img="/img/asset-39.jpg"
            />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Teachersinfo;
const Wrapper = styled.div`
  margin: 60px 0;
  padding: 30px 0;
  .row {
    padding: 25px 0;
  }
`;
