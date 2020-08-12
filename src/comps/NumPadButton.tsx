import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100px;
  height: 100px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #ccc;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;

  &:hover {
    background-color: #aaa;
  }

  &:active {
    background-color: #aaa;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export default () => {
  return <StyledButton>Button</StyledButton>;
};
