import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function incVal(){
    if(count<20){
      setCount(count+1)
    }else{
      setCount(20);
    }
  }
  function decVal(){
    if(count>0){
      setCount(count-1);
    }
    else{
      setCount(0);
    }
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={incVal}>Increase</button>
      <button onClick={decVal}>Decrease</button>
    </>
  )
}

export default App
