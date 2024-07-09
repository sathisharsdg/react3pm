import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Updateusers() {
    const [id,setId] = useState();
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [location,setLocation] = useState("");
    const [role,setRole] = useState("");
    const [salary,setSalary] = useState("");
    const [msg,setMessage] = useState("")

    const redirection = useNavigate();
    const updateData = async (e)=>{
         e.preventDefault();
      await  axios.put(`https://665969a6de346625136c4408.mockapi.io/users/${id}`,{
              username,email,role,salary,location
         }).then((res)=>{
              console.log(res);
              console.log("Data Updated");
              setUsername("");
              setEmail("");
              setLocation("");
              setSalary("");
              setRole("")
              setMessage("Data Updated successfully....!!!")
              setTimeout(()=>{
                redirection("/users")
              },500)
         }).catch((err)=>{
              console.log(err);
         })
    }

    useEffect(()=>{
         setId(localStorage.getItem("id"));
         setUsername(localStorage.getItem("username"));
         setEmail(localStorage.getItem("email"));
         setRole(localStorage.getItem("role"));
         setSalary(localStorage.getItem("salary"));
         setLocation(localStorage.getItem("location"));
    },[])
  return (
    <div>
          <div className="container">
           <div className="row mt-5 mb-5">
              <div className="col-md-6 offset-md-3">
               <h5>Enter the details below</h5>
              
                   <form onSubmit={updateData}>
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
                          <button type='submit' className='btn btn-success'>UPDATE DETAILS</button>
                      </div>
                      <h3>{msg}</h3>
                      
                   </form>
              </div>
           </div>
        </div>
    </div>
  )
}

export default Updateusers
