import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

// TODO: rename Result
import Result from "./comps/Result";
import Screen from "./comps/Screen";
import NumPad from "./comps/NumPad";

import { digit } from "./comps/Screen";

const correctCombination = "2004"; // Alpha FX incorporation

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 1vw;
  }

  @media screen and (min-width: 50em) {
    html {
      font-size: 0.8em;
    }
  }

  body {
    font-size: calc(12px + 2vw);
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
`

// TODO: rename
const Container = styled.div``

const ErrorNotice = styled.h3`
  font-size: 2rem;
  height: 3rem;
  text-align: center;
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
      <GlobalStyle />
      <Container>
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
      </Container>
    </>
  );
}

export default App;
