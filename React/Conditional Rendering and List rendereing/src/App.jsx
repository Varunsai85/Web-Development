import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn,setBtn]=useState(false);
  const [todos,setTodo]=useState([
    {
      title:"Hello",
      desc:"Im list 1"
    },
    {
      title:"Hola",
      desc:"Im list 2"
    },
    {
      title:"Namsthe",
      desc:"Im list 3"
    },
    {
      title:"Vanakam",
      desc:"Im list 4"
    }
  ])
  const Todo=({todo})=>{
    return (<>
    <div key={todo.title} className='border border-red-500 m-1'>
          <div>{todo.title}</div>
          <div>{todo.desc}</div>
        </div>
    </>)
  }

  return (
    <>
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showbtn?<button className='bg-blue-400'>Button is true</button>:<button className='bg-red-400'>Button is false</button>}
      {/* Or */}
      {/* {showbtn && <button className='bg-blue-400'>Button is true</button>}for only true */}
      {todos.map(todo=>{
        return <Todo key={todo.title} todo={todo}/>
      })}
      {todos.map(todo=>{
        return <div key={todo.title} className='border border-red-500 m-1'>
          <div>{todo.title}</div>
          <div>{todo.desc}</div>
        </div>
      })}
      <div className="card">
        <button onClick={() => setBtn(!showbtn)
        }>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
