import React from "react";
import styled from "styled-components";
import { FaPencilAlt } from "react-icons/fa";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../partials/Subtitle";
import Title from "../partials/Title";

const Mission = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col>
            <div>
              <img src="/img/asset-36.jpg" width="100%" height="100%" alt="" />
            </div>
          </Col>
          <Col>
            <div className="content">
              <div>
                <Subtitle title="About Us" color="#f37335" />
                <Title
                  size="48px"
                  margin="10px 0 20px 0"
                  weight="700"
                  title="Our Mission"
                />
                <Subtitle
                  size="14px"
                  margin="0 0 15px"
                  title="Praesent rhoncus justo erat, sed sollicitudin arcu malesuada vel. Etiam scelerisque justo ut purus luctus ullamcorper. Vivamus vitae elit ligula. Fusce eu rutrum nisl."
                />
                <ul>
                  <li>
                    <FaPencilAlt /> Etiam ante nisl, maximus vitae sem non,
                    dignissim
                  </li>
                  <li>
                    <FaPencilAlt /> Donec blandit, sapien eu porttitor blandit
                  </li>
                  <li>
                    <FaPencilAlt /> Sed at urna at massa viverra feugiat non
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Mission;
const Wrapper = styled.div`
  margin-bottom: 60px;
  img {
    border-radius: 100%;
  }
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    ul {
      li {
        margin: 0 0 3px;
        svg {
          color: #f37335;
        }
      }
    }
  }
`;
