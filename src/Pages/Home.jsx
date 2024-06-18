import React, { useState } from 'react'
import About from './About';

function Home() {
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [newFirstName,setnewFirstName] = useState("");
    const [newLastName,setnewLastName] = useState("");
    const getFullName = ()=>{
         setnewFirstName(fname);
         setnewLastName(lname)
    }
  
  return (
    <div>
      <About 
      setFname={setFname}
      setLname={setLname}
      getFullName={getFullName}
      newFirstName= {newFirstName}
      newLastName= {newLastName}
      
      
      />
    </div>
  )
}

export default Home
