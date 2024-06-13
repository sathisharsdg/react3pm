import React from 'react'
import Aboutus from './Pages/Aboutus';
import Gallery from './Pages/Gallery';

function App() {
    const opentext = ()=>{
        console.log("Hi im clicked");
    }
      let arr = [2,3,4,5,6,"one","two","three"];
    const myaddress = "I am from Chennai";
  return (
     <>
        <h1>Welcome Aimore</h1>
         <button onClick={opentext}>CLICK</button>
         <Aboutus address = {myaddress} arrdata ={arr}/>
         <Gallery newaddress= {myaddress}/>
     </>
  )
}

export default App
