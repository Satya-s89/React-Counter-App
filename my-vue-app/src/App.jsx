import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0);
  const [inputValue,setInputValue] = useState(0);
  const [inputVisibility,setInputVisibility] = useState(true);
  return (
    <>
      <div className='Button'>
        <button onClick={()=>{
          if(inputVisibility){
            setInputVisibility(false);
          }else{
            setInputVisibility(true);
          }
        }}>Toggle button</button>

        {inputVisibility && (
          <input type="number" value = {inputValue} onChange={(event)=>{
            console.log(event.target.value);
            setInputValue(event.target.value);
          }}/>
        )}

        
        <button onClick={() => setCount(parseInt(inputValue))}>Set Counter Value</button>
        <button onClick={() => setCount(count+1)}>Count: {count}</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </>
  )
}

export default App
