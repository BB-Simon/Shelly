import React from "react";
import styled from "styled-components";
import { Row, Col, Container } from "reactstrap";
import { CgSearchLoading } from "react-icons/cg";
import Title from "./Title";
import Subtitle from "./Subtitle";

const Subheader = () => {
  return (
    <Wrapper>
      <Container>
        <Row xs="1" sm="1" md="2">
          <Col>
            <div className="left-item">
              <div className="item-center">
                <Title
                  size="64px"
                  weight="600"
                  margin="0 0 20px 0"
                  color="#2b2b2b"
                  title="The Smarter Way to Learn Anything"
                />
                <Subtitle
                  size="14px"
                  title="Mauris malisuada enim eget blandit gravida. Duis hendrerit cursus turpis, id mollis est rutrum nec. Sed interdum nisi id libero tincidunt, sit amet vestibulum tortor porttitor. Cras ligula lacus, ullamcorper se."
                />
                <form>
                  <input type="search" placeholder="search..." />
                  <button type="submit">
                    <CgSearchLoading />
                  </button>
                </form>
              </div>
            </div>
          </Col>
          <Col>
            <div className="item-wrapper">
              <div className="item-1">
                <img src="/img/asset-1.jpeg" alt="" />
              </div>
              <div className="item-2">
                <img src="/img/asset-2.jpeg" alt="" />
              </div>
              <div className="item-3">
                <img src="/img/asset-3.jpeg" alt="" />
              </div>
              <div className="item-4">
                <img
                  src="/img/asset-4.jpeg"
                  width="135px"
                  height="135px"
                  alt=""
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Subheader;
const Wrapper = styled.div`
  .left-item {
    width: 100%;
    height: 630px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .item-center {
      margin-top: auto;
    }
    form {
      margin-top: 40px;
      max-width: 100%;
      background: #fff;
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      display: flex;
      justify-content: space-between;
      align-items: center;
      input {
        background: none;
        color: #7e8e8e;
        border: none;
        width: 90%;
        padding: 15px 25px;
        &:focus {
          outline: none;
        }
      }
      button {
        width: 55px;
        height: 55px;
        border: none;
        padding: 0 14px;
        background: #155799;
        position: relative;
        transition: all 0.5s ease-out;
        svg {
          color: #ffffff;
          font-size: 2rem;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        &:hover {
          background: #f37335;
        }
        &:focus {
          outline: none;
        }
      }
    }
  }

  .item-wrapper {
    padding: 80px 0;
    position: relative;
    .item-2 {
      position: absolute;
      bottom: -50%;
      left: 0%;
    }
    .item-3 {
      position: absolute;
      top: 80%;
      left: 50%;
    }
    .item-4 {
      position: absolute;
      bottom: -110%;
      left: 40%;
    }
    img {
      border-radius: 100%;
    }
  }
`;
