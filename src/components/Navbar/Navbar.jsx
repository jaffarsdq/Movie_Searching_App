import React, { useState } from 'react'
import './navbar.css'
function Navbar() {

  const [isAutoCompleteVisible,setIsAutoCompleteVisible] = useState(false);

  return (
    <nav className="nav">
       <div className="nav-brand">Movie Quest</div>
       <div className="nav-search">
          <input className="search" type="search" name="search" id="search" placeholder='What movie are you thinking about...'
            onFocus={() => setIsAutoCompleteVisible(true)}
            onBlur={() => setIsAutoCompleteVisible(false)}
          />
          <div className="search-list" style={{display: (isAutoCompleteVisible) ? 'block' : 'none'}}>
            <div className='auto-complete'>result</div>
            <div className='auto-complete'>result</div>
            <div className='auto-complete'>result</div>
            <div className='auto-complete'>result</div>
            <div className='auto-complete'>result</div>
          </div>
       </div>
        <button className="nav-theme-btn">Theme</button>
    </nav>
  )
}

export default Navbar;