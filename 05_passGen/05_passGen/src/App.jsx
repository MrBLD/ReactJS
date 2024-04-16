import { useState, useCallback, useEffect} from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passGen = useCallback(() => {
    let pass = ""
    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+~`|}{[]\:;?><,./-="

    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1))
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  useEffect(()=>{
    passGen()
  }, [length, numAllowed, charAllowed, passGen])
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-cyan-500">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items0center gap-x-1'>
            <input type="range"
              min={8}
              max={101}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setlength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div>
            <input type="checkbox"
              defaultChecked= {numAllowed}
              id='numberInput'
              onChange={() => {
                setnumAllowed((prev) => !prev)
              }} /> Numbers
          </div>
          <div>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id='characterInput'
              onChange={() => {
                setcharAllowed((prev) => !prev)
              }} /> Characters
          </div>
        </div>
      </div>
    </>
  )
}

export default App
