import React, { useState } from 'react'

function About() {
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [address,setAddress] = useState("");
  const formsData = {username,email,password,address};
  const getAllData = (e)=>{ 
      e.preventDefault();  // to avoid the default form behaviour...
      console.log(formsData);
  }
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form onSubmit={getAllData}>
              <div className="form-group mb-2">
                <input type="text" placeholder='enter username' className='form-control'  onChange={e=>setUsername(e.target.value)}/>
              </div>
              <div className="form-group mb-2">
                <input type="text" placeholder='enter email' className='form-control'  onChange={e=>setEmail(e.target.value)}/>
              </div>

              <div className="form-group mb-2">
                <input type="text" placeholder='enter password' className='form-control'  onChange={e=>setPassword(e.target.value)}/>
              </div>
              <div className="form-group mb-2">
                <input type="text" placeholder='enter address' className='form-control'  onChange={e=>setAddress(e.target.value)}/>
              </div>
              <div className="form-group">
                  <button type='submit' className='btn btn-primary'>GET DDATA</button>
              </div>

            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
