import React from "react";
import styled from "styled-components";

const Title = (props) => {
  return (
    <Wrapper
      size={props.size}
      color={props.color}
      margin={props.margin}
      padding={props.padding}
      weight={props.weight}
    >
      {props.title}
    </Wrapper>
  );
};

export default Title;
const Wrapper = styled.h1.attrs((props) => ({
  size: props.size || null,
  margin: props.margin || null,
  padding: props.padding || null,
  color: props.color || null,
  weight: props.weight || null,
}))`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-weight: ${(props) => props.weight};
`;
