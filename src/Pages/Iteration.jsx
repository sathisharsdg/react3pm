import React, { useState } from 'react'

function Iteration({data}) {
    
   
  return (
    <div>
        {
            data.map((r)=>{
                 return(
                    <div>
                       <h2>{r.id}</h2>
                       <h3>{r.fName}</h3>
                       <h3>{r.lName}</h3>
                       <h4>{r.email}</h4>
                       <h5>{r.role}</h5>
                    </div>
                 )
            })
        }
    </div>
  )
}

export default Iteration
