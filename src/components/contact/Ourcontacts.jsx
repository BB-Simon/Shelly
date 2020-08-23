import React from "react";
import styled from "styled-components";
import { RiMailOpenLine } from "react-icons/ri";
import { Row, Col, Container } from "reactstrap";
import Title from "../partials/Title";
import Contactitems from "./Contactitems";
import Contactform from "../partials/Contactform";
import Button from "../partials/Button";

const Ourcontacts = () => {
  return (
    <Wrapper>
      <Container>
        <Row xs="1" sm="1" md="2">
          <Col>
            <Title size="36px" margin="20px 0" title="Our Contacts" />
            <Contactitems
              title="Call Us"
              subtitle="+2 342 5446 67​"
              img="/img/asset-44.png"
            />
            <Contactitems
              title="Working Time"
              subtitle="Mon - Fri 8 AM - 5 PM​"
              img="/img/asset-43.png"
            />
            <Contactitems
              title="Address"
              subtitle="Franklin St, Greenpoint Ave​"
              img="/img/asset-42.png"
            />
          </Col>
          <Col>
            <div className="d-flex flex-column">
              <Contactform border="1px solid #575757" />
              <div className="ml-auto">
                <Button title="Send" icon={<RiMailOpenLine />} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Ourcontacts;
const Wrapper = styled.div`
  margin: 50px 0;
`;
