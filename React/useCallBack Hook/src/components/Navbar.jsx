import React from 'react'
import { memo } from 'react'

const Navbar = ({adjective,getAdjective}) => {
    console.log("Rerendering");
  return (
    <div>
      <nav>
        I'm a {adjective} Navbar
        <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
      </nav>
    </div>
  )
}

export default memo(Navbar)
