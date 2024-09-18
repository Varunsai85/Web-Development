import { useState,useEffect } from 'react'

import './App.css'
import Navbar from './components/Navbar';

function App() {
  const [data,setData]=useState([])
  const fetchData=async ()=>{
    const a=await fetch("https://jsonplaceholder.typicode.com/posts");
    const r=await a.json();
    setData(r)
    console.log(r)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <>
      <Navbar/>
      <div className='flex mx-auto w-[90%] gap-9 flex-wrap'>
        {data.map((input)=>{
          return (<div className='rounded-lg shadow-md p-5 border border-gray-300 bg-slate-200 max-w-96'>
            <div>UserId : {input.userId}</div>
            <div>id : {input.id}</div>
            <div>title : {input.title}</div>
            <div>body : {input.body}</div>
          </div>)
        })}
      </div>
    </>
  )
}

export default App
