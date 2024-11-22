import React from 'react'
import './Login.css'
import Header from './Header'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div>
      <Header />
      <div class="main">
      <div class="login-container">
        <h2>Login</h2>
        <form>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required/>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required/>
          </div>
          <button type="submit" class="login-button">Login</button>
        </form>
        <p>Don't have an account? <Link to="/signup">Signup</Link></p>
      </div>
    </div>
    </div>
  )
}

export default Login