import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div>
      <nav>
        <a href="#" class="logo">Developer</a>
        <ul class="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/aboutus">About</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        <div class="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    </div>
  )
}

export default Header