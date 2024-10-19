import React,{useContext} from 'react'
import Component1 from './Component1'
import { countContext } from '../context/context'
const Button = () => {
    let value=useContext(countContext)
  return (
    <div>
        <button onClick={()=>{value.setCount((count)=>count+1)}}><span><Component1/></span></button>
    </div>
  )
}

export default Button
