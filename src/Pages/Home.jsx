import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Home() {
   const [username,setUsername] = useState("");
   const [email,setEmail] = useState("");
   const [location,setLocation] = useState("");
   const [role,setRole] = useState("");
   const [salary,setSalary] = useState("");
   const redirects = useNavigate();
   const [msg,setMsg] = useState("");
   const addData = async(e)=>{
     e.preventDefault();
    await axios.post("https://665969a6de346625136c4408.mockapi.io/users", {
          username,email,location,role,salary
     })
     .then((res)=>{
         setUsername(" ");
         setEmail(" ");
         setLocation(" ")
         setSalary(" ");
         setRole(" ");
         setMsg("Data Submitted successfuly....!");
         setTimeout(()=>{
          redirects("/users");
         },1000)
        

     }).catch((err)=>{
         console.log(err);
     })
   }
  return (
    <div>
        <div className="container">
           <div className="row mt-5 mb-5">
              <div className="col-md-6 offset-md-3">
               <h5>Enter the details below</h5>
              
                   <form onSubmit={addData}>
                      <div className="form-group mb-3">
                          <input type="text" value={username} placeholder='Enter username' className='form-control'
                          onChange={e=>setUsername(e.target.value)} />
                      </div>
                      <div className="form-group mb-3">
                          <input type="text" value={email}  placeholder='Enter email' className='form-control'
                           onChange={e=>setEmail(e.target.value)} />
                      </div>
                      <div className="form-group mb-3">
                          <input type="text" value={location}  placeholder='Enter Location' className='form-control' 
                           onChange={e=>setLocation(e.target.value)}/>
                      </div>
                      <div className="form-group mb-3">
                          <input type="text" value={role}  placeholder='Enter Jobrole' className='form-control'
                           onChange={e=>setRole(e.target.value)} />
                      </div>
                      <div className="form-group mb-3">
                          <input type="text" value={salary}  placeholder='Enter Salary' className='form-control'
                           onChange={e=>setSalary(e.target.value)} />
                      </div>
                      <div className="form-group mb-3">
                          <button type='submit' className='btn btn-success'>ADD DETAILS</button>
                      </div>
                      <h3>{msg}</h3>
                   </form>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Home
