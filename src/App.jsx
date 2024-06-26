import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Sampledata from './Pages/Sampledata'
function App() {
  return (
    <div>
      <BrowserRouter>
        <ul class="nav">
          <li class="nav-item">
            <Link to="/" className='nav-link'>HOME</Link>         
             
          </li>
          <li class="nav-item">
          <Link to="/sample" className='nav-link'>SAMPLE DATA</Link>
          </li>
         
        </ul>
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/sample' exact element={<Sampledata />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
