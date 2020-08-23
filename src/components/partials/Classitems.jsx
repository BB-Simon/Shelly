import React from "react";
import styled from "styled-components";
import Title from "./Title";
import Subtitle from "./Subtitle";

const Classitems = ({ title, date, price, imgOne, imgTwo, schedules }) => {
  return (
    <Wrapper>
      <img src={imgOne} width="100%" height="100%" alt="" />
      <div className="item-content">
        {date ? <Subtitle title={date} /> : null}
        <Title size="20px" margin="15px 0 20px 0" title={title} />
        <div className="item-footer">
          <img src={imgTwo} alt="" />
          <Title size="20px" color="#155799" title={price} />
        </div>
        {schedules ? (
          <div className="item-footer">
            <div>
              {schedules.days.map((day) => (
                <Subtitle size="18px" title={day} />
              ))}
            </div>
            <div>
              {schedules.times.map((time) => (
                <Subtitle size="18px" title={time} color="#155799" />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </Wrapper>
  );
};

export default Classitems;
const Wrapper = styled.div`
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
      padding-bottom: 8px;
      display: flex;
      // align-items: center;
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
`;
