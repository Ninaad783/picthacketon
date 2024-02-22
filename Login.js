// Login.js
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div id='main'>
      {/* Image Container */}
      <div>
        <img src="loginbg.png" alt="Logo" id='img' />
      </div>

      {/* Login Container */}
      <div>
        <div id='form-style'>
          <h2>Sign In</h2>
          <form>
            <div>
              <label htmlFor="username">Username</label>
              <input type='text' name='user-name' id='username' required placeholder='Name' />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type='password' name='user-password' id='password' required placeholder='password' />
            </div>
            <button type="submit" id='btn'>Login</button>
            <p>Not Registered <Link to="/signup">Sign up</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
