import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Users() {
    const [userData,setUserData] = useState([]);
    const redirectpage = useNavigate()
    const getuserapi = async ()=>{
        await axios.get("https://665969a6de346625136c4408.mockapi.io/users")
        .then((r)=>{
            setUserData(r.data);  
            console.log(r.data);         
        }).catch((er)=>{
            console.log(er);
        })
    }

    const deleteData = async(id)=>{
         await axios.delete(`https://665969a6de346625136c4408.mockapi.io/users/${id}`)
         .then((res)=>{
              console.log(res, "user deleted");
              getuserapi();
              
         }).catch((er)=>{
             console.log(er);
         })
    }

    const onEditData = (data)=>{
        redirectpage("/update");
        localStorage.setItem("id", data.id);
        localStorage.setItem("username", data.username);
        localStorage.setItem("email", data.email);
        localStorage.setItem("role", data.role);
        localStorage.setItem("salary", data.salary);
        localStorage.setItem("location", data.location);
    }
    useEffect(()=>{
        getuserapi()
    },[])
  return (
    <div>
        <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <h3>User Details</h3>
                      <h2>Total Users: {userData.length}</h2>
                       <table className='table'>
                         <thead>
                             <tr>
                                <th>Id</th>
                                <th>USername</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th>Role</th>
                                <th>Salary</th>
                                <th>Edit/Delete</th>
                             </tr>
                         </thead>
                         <tbody>
                              {
                                  userData.map((res,index)=>{
                                      return(
                                          <tr key={index}>
                                              <td>{res.id}</td>
                                              <td>{res.username}</td>
                                              <td>{res.email}</td>
                                              <td>{res.location}</td>
                                              <td>{res.role}</td>
                                              <td>{res.salary}</td>
                                              <td>
                                              <button className='brn btn-primary mx-3' onClick={()=>onEditData(res)}>Edit</button>
                                              <button className='brn btn-danger' onClick={()=>deleteData(res.id)}>Delete</button>
                                              </td>
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

export default Users
