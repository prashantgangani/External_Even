import React from 'react'
import { Link } from 'react-router-dom'

export const login = () => {
  return (
    <>
      <form className="login-form" >
      <h2>Login</h2>
      <br />
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
        <div className="form-actions">
            <p>Dont have an Account ?  </p>
             <Link to="/signup">
                 <button type="button" className="btn">Signup</button>
            </Link>
            <button type="button" className="btn" >Cancel</button> 
            </div>
        </form>
      </>
  ) 
}

export default login