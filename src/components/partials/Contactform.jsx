import React from "react";
import styled from "styled-components";
import { Row, Col } from "reactstrap";

const Contactform = (props) => {
  return (
    <Wrapper border={props.border}>
      <Row xs="1" sm="1" md="2">
        <Col>
          <input type="text" placeholder="Name" />
        </Col>
        <Col>
          <input type="email" placeholder="Email" />
        </Col>
      </Row>
      <Row xs="1" sm="1" md="1">
        <Col>
          <textarea
            cols="30"
            rows="2"
            placeholder="Live your message here!"
          ></textarea>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Contactform;
const Wrapper = styled.form.attrs((props) => ({
  border: props.border || "none",
}))`
  .col {
    padding: 0 2px;
  }
  input,
  textarea {
    width: 100%;
    border: ${(props) => props.border};
    padding: 15px 0 15px 20px;
    border-radius: 50px;
    margin: 5px;
    font-style: italic;
    &:focus {
      outline: none;
    }
  }
`;
