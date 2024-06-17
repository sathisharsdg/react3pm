import React, { useState } from 'react'
import "../Css/ClassChanges.css";
function Inputlength() {
   
    const [textval,setTextVal] = useState("");
    const [newTextval,setNewTextVal] = useState("");
    const changeCase = ()=>{
         setNewTextVal(textval)
    }
    

  return (
    <div>
        <input type="text" onChange={e=>setTextVal(e.target.value)}/>
         <button onClick={changeCase}>ChangeTextCase</button>
        
       
         <div className="textcase">
              {
                 newTextval.split("").map((d,i)=>{
                      return(
                        <div key={i}>
                            <h2>{d.toUpperCase() === d ? d.toLowerCase() :d.toUpperCase() } {i}</h2>
                        </div>                        
                      )
                 })
              }
         </div>

        
    </div>
  )
}

export default Inputlength
