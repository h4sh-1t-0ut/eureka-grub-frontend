import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = ({signup}) => {
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
      <form ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name="email" placeholder="ex@example.com" />
        Password: <input type="password" name="password" placeholder="password" />
        Confirm Password: <input type="password" name="password_confirmation" placeholder="confirm password" />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default SignUp