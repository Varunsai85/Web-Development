import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [value,setValue]=useState("Varun");
  const [form,setForm]=useState({email:"",phone:""})
  const handleclick=()=>{
    alert("button \"click me\" is clicked");
  }
  const mouseOverColorChange=()=>{
    document.querySelector(".red").style.backgroundColor="blue";
    document.querySelector(".red").innerHTML="blue button";
  }
  const mouseLeaveColorChange=()=>{
    document.querySelector(".red").style.backgroundColor="red";
    document.querySelector(".red").innerHTML="red button";
  }
  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)
  }
  return (
    <>
      <div>
      <button onClick={handleclick}>click me</button>
      </div>
      <div>
      <button className='red' onMouseOver={mouseOverColorChange} onMouseLeave={mouseLeaveColorChange}>red button</button>
      </div>
      <input type="text" name='email' value={form.email?form.email:""} onChange={handleChange}/>
      <input type="text" name="phone" value={form.phone?form.phone:""} onChange={handleChange} />
    </>
  )
}

export default App
