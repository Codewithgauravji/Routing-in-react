import React from 'react'
import './Signup.css'
import Header from './Header'
import { Link } from 'react-router-dom'


function Signup() {
  return (
    <div >
      <Header />
      <div class="main">
      <div class="signup-container">
        <h2>Sign Up</h2>
        <form>
          <div class="form-group">
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your full name" required/>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required/>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required/>
          </div>
          <div class="form-group">
            <label for="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm your password" required/>
          </div>
          <button type="submit" class="signup-button">Sign Up</button>
        </form>
        <p>Already have an account? <Link to="/login">Log in</Link></p>
      </div>
    </div>
    </div>
  )
}

export default Signup