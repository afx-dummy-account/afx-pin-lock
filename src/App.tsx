import React, {
  createContext,
  useState,
  useReducer,
  useContext,
  ReducerWithoutAction,
} from "react";
import styled, { createGlobalStyle } from "styled-components";

// TODO: rename Result
import Result from "./comps/Result";
import Screen from "./comps/Screen";
import NumPad from "./comps/NumPad";

import { digit } from "./comps/Screen";

const correctCombination = "2004"; // Alpha FX incorporation

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 0.75em;
  }

  @media screen and (min-width: 75em) {
    html {
      font-size: 1vw;
    }
  }

  @media screen and (min-width: 100em) {
    html {
      font-size: 1em;
    }
  }

  body {
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
  }
`;

// TODO: rename
const Container = styled.div`
  min-width: 25em;
`;

const ErrorNotice = styled.h3`
  font-size: 1.5rem;
  height: 1.5rem;
  text-align: center;
`;

type AppState = {
  unlocked: any;
  digits: any;
  attempts: any;
  blocked: any;
  incorrect: any;
};

const AppInitialState = {
  unlocked: false,
  digits: [],
  attempts: 0,
  blocked: false,
  incorrect: false,
};

const AppStateContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<any>;
}>({ state: AppInitialState, dispatch: () => null });

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

enum Actions {
  SetAttempts = 'SET_ATTEMPTS',
  SetBlocked = 'SET_BLOCKED',
  SetDigits = 'SET_DIGITS',
  SetIncorrect = 'SET_INCORRECT',
  SetUnlocked = 'SET_UNLOCKED',
}

type PayLoads = {
  [Actions.SetAttempts]: any,
  [Actions.SetBlocked]: any,
  [Actions.SetDigits]: any,
  [Actions.SetIncorrect]: any,
  [Actions.SetUnlocked]: any,
}

type Rename = ActionMap<PayLoads>[keyof ActionMap<PayLoads>]

const AppReducer = (state: AppState, action: Rename) => {
  switch (action.type) {
    case Actions.SetUnlocked:
      return {
        ...state,
        unlocked: action.payload.unlocked,
      };

    case Actions.SetDigits:
      return {
        ...state,
        digits: action.payload.digits,
      };

    case Actions.SetAttempts:
      return {
        ...state,
        attempts: action.payload.attempts,
      };

    case Actions.SetBlocked:
      return {
        ...state,
        blocked: action.payload.blocked,
      };

    case Actions.SetIncorrect:
      return {
        ...state,
        incorrect: action.payload.incorrect,
      };

    default:
      return state;
  }
};

const AppStateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, AppInitialState)

  return (
  <AppStateContext.Provider value={{ state, dispatch }}>
    {children}
  </AppStateContext.Provider>
)};

const useAppStateValue = () => useContext(AppStateContext);

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
          {incorrect && !blocked && "Incorrect entry"}
          {blocked && "Too many incorrect attempts"}
        </ErrorNotice>
        {!unlocked && !blocked && (
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
        )}
      </Container>
    </>
  );
}

export default App;
