import React from "react";
import styled from "styled-components";

const Subtitle = (props) => {
  return (
    <Wrapper
      size={props.size}
      color={props.color}
      margin={props.margin}
      padding={props.padding}
      weight={props.weight}
      fontStyle={props.fontStyle}
    >
      {props.title}
    </Wrapper>
  );
};

export default Subtitle;
const Wrapper = styled.p.attrs((props) => ({
  size: props.size || null,
  margin: props.margin || null,
  padding: props.padding || null,
  color: props.color || null,
  weight: props.weight || null,
  fontStyle: props.fontStyle || null,
}))`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  weight: ${(props) => props.weight};
  font-style: ${(props) => props.fontStyle};
`;
