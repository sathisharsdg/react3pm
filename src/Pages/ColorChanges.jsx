import React, { useState } from 'react'

function ColorChanges() {
    const [colorVal,setColorval] = useState("orange");
    const [finalVal,setFinalVal] = useState("orange");
   const getChnageColor = ()=>{
       setFinalVal(colorVal)
   }
  return (
    <div>
        <input type="text" placeholder='Enter color value' onChange={(e)=>setColorval(e.target.value)}/>
        <button onClick={getChnageColor}>Change Color</button>
        <div className='box' style={{backgroundColor:finalVal}} >
        </div>
    </div>
  )
}

export default ColorChanges
