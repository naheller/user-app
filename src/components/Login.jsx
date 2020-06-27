import React, { useState } from 'react'
import { getEmailErrors, getPasswordErrors } from '../utils/formValidation'

const USER_ENDPOINT = 'http://localhost:3000/user'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

  const handleLogin = () => {
    const validationErrors = [...getEmailErrors(email), ...getPasswordErrors(password)]

    if (validationErrors.length) {
      setErrors(validationErrors)
    } else {
      postUser({ email, password })
        .then((data) => {
          console.log('data', data)
          if (data.error) {
            setErrors([`Server error: ${data.error}`])
          }
        })
        .catch((err) => {
          console.log('err', err)
        })
    }
  }

  const postUser = async (data) => {
    const response = await fetch(USER_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    return response.json()
  }

  return (
    <div>
      <h1>Login</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <div>
        {errors.map((error, i) => (
          <div key={`error-${i}`}>{error}</div>
        ))}
      </div>
    </div>
  )
}

export default Login
