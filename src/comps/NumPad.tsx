import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { NumpadButton, NumpadDigitButton } from "./NumPadButton";

const NumPadContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;

  &::before {
    content: '';
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }

  & > *:first-child{
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  } 
`

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
  const clear = useCallback(() => {
    if (digits.length > 0) {
      setDigits([]);
    }
  }, [digits, setDigits]);

  const unlock = useCallback(() => {
    if (digits.length === 4) {
      if (digits.join("") === correctCombination) {
        setIncorrect(false);
        setUnlocked(true);
        setAttempts(0);
      } else {
        setIncorrect(true);
        setUnlocked(false);
      }

      if (attempts <= 1) {
        setAttempts(attempts + 1);
      }

      if (attempts === 2) {
        setBlocked(true);
        setAttempts(0);

        return;
      }

      setDigits([]);
    }
  }, [
    attempts,
    correctCombination,
    digits,
    setAttempts,
    setBlocked,
    setDigits,
    setIncorrect,
    setUnlocked,
  ]);

  const handleKeyPress = useCallback(
    (event) => {
      if (
        (event.keyCode === 8 || event.keyCode === 27) &&
        digits.length !== 0
      ) {
        clear();
      }

      if (event.keyCode === 13 && digits.length === 4) {
        unlock();
      }
    },
    [digits, clear, unlock]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, false);

    return () => {
      document.removeEventListener("keydown", handleKeyPress, false);
    };
  }, [handleKeyPress]);

  return (
    <NumPadContainer>
      <NumpadDigitButton
        digits={digits}
        setDigits={setDigits}
        value="1"
        keyCode={49}
        setIncorrect={setIncorrect}
      />
      <NumpadDigitButton
        digits={digits}
        setDigits={setDigits}
        value="2"
        keyCode={50}
        setIncorrect={setIncorrect}
      />
      <NumpadDigitButton
        digits={digits}
        setDigits={setDigits}
        value="3"
        keyCode={51}
        setIncorrect={setIncorrect}
      />
      <NumpadDigitButton
        digits={digits}
        setDigits={setDigits}
        value="4"
        keyCode={52}
        setIncorrect={setIncorrect}
      />
      <NumpadDigitButton
        digits={digits}
        setDigits={setDigits}
        value="5"
        keyCode={53}
        setIncorrect={setIncorrect}
      />
      <NumpadDigitButton
        digits={digits}
        setDigits={setDigits}
        value="6"
        keyCode={54}
        setIncorrect={setIncorrect}
      />
      <NumpadDigitButton
        digits={digits}
        setDigits={setDigits}
        value="7"
        keyCode={55}
        setIncorrect={setIncorrect}
      />
      <NumpadDigitButton
        digits={digits}
        setDigits={setDigits}
        value="8"
        keyCode={56}
        setIncorrect={setIncorrect}
      />
      <NumpadDigitButton
        digits={digits}
        setDigits={setDigits}
        value="9"
        keyCode={57}
        setIncorrect={setIncorrect}
      />
      <NumpadButton disabled={digits.length === 0} onClick={clear}>
        Clear
      </NumpadButton>
      <NumpadDigitButton
        digits={digits}
        setDigits={setDigits}
        value="0"
        keyCode={48}
        setIncorrect={setIncorrect}
      />
      <NumpadButton disabled={digits.length !== 4} onClick={unlock}>
        Unlock
      </NumpadButton>
    </NumPadContainer>
  );
};
