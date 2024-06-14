import React, { useState } from 'react'
import "../Css/ClassChanges.css";
function ClassChanges() {
    const [condition,setCondition] = useState(true);
    // const [classattr,setClassAttr] = useState('colorbg');
    const chnageBg = ()=>{
        setCondition(!condition)
    }
  return (
    <div>
        <h1>---------Color change page -------</h1>
        <div className={condition === true ? 'colorbg' : 'newcolorbg'}></div>
        <button onClick={chnageBg}>CHANGE BG</button>
    </div>
  )
}

export default ClassChanges
