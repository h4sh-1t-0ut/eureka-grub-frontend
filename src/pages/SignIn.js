import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignInUp.css';

const SignIn = ({ login }) => {
  const formRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password }
    }

    login(userInfo)
    navigate('/')
    e.target.reset()
  }

  return (
    <>
    <div className='background'>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} ref={formRef}>
          <div className="user-box">
            <input type="text" name="email" aria-label='username' required />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" aria-label='password' required />
            <label>Password</label>
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

export default SignIn;
