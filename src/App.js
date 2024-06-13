import React from 'react'

function App() {
    const opentext = ()=>{
        console.log("Hi im clicked");
    }
  return (
     <>
        <h1>Welcome Aimore</h1>
         <button onClick={opentext}>CLICK</button>
     </>
  )
}

export default App
