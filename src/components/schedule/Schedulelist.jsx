import React, { Component } from "react";
import styled from "styled-components";
import Classitems from "../partials/Classitems";
import { Container, Row, Col } from "reactstrap";

class Schedulelist extends Component {
  state = {
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    times: ["10AM - 3PM", "3PM - 9PM", "8AM - 3PM", "12PM - 5PM", "10AM - 5PM"],
  };
  render() {
    return (
      <Wrapper>
        <Container>
          <Row xs="1" sm="1" md="3">
            <Col>
              <Classitems
                imgOne="/img/asset-22.webp"
                title="Charcoal Drawing for all age Students"
                schedules={this.state}
              />
            </Col>
            <Col>
              <Classitems
                imgOne="/img/asset-22.webp"
                title="Charcoal Drawing for all age Students"
                schedules={this.state}
              />
            </Col>
            <Col>
              <Classitems
                imgOne="/img/asset-22.webp"
                title="Charcoal Drawing for all age Students"
                schedules={this.state}
              />
            </Col>
          </Row>
          <Row xs="1" sm="1" md="3">
            <Col>
              <Classitems
                imgOne="/img/asset-22.webp"
                title="Charcoal Drawing for all age Students"
                schedules={this.state}
              />
            </Col>
            <Col>
              <Classitems
                imgOne="/img/asset-22.webp"
                title="Charcoal Drawing for all age Students"
                schedules={this.state}
              />
            </Col>
            <Col>
              <Classitems
                imgOne="/img/asset-22.webp"
                title="Charcoal Drawing for all age Students"
                schedules={this.state}
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default Schedulelist;
const Wrapper = styled.div`
  margin-bottom: 60px;
  .row {
    margin-bottom: 30px;
  }
`;
