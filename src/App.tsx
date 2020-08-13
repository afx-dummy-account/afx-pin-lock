import React, { useState } from 'react';
// TODO: rename Result
import Result from './comps/Result'
import Screen from './comps/Screen'
import NumPad from './comps/NumPad'

import { digit } from './comps/Screen'

function App() {
  const [unlocked, setUnlocked] = useState(false)
  const [digits, setDigits] = useState<digit[]>([])
  const [attempts, setAttempts] = useState(0)
  const [blocked, setBlocked] = useState(false)

  console.log('digits', digits)

  return (
    <>
      <Result unlocked={unlocked} />
      <Screen digits={digits} />
      <NumPad digits={digits} setDigits={setDigits} />
    </>
  );
}

export default App;
