import React, { useState } from 'react'
import ColorChanges from './Pages/ColorChanges'
import ClassChanges from './Pages/ClassChanges'
import ShowTexts from './Pages/ShowTexts'
import Getinoutval from './Pages/Getinoutval'

function App() {

   // const [mycourse,setMycourse] = useState("Mern Stack Learning");
   // setTimeout(()=>{
   //    setMycourse("NEw React js")
   // },4000)

   // const  [course,setCourse] = useState("---")
   // const changeText = ()=>{
   //      setCourse("Started Learning.. Reavct")
   // }
     
   //   const [condition,setCondition] = useState(true);     
   //   const changeText = ()=>{
   //       setCondition(!condition)
   //   }

   const [pageCondtion,setPageCondition] = useState(false)
  const showPages = ()=>{
    setPageCondition(!pageCondtion)
  }
  return (
     <div>
        {/* <button onClick={changeText}>CLICK</button>
        <h1>{condition === true ? "Deepak" : "Daniel"}</h1> */}

        {/* <ClassChanges/>  */}

        {/* <div>
         {pageCondtion === true ?  <ColorChanges/> :    <ShowTexts/>  }
            <button onClick={showPages}>Toggle Pages</button>
        </div> */}
        
        <Getinoutval/>
     
          
     </div>
        
  
  )
}

export default App
