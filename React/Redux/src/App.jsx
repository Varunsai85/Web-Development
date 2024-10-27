import './App.css'
import { useState } from 'react'
import Navbar from './compoenets/Navbar'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment, multiply,divided, incrementByAmount } from './features/counter/counterSlice'

function App() {
  const count=useSelector(e=>e.counter.value)
  const dispatch=useDispatch()
  const [incrementAmount, setIncrementAmount] = useState(0)

  return (
    <>
      <Navbar />
      <div>
        <button onClick={()=>dispatch(divided())}>/</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        The current count is {count}
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(multiply())}>*</button>
        <div>
          <input value={incrementAmount} onChange={e=>setIncrementAmount(e.target.value)} />
          <button onClick={()=>dispatch(incrementByAmount(Number(incrementAmount)||0))}>Add amount</button>
        </div>
      </div>
    </>
  )
}

export default App
