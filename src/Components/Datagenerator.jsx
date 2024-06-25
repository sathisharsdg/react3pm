import React, { useEffect, useState } from 'react';
import { API_URL } from '../API_DATA/Api_URL';
import axios from "axios";
function Datagenerator() {
    const [Message,setMessage] = useState("");
    const [apiData,setApiData] = useState()
const getContents = ()=>{
     axios.get(`${API_URL}/fact`)
     .then((res)=>{
         console.log(res.data);
         setApiData(res.data.fact)
         setMessage("Data Loaded");
     }).catch((err)=>{
         console.log("some error came with the API");
         console.log(err.message);
         setMessage(err.message);
     })
}

useEffect(()=>{
    getContents();
},[])

  return (
    <div>
         <div className="container">
             <div className="row">
                 <div className="col-md-12">
                      <button onClick={getContents}>GENERATE CONTENT</button>
                      <h5>{Message}</h5>
                      <div>
                         {
                              <h4>{apiData}</h4>
                         }
                      </div>
                 </div>
             </div>
         </div>
    </div>
  )
}

export default Datagenerator
