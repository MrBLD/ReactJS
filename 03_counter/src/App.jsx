import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter =5 
  const addValue = () => {
    // counter = counter + 1;
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }
  const RemValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}> Add Value</button>
      <br />
      <button onClick={RemValue}> Remove Value {counter}</button>
    </>
  )
}

export default App