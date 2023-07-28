import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignInUp.css';

const SignUp = ({ signup }) => {
  const formRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = (e) => {

    e.preventDefault()

    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      "user": { email: data.email, password: data.password }
    }

    signup(userInfo)
    navigate('/')
    e.target.reset()
  }

  return (
    <>
    <div className='background'>
      <div className="login-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="user-box">
            <input type="text" name="email" aria-label='username' required />
            <label>User Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" aria-label='password' required />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" aria-label='confirm_password' required />
            <label>Confirm Password</label>
          </div>
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default SignUp