import React from 'react'
import {Link } from 'react-router-dom'
function Header() {
  return (
    <div>
        <section className='headers'>
        <div className='main-container'>
           <ul className='menu-items'>
             <li><Link to="/">Home</Link></li>
             <li><Link to="/about">About</Link></li>
             <li><Link to="/services">Services</Link></li>
             <li><Link to="/gallery">Gallery</Link></li>
             <li><Link to="/contact">Contact</Link></li>
            </ul>         
       </div>
        </section>
  
    </div>
  )
}

export default Header
