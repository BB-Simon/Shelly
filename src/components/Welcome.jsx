import React from "react";
import styled from "styled-components";
import Title from "./partials/Title";
import Subtitle from "./partials/Subtitle";
import { Container, Row, Col } from "reactstrap";
import Benifititem from "./partials/Benifititem";

const Welcome = () => {
  return (
    <Wrapper>
      <Container>
        <div className="heading">
          <Title size="48px" weight="700" title="Welcome to Shelly" />
          <Subtitle
            size="14px"
            padding="10px"
            title="ullam fringilla ipsum sed enim scelerisque, ac porttitor libero egestas. Donec iaculis nisi eget bibendum efficitur. Lorem ipsum dolor sit"
          />
        </div>
        <Row xs="1" sm="1" md="4">
          <Col>
            <Benifititem
              img="img/asset-5.webp"
              title={
                <Title size="18px" padding="15px 0" title="Awesome Teachers" />
              }
              subtitle={
                <Subtitle
                  size="14px"
                  padding="0 0 15px"
                  title="Vivamus intequis rdum, mauris quis cursus sodaquis les"
                />
              }
            />
          </Col>
          <Col>
            <Benifititem
              img="/img/asset-6.webp"
              title={
                <Title
                  size="18px"
                  padding="15px 0"
                  title="Global Certificate"
                />
              }
              subtitle={
                <Subtitle
                  size="14px"
                  padding="0 0 15px"
                  title="Pellentesque fringilla eget augufringilla e id phafringilla retr"
                />
              }
            />
          </Col>
          <Col>
            <Benifititem
              img="/img/asset-7.webp"
              title={
                <Title size="18px" padding="15px 0" title="Best Programm" />
              }
              subtitle={
                <Subtitle
                  size="14px"
                  padding="0 0 15px"
                  title="Etiam risus neque, volfringillautpat vel laoreet"
                />
              }
            />
          </Col>
          <Col>
            <Benifititem
              img="/img/asset-8.webp"
              title={
                <Title size="18px" padding="15px 0" title="Awesome Teachers" />
              }
              subtitle={
                <Subtitle
                  size="14px"
                  padding="0 0 15px"
                  title="Vivamus intequis rdum, mauris quis cursus sodaquis les"
                />
              }
            />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Welcome;
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
`;
