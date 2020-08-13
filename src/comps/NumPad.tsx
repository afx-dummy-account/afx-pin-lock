import React from "react";
import styled from "styled-components";
import NumPadButton from "./NumPadButton";

const NumPadContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 120px);
  grid-template-columns: repeat(3, 120px);
`;

// TODO: rename, type, in function and in hook
const createPressHandler = (value: any, prev: any, setter: any) => () => { setter([...(prev.length === 4 ? prev.slice(1) : prev), value]) }

// TODO: rename
const createButtons = () => {}

// TODO: type
type Props = {
    digits: any
    setDigits: any
}

export default ({ digits, setDigits }: Props) => {
  return (
    <NumPadContainer>
      <NumPadButton onPress={createPressHandler('1', digits, setDigits)} value="1" />
      <NumPadButton onPress={createPressHandler('2', digits, setDigits)} value="2" />
      <NumPadButton onPress={createPressHandler('3', digits, setDigits)} value="3" />
      <NumPadButton onPress={createPressHandler('4', digits, setDigits)} value="4" />
      <NumPadButton onPress={createPressHandler('5', digits, setDigits)} value="5" />
      <NumPadButton onPress={createPressHandler('6', digits, setDigits)} value="6" />
      <NumPadButton onPress={createPressHandler('7', digits, setDigits)} value="7" />
      <NumPadButton onPress={createPressHandler('8', digits, setDigits)} value="8" />
      <NumPadButton onPress={createPressHandler('9', digits, setDigits)} value="9" />
      <NumPadButton onPress={createPressHandler('Clear', digits, setDigits)} value="Clear" />
      <NumPadButton onPress={createPressHandler('0', digits, setDigits)} value="0" />
      <NumPadButton onPress={createPressHandler('Unlock', digits, setDigits)} value="Unlock" />
    </NumPadContainer>
  );
};
