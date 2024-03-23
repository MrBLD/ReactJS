import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from '../Components/Card'

function App() {

  let obj={
    name: "React",
    age: 21
  }

  return (
    <>

      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>TailWind Test</h1>
    <div class="flex flex-wrap p-1">
        <Card username="Lucy" btntext='Press Me'/>
      <Card username="Lia" btntext='Touch Me'/>
      </div>
    </>
  )
}

export default App
