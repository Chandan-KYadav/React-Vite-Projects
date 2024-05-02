import { useState } from "react"

function App() {
  
  const [color, setColor] = useState("#4C3938")

  return (
    <div className="w-full h-screen" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 px-4 py-1 gap-2">
        <button onClick={() => {setColor("red")}} className="flex justify-center rounded-full p-2" style={{backgroundColor: "red"}}>Red</button>
        <button onClick={() => {setColor("blue")}} className="flex justify-center  rounded-full p-2" style={{backgroundColor: "blue"}}>Blue</button>
        <button onClick={() => {setColor("green")}} className="flex justify-center rounded-full p-2" style={{backgroundColor: "green"}}>Green</button>
      </div>
    </div>
  )
}

export default App
