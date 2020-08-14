import React, { useState } from "react";
import styled from "styled-components";

// TODO: rename Result
import Result from "./comps/Result";
import Screen from "./comps/Screen";
import NumPad from "./comps/NumPad";

import { digit } from "./comps/Screen";

const correctCombination = "2004"; // Alpha FX incorporation

const ErrorNotice = styled.h3`
  height: 20px;
`

function App() {
  // TODO: context?
  const [unlocked, setUnlocked] = useState(false);
  // TODO: should digits just be a string?
  const [digits, setDigits] = useState<digit[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [blocked, setBlocked] = useState(false);
  const [incorrect, setIncorrect] = useState(false);

  console.log("digits", digits);

  return (
    <>
      <Result unlocked={unlocked} />
      <ErrorNotice>
        {incorrect && !blocked && 'Incorrect entry'}
        {blocked && 'Too many incorrect attempts'}
      </ErrorNotice>
      {!unlocked && !blocked &&
        <>
          <Screen digits={digits} />
          <NumPad
            digits={digits}
            setDigits={setDigits}
            setUnlocked={setUnlocked}
            correctCombination={correctCombination}
            attempts={attempts}
            setAttempts={setAttempts}
            blocked={blocked}
            setBlocked={setBlocked}
            setIncorrect={setIncorrect}
          />
        </>
      }
    </>
  );
}

export default App;
