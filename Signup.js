// Register.js
import React from 'react';

function Signup() {
  return (
    <div id='main'>
      {/* Image Container */}
      <div>
        <img src="loginbg.png" alt="Logo" id='img' />
      </div>

      {/* Registration Container */}
      <div>
        <div id='form-style'>
          <h2>Sign Up</h2>
          <form>
            <div>
              <label htmlFor="username">Username</label>
              <input type='text' name='user-name' id='username' required placeholder='Username' />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type='password' name='user-password' id='password' required placeholder='Password' />
            </div>
            <div>
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type='password' name='confirm-password' id='confirm-password' required placeholder='Confirm Password' />
            </div>
            <button type="submit" id='btn'>Register</button>
            <p>Already have an account? <a href="/login">Sign in</a></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
