import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <nav className="nav">
       <div className="nav-brand">
        <div className="nav-title">Movie Quest</div>
       </div>
       <div className="nav-search">
        <input className="search" type="search" name="search" id="search" placeholder='What movie are you thinking about...'/>
        <button className="search-btn">Search</button>
       </div>
       <div className="nav-theme-btn">
        <button className="theme-btn">Theme</button>
       </div>
    </nav>
  )
}

export default Navbar