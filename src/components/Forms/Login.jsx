import React from 'react'
import './login-form.css';
const Login = () => {
  return (
    <div className='login-form'>
      <form>
        <h4>SIGN IN</h4>
        <p>Welcome! Log into your account</p>
        <div className='input-div'>
          <lable>USERNAME</lable>  <br />
          <input type='text' />
        </div>

        <div className='input-div'>
          <lable>PASSWORD</lable><br />
          <input type='password' />
        </div>
        <br />
        <button className='login-button'>LOGIN</button>
        <p className='forget'>Forgot your password? Get help</p>
        <p className=''>Privacy Policy</p>
      </form>

    </div>
  )
}

export default Login