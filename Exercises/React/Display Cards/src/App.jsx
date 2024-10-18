import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [json, setJson] = useState([])
  const fetchData = async () => {
    let a = await fetch('https://jsonplaceholder.typicode.com/posts')
    let response = await a.json();
    setJson(response)
    console.log(response);
  }

  useEffect(() => {
    fetchData()
  }, [])

  const Card = (props) => {
    return (
      <>
        <div className="border-white border-2 max-w-56">
          <div className="datainside">userId : {props.userId}</div>
          <div className="datainside">id : {props.id}</div>
          <div className="datainside">title : {props.title}</div>
          <div className="datainside">body : {props.body}</div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="main-container flex gap-y-6 flex-wrap justify-between m-2">
        {json.map((resp) => {
          return <Card key={resp.id} userId={resp.userId} id={resp.id} title={resp.title} body={resp.body} />
        })}
      </div>
    </>
  )
}

export default App
