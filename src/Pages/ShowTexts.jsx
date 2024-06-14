import React, { useState } from 'react'

function ShowTexts() {
    const [con,setCon] = useState(false);
    const toggleText = ()=>{
         setCon(!con)
    }
  return (
    <div>
        <h2>---------this is show text page -----</h2>
        <h1>{con === true ? "Welcome" : "Not Welcome"}</h1>        
        <button onClick={toggleText}>CLICK</button>

        
    </div>
  )
}

export default ShowTexts
