import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import Title from "./partials/Title";
import Subtitle from "./partials/Subtitle";
import { Link } from "react-router-dom";
const News = () => {
  return (
    <Wrapper>
      <Container>
        <div className="heading">
          <Title size="48px" weight="700" title="Recent News" />
          <Subtitle
            size="14px"
            padding="10px"
            title="ullam fringilla ipsum sed enim scelerisque, ac porttitor libero egestas. Donec iaculis nisi eget bibendum efficitur. Lorem ipsum dolor sit."
          />
        </div>
        <Row xs="1" sm="1" md="3">
          <Col>
            <div className="items">
              <div>
                <img
                  src="/img/asset-29.webp"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </div>
              <Title
                size="20px"
                padding="15px 0"
                title="Healthy Breakfast for Healthy Body"
              />
              <Subtitle
                size="14px"
                padding="8px 0"
                fontStyle="italic"
                title="July 9, 2020 | No Comments"
              />
              <Subtitle
                size="14px"
                padding="8px 0"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius, nisi a consequat gravida, nunc"
              />
              <Link to="/">Read More</Link>
            </div>
          </Col>
          <Col>
            <div className="items">
              <div>
                <img
                  src="/img/asset-30.webp"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </div>
              <Title
                size="20px"
                padding="15px 0"
                title="Exactly How I Improved Education"
              />
              <Subtitle
                size="14px"
                padding="8px 0"
                fontStyle="italic"
                title="July 9, 2020 | No Comments"
              />
              <Subtitle
                size="14px"
                padding="8px 0"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius, nisi a consequat gravida, nunc"
              />
              <Link to="/">Read More</Link>
            </div>
          </Col>
          <Col>
            <div className="items">
              <div>
                <img
                  src="/img/asset-31.webp"
                  width="100%"
                  height="100%"
                  alt=""
                />
              </div>
              <Title size="20px" padding="15px 0" title="Healthy Food To Eat" />
              <Subtitle
                size="14px"
                padding="8px 0"
                fontStyle="italic"
                title="July 9, 2020 | No Comments"
              />
              <Subtitle
                size="14px"
                padding="8px 0"
                title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius, nisi a consequat gravida, nunc"
              />
              <Link to="/">Read More</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default News;
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
  .items {
    img {
      border-radius: 10px;
    }
  }
`;
