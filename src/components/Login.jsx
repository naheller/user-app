import React, { useState } from 'react'
import { getEmailErrors, getPasswordErrors } from '../utils/formValidation'
import { loginUser } from '../endpoints'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const resetFields = () => {
    setEmail('')
    setPassword('')
    setErrors([])
  }

  const handleLogin = () => {
    const validationErrors = [...getEmailErrors(email), ...getPasswordErrors(password)]

    if (validationErrors.length) {
      setErrors(validationErrors)
    } else {
      setErrors([])

      loginUser({ email, password })
        .then((data) => {
          if (!data.ok) throw Error(data.statusText)
          return data.json()
        })
        .then((data) => {
          if (!data.Items.length) {
            setErrors(['No user found'])
          } else if (data.Items[0].password !== password) {
            setErrors(['Incorrect password'])
          } else {
            setIsLoggedIn(true)
            resetFields()
          }
        })
        .catch((err) => {
          setErrors([err.toString()])
        })
    }
  }

  return (
    <div>
      <h1>{isLoggedIn ? "You're logged in!" : 'Login'}</h1>
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
