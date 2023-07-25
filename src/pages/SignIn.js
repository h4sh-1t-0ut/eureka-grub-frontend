import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = ({login}) => {
  const formRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = (e) => {

    e.preventDefault()

    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData)
    const userInfo = {
      "user": { email: data.email, password: data.password }
    }
    
    login(userInfo)
    navigate('/')
    e.target.reset()
  }

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit} aria-label='form'>
        Email: <input type="email" name="email" placeholder="ex@example.com"/>
        Password: <input type="password" name="password" placeholder='password'/>
        <input type='submit' value="Submit" />
      </form>
    </>
  )
}

export default SignIn