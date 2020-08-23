import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";
import Title from "./Title";

const Itemheader = ({ title }) => {
  return (
    <Wrapper>
      <Container>
        <div className="content">
          <Title size="64px" title={title} />
          <ul>
            <li>Home</li>
            <li>Template</li>
            <li>{title}</li>
          </ul>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Itemheader;
const Wrapper = styled.div`
  background: #f2f7fd;
  padding: 60px 0;
  margin-bottom: 60px;
  text-align: center;
  .content {
    padding: 50px 0;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        margin: 0 3px;
        padding: 0 3px;
        border-right: 1px solid #575757;
        font-size: 14px;
      }
    }
  }
`;
