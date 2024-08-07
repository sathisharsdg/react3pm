import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Home from './Pages/Home'
import Users from './Pages/Users'
import Updateusers from './Pages/Updateusers'
 
function App() {
  return (
    <div>
       
        <Router>
        <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/users">Users</Link></li>
            </ul>
              
           <Routes>
           <Route path='/' element={<Home/>}></Route>           
           <Route path='/users' element={<Users/>}></Route>        
           <Route path='/update' element={<Updateusers/>}></Route>        
           </Routes>
        </Router>

       
    </div>
  )
}

export default App
