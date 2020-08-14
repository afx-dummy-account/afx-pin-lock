import React from "react";
import styled from "styled-components";
import NumPadButton from "./NumPadButton";

const NumPadContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 120px);
  grid-template-columns: repeat(3, 120px);
`;

// TODO: rename, type, in function and in hook
const createDigitPressHandler = (value: any, prev: any, setter: any) => () => {
  setter([...(prev.length === 4 ? prev.slice(1) : prev), value]);
};

// TODO: type
type Props = {
  digits: any;
  setDigits: any;
  setUnlocked: any;
  correctCombination: any;
  attempts: any;
  setAttempts: any;
  blocked: any;
  setBlocked: any;
  setIncorrect: any;
};

export default ({
  digits,
  setDigits,
  setUnlocked,
  correctCombination,
  attempts,
  setAttempts,
  setBlocked,
  setIncorrect,
}: Props) => {
  return (
    <NumPadContainer>
      <NumPadButton
        onPress={createDigitPressHandler("1", digits, setDigits)}
        value="1"
      />
      <NumPadButton
        onPress={createDigitPressHandler("2", digits, setDigits)}
        value="2"
      />
      <NumPadButton
        onPress={createDigitPressHandler("3", digits, setDigits)}
        value="3"
      />
      <NumPadButton
        onPress={createDigitPressHandler("4", digits, setDigits)}
        value="4"
      />
      <NumPadButton
        onPress={createDigitPressHandler("5", digits, setDigits)}
        value="5"
      />
      <NumPadButton
        onPress={createDigitPressHandler("6", digits, setDigits)}
        value="6"
      />
      <NumPadButton
        onPress={createDigitPressHandler("7", digits, setDigits)}
        value="7"
      />
      <NumPadButton
        onPress={createDigitPressHandler("8", digits, setDigits)}
        value="8"
      />
      <NumPadButton
        onPress={createDigitPressHandler("9", digits, setDigits)}
        value="9"
      />
      <NumPadButton
        onPress={() => {
          setDigits([]);
        }}
        value="Clear"
      />
      <NumPadButton
        onPress={createDigitPressHandler("0", digits, setDigits)}
        value="0"
      />
      <NumPadButton
        onPress={() => {
          if (digits.join("") === correctCombination) {
            setIncorrect(false)
            setUnlocked(true);
            setAttempts(0);
          } else {
            setIncorrect(true)
          }

          if (attempts <= 2) {
            setAttempts(attempts + 1);
          }

          if (attempts === 3) {
            setBlocked(true)
            setAttempts(0);

            return
          }

          setDigits([]);
        }}
        value="Unlock"
      />
    </NumPadContainer>
  );
};
