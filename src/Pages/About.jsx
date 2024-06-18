import React from 'react'

function About({setFname,setLname,getFullName,newFirstName,newLastName}) {
  return (
    <div>
       <h2>Welcome to About page</h2>
       <h2>Welcome to Home Page</h2>
        <input type="text" onChange={e=>setFname(e.target.value)}/>
        <input type="text" onChange={e=>setLname(e.target.value)}/>
        <button onClick={getFullName}>GET FULL NAME</button>
        <h1>{newFirstName}{newLastName}</h1>
    </div>
  )
}

export default About
