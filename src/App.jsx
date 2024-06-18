import React from 'react'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import Header from './Components/Header'
import Footer from './Components/Footer'
function App() {
  return (
    <div>
      <BrowserRouter>
         <Header/>
         <Routes>
             <Route exact path='/' element={<Home/>}></Route>
             <Route path='/about' element={<About/>}></Route>
             <Route path='/services' element={<Services/>}></Route>
             <Route path='/gallery' element={<Gallery/>}></Route>
             <Route path='/contact' element={<Contact/>}></Route>
         </Routes>  
         <Footer/>    
      </BrowserRouter>
    </div>
  )
}

export default App
