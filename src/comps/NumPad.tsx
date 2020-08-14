import React from "react";
import styled from "styled-components";
import { NumpadButton, NumpadDigitButton } from "./NumPadButton";

const NumPadContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 120px);
  grid-template-columns: repeat(3, 120px);
`;

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
      <NumpadDigitButton
        digits={digits}
        setDigits={setDigits}
        value="1"
        keyCode={49}
      />
      <NumpadDigitButton
        digits={digits}
        setDigits={setDigits}
        value="2"
        keyCode={50}
      />
      <NumpadDigitButton
        digits={digits}
        setDigits={setDigits}
        value="3"
        keyCode={51}
      />
      <NumpadDigitButton
        digits={digits}
        setDigits={setDigits}
        value="4"
        keyCode={52}
      />
      <NumpadDigitButton
        digits={digits}
        setDigits={setDigits}
        value="5"
        keyCode={53}
      />
      <NumpadDigitButton
        digits={digits}
        setDigits={setDigits}
        value="6"
        keyCode={54}
      />
      <NumpadDigitButton
        digits={digits}
        setDigits={setDigits}
        value="7"
        keyCode={55}
      />
      <NumpadDigitButton
        digits={digits}
        setDigits={setDigits}
        value="8"
        keyCode={56}
      />
      <NumpadDigitButton
        digits={digits}
        setDigits={setDigits}
        value="9"
        keyCode={57}
      />
      <NumpadButton
        onClick={() => {
          setDigits([]);
        }}
      >
        Clear
      </NumpadButton>
      <NumpadDigitButton
        digits={digits}
        setDigits={setDigits}
        value="0"
        keyCode={48}
      />
      <NumpadButton
        onClick={() => {
          if (digits.join("") === correctCombination) {
            setIncorrect(false)
            setUnlocked(true);
            setAttempts(0);
          } else {
            setIncorrect(true)
            setUnlocked(false);
          }

          if (attempts <= 1) {
            setAttempts(attempts + 1);
          }

          if (attempts === 2) {
            setBlocked(true)
            setAttempts(0);

            return
          }

          setDigits([]);
        }}
      >
        Unlock
      </NumpadButton>
    </NumPadContainer>
  );
};
