import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

const Map = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col>
            <iframe
              title="This is a unique title"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.317818288053!2d31.276577513298857!3d30.056423216942903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f71710eeac7%3A0x1625087bcec07134!2sIslamic%20Mission%20City!5e0!3m2!1sen!2seg!4v1598080757660!5m2!1sen!2seg"
              width="100%"
              height="600px"
              frameborder="0"
              style={{ border: 0 }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Map;
const Wrapper = styled.div`
  margin: 60px 0;
  padding: 30px 0;
`;
