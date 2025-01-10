import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/heading.jsx'



function App() {
  const [count, setCount] = useState(0)
  const num = 4

  const today = new Date();
  console.log(today);
  const currentYear = today.getFullYear();

  console.log(currentYear);

  let message
  let textColor = {
      color: ""
  }
  if (today.getHours() < 12) {
    message = "good morning"
    textColor = {color: "red"}
  } else if (12 < today.getHours() < 18){
    message = "good afternoon"
    textColor = {color: "green"}
  } else {
    message = "good evening"
    textColor = {color: "blue"}
  }

  return (
    <>
    
      <heading />
      {/* <h1 className='heading' style={textColor}>{message}</h1> */}
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3 {num}</li>
      </ul>
      <p>created by Brendan Shelton</p>
      <p>{currentYear}</p>
    </>
  )
}

export default App
