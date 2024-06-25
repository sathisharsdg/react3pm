import React, { useState } from 'react'
import Userone from './Components/Userone';
import Usertwo from './Components/Usertwo';
import Datagenerator from './Components/Datagenerator';
import Allist from './Components/Allist';

function App() {
  // const [show,setShow] = useState(false);
  // const showHideComponents = ()=>{
  //     setShow(!show)
  // }

  return (
    <div>
       {/* <button onClick={showHideComponents}>CLICK</button>

       {
          show === true ? <Userone/> : <Usertwo/>
       } */}


       <Datagenerator/>
       <Allist/>

      
       
       
    </div>
  )
}

export default App
