import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import Eventitems from "../partials/Eventitems";

const Eventlists = () => {
  return (
    <Wrapper>
      <Container>
        <Row xs="1" sm="1" md="2">
          <Col>
            <Eventitems
              title="Digital Transformation Conference"
              img="/img/asset-21.jpeg"
              date="29/7/2020 8am-3pm"
              price="FREE"
              address="60 Road New York"
            />
            <Eventitems
              title="Digital Transformation Conference"
              img="/img/asset-21.jpeg"
              date="29/7/2020 8am-3pm"
              price="FREE"
              address="60 Road New York"
            />
            <Eventitems
              title="Digital Transformation Conference"
              img="/img/asset-21.jpeg"
              date="29/7/2020 8am-3pm"
              price="FREE"
              address="60 Road New York"
            />
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
              title="Digital Transformation Conference"
              img="/img/asset-21.jpeg"
              date="29/7/2020 8am-3pm"
              price="FREE"
              address="60 Road New York"
            />
            <Eventitems
              title="Digital Transformation Conference"
              img="/img/asset-21.jpeg"
              date="29/7/2020 8am-3pm"
              price="FREE"
              address="60 Road New York"
            />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Eventlists;
const Wrapper = styled.div`
  margin-bottom: 60px;
`;
