import React, { useState } from 'react';
// TODO: rename Result
import Result from './comps/Result'
import Screen from './comps/Screen'
import NumPad from './comps/NumPad'

function App() {
  const [unlocked, setUnlocked] = useState(false)
  const [digits, setDigits] = useState<Number[] | null>(null)
  const [attempts, setAttempts] = useState(0)
  const [blocked, setBlocked] = useState(false)

  return (
    <>
      <Result unlocked={unlocked} />
      <Screen digits={digits} />
      <NumPad />
    </>
  );
}

export default App;
