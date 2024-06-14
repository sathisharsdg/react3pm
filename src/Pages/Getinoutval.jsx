import React, { useState } from 'react'

function Getinoutval() {
    const [inputval,setInputval] = useState("im sathish")
  return (
    <div>
        <input type="text" placeholder='Enter some value' onChange={(e)=>setInputval(e.target.value)}/>
         <h1>{inputval}</h1>
    </div>
  )
}

export default Getinoutval
