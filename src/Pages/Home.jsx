import React, { useEffect, useState } from 'react'
import axios from 'axios';
 
import { API_URL } from '../API_DATA/Api_URL';
 
function Home() {
  const [search,setSearch] = useState("");
   let strs = "Aimore tech";
   console.log(strs.includes(""));

  const [apidata, setApidata] = useState([]);

 
 
  //  console.log(typeof(apidata));
  useEffect(() => {
    axios.get(`${API_URL}/posts`)
      .then((res) => {
        setApidata(res.data)
      })
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-12">
            <div>
                <input className='form-control ' type="text" placeholder='Enter Title to search..'  onChange={e=>setSearch(e.target.value)}/>
            </div>
            <table className='table'>
              <thead>
                <tr>
                  <th scope="col">UserId</th>
                  <th scope="col">Id</th>
                  <th scope="col">Title</th>
                  <th scope="col">Body</th>
                </tr>
              </thead>
              <tbody>
                  {
                     apidata.filter((item)=>{
                        return search.toLowerCase() === "" ? item : item.title.toLowerCase().includes(search)
                     }).map((res)=>{
                        return(
                           <tr>
                              <td>{res.userId}</td>
                              <td>{res.id}</td>
                              <td>{res.title}</td>
                              <td>{res.body}</td>
                           </tr>
                        )
                     })
                  }
              </tbody>
            </table>
          </div>
        </div>
      </div>

 

    </div>
  )
}

export default Home
