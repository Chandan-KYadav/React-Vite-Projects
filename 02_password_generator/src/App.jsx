import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  // useRef Hooks

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(function() {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){
      str += "0123456789"
    }

    if(charAllowed){
      str += "!@#$%^&*_~`"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(function() {
    passwordRef.current?.select()  // current? optional select if value is  null
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => { passwordGenerator()},
   [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-lg px-4 my-8 text-orange-500 bg-gray">
        <h1 className="text-4xl text-white text-center my-3">Password Generator</h1>
        <div className='flex rounded-lg overflow-hidden mb-4 '>
          <input ref={passwordRef} type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly/>
          <button onClick={copyPasswordToClipboard} className='rounded px-2' style={{backgroundColor:"blueviolet"}}>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input value={length} className='cursor-pointer' onChange={(event) => {setLength(event.target.value)}} type="range" min={6} max={20}/>
            <label>Length: {length}</label>
          </div>

          <div className='flex item-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => { setNumberAllowed((prev) => !prev)}}/>
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex item-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={() => { setCharAllowed((prev) => !prev)}}/>
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App



