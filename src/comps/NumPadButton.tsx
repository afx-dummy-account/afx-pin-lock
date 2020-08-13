import React from "react";
import styled from "styled-components";
import { digit } from './Screen'

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

type NumpadValue = digit | 'Clear' | 'Unlock'

// TODO: type
type Props = {
    value: NumpadValue
    onPress: () => void
}

export default ({ value, onPress }: Props) => {
  return <StyledButton onClick={onPress}>{value}</StyledButton>;
};
