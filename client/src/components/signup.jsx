import React from 'react'
import { Link } from 'react-router-dom'
export const signup = () => {
  return (
    <form className="login-form" >
      <h2>Sign up</h2><br />
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder='Username' required />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder='Email' required />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder='password' required />
        </div>
        <button type="submit">Submit</button>
        <div className="form-actions">
            
            <p>Already have an account? </p>
            <Link to="/">
                <button type="button" className="btn">Login</button>
            </Link>
            <button type="button" className="btn" >Cancel</button> 
            </div>
        </form>
  )
}

export default signup