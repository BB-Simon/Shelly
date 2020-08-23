import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import Title from "./partials/Title";
import Subtitle from "./partials/Subtitle";
import Button from "./partials/Button";
import Classitems from "./partials/Classitems";

const Classes = () => {
  return (
    <Wrapper>
      <Container>
        <Row xs="1" sm="1" md="2">
          <Col>
            <div className="heading">
              <Title
                size="48px"
                margin="0 0 20px"
                weight="700"
                title="Our Classes"
              />
              <Subtitle
                size="14px"
                padding="10px"
                title="Nam mattis felis id sodales rutrum. Nulla ornare tristique mauris, a laoreet erat ornare sit amet. Nulla sagittis faucibus lacus."
              />
            </div>
          </Col>
          <Col>
            <div className="box">
              <div>
                <Button title="All Classes" />
              </div>
            </div>
          </Col>
        </Row>
        <Row xs="1" sm="1" md="3">
          <Col>
            <Classitems
              title="Basic English Speaking and Grammar"
              date="Mon-Fri 10 AM - 12 AM"
              imgOne="/img/asset-18.webp"
              imgTwo="/img/asset-19.jpeg"
              price="$67"
            />
          </Col>
          <Col>
            <Classitems
              title="Natural Sciences & Mathematics Courses"
              date="Mon-Fri 10 AM - 12 AM"
              imgOne="/img/asset-20.webp"
              imgTwo="/img/asset-21.jpeg"
              price="$97"
            />
          </Col>
          <Col>
            <Classitems
              title="Environmental Studies & Earth Sciences"
              date="Mon-Fri 10 AM - 12 AM"
              imgOne="/img/asset-22.webp"
              imgTwo="/img/asset-19.jpeg"
              price="$75"
            />
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Classes;
const Wrapper = styled.div`
  margin-bottom: 50px;
  .heading {
    margin: 30px 0;
  }
  .box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding-bottom: 40px;
  }
  .class-item {
    margin: 5px 0;
    background: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    .item-content {
      padding: 20px;
      p {
        font-style: italic;
      }
      .item-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
          border: none;
          border-radius: 100%;
        }
      }
    }
    img {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom: 3px solid #155799;
    }
  }
`;
