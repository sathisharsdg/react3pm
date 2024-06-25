import React, { useEffect, useState } from 'react'
import axios from "axios";
import { API_URL } from '../API_DATA/Api_URL';
function Allist() {
     const [message,setMessage] = useState();
     const [apiData,setApiData] = useState([])
    const fectallData = ()=>{
         axios.get(`${API_URL}/facts`)
         .then((response)=>{
             console.log(response.data.data);
             setApiData(response.data.data)
         }).catch((error)=>{
             console.log(error);
         })
    }
    

    useEffect(()=>{
        fectallData();
    },[])
  return (
    <div>
           <div className="container">
               <div className="row mt-5 mb-5">
                     {
                        apiData.map((res)=>{
                             return(
                                <div className='col-md-3'>
                                    <h3>Length is : <b>{res.length}</b></h3>
                                    <h6>{res.fact}</h6>
                                </div>
                             )
                        })
                     }
               </div>
           </div>
    </div>
  )
}

export default Allist
