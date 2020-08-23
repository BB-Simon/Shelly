import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import Title from "../partials/Title";
import Subtitle from "../partials/Subtitle";
import Button from "../partials/Button";
import Benifititem from "../partials/Benifititem";

const Benifits = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col>
            <Title
              size="48px"
              weight="700"
              margin="20px 0 30px 0"
              title="Our Benefits"
            />
            <Subtitle
              size="14px"
              margin="0 0 40px"
              title="Praesent rhoncus justo erat, sed sollicitudin arcu malesuada vel. Etiam scelerisque justo ut purus luctus ullamcorper. Vivamus vitae elit ligula. Fusce eu rutrum nisl. Vestibulum ut sagittis neque"
            />
            <Button title="Contacts" />
          </Col>
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
                  title="Etiam risus neque, volfringillautpat vel laoreet less."
                />
              }
            />
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

export default Benifits;
const Wrapper = styled.div`
  margin-bottom: 60px;
`;
