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
  background-color: ${({ disabled }) => disabled ? '#eee' : '#ccc'};
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px ${({ disabled }) => disabled ? '#bbb' : '#999'};

  ${({ disabled }) => {
    if (!disabled) {
      return `
        &:hover {
          background-color: #aaa;
        }

        &:active {
          background-color: #aaa;
          box-shadow: 0 5px #666;
          transform: translateY(4px);
        }
      `
    }
  }}
`;

// TODO: type
type Props = {
  digits: any;
  setDigits: any;
  value: any;
  keyCode: any;
  setIncorrect: any;
};

export const NumpadDigitButton = ({ value, digits, setDigits, keyCode, setIncorrect }: Props) => {
  const handlePress = useCallback(() => {
    setIncorrect(false)
    setDigits([...(digits.length === 4 ? digits.slice(1) : digits), value])
  }, [setIncorrect, digits, setDigits, value])

  const handleKeyPress = useCallback((event) => {
    if(event.keyCode === keyCode && digits.length < 4) {
      handlePress()
    }
  }, [keyCode, digits, handlePress]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress, false);

    return () => {
      document.removeEventListener('keydown', handleKeyPress, false);
    };
  }, [handleKeyPress]);

  return (
    <NumpadButton
      disabled={digits.length === 4}
      onClick={handlePress} >
      {value}
    </NumpadButton>
  );
};
