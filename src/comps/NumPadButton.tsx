import React, { useEffect, useCallback } from "react";
import styled from "styled-components";

export const NumpadButton = styled.button`
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

// TODO: type
type Props = {
  digits: any;
  setDigits: any;
  value: any;
  keyCode: any;
};

export const NumpadDigitButton = ({ value, digits, setDigits, keyCode }: Props) => {
  const handlePress = useCallback(() => {
    setDigits([...(digits.length === 4 ? digits.slice(1) : digits), value])
  }, [digits, setDigits, value])

  const escFunction = useCallback((event) => {
    console.log('escFunction')
    if(event.keyCode === keyCode) {
      handlePress()
    }
  }, [keyCode, handlePress]);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);

    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
  }, [escFunction]);

  return (
    <NumpadButton
      onClick={handlePress} >
      {value}
    </NumpadButton>
  );
};
