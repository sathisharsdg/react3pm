import React, { useState } from 'react'

function Gallery() {
    const [condition,setCondition] = useState(false);

    const showWindow = ()=>{
          setCondition(!condition)
    }
  return (
    <div>
        <button onClick={showWindow}>=</button>
        <div class="sidebar" className={condition === true ? "sidebar open" : "sidebar"}>             
        </div>
    </div>
  )
}

export default Gallery
