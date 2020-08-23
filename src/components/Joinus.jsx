import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import Title from "./partials/Title";
import Subtitle from "./partials/Subtitle";
import Contactform from "./partials/Contactform";
import Button from "./partials/Button";

const Joinus = () => {
  return (
    <Wrapper>
      <Container>
        <div className="wrapper">
          <Row xs="1" sm="1" md="2">
            <Col>
              <div className="left-item">
                <Title size="36px" weight="700" title="Join us" />
                <Title
                  margin="0 0 15px"
                  size="36px"
                  weight="700"
                  title="and stay tuned!"
                />
                <Subtitle
                  size="14px"
                  title="Lorem ip sp iscinsum dolor sit amet, cons ectetur adipiscing eli um dolor sit amet, consec tetur adip iscing epsum dolor sit amet, consectetur adipi scing elilit "
                />
              </div>
            </Col>
            <Col>
              <div className="d-flex flex-column">
                <Contactform />
                <div className="ml-auto">
                  <Button title="Send" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Joinus;
const Wrapper = styled.div`
  margin-bottom: 50px;
  .wrapper {
    padding: 45px 50px;
    border-radius: 25px;
    background: linear-gradient(170deg, #fdc830 0%, #f37335 100%);
    .left-item {
      padding: 30px 10px;
    }
  }
`;
