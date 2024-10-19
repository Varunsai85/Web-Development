import React,{useContext} from 'react'
import { countContext } from '../context/context'

const Component1 = () => {
    let value=useContext(countContext)    
  return (
    <div>
      {value.count}
    </div>
  )
}

export default Component1
