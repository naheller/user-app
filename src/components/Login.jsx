import React, { useState } from 'react'
import { getNameErrors, getPasswordErrors } from '../utils/formValidation'
import { loginUser } from '../endpoints'

export const Login = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const resetFields = () => {
    setName('')
    setPassword('')
    setErrors([])
  }

  const handleLogin = () => {
    console.log('LOGIN')
    const validationErrors = [...getNameErrors(name), ...getPasswordErrors(password)]

    if (validationErrors.length) {
      setErrors(validationErrors)
    } else {
      setErrors([])
    }

    loginUser({ name, password })
      .then((data) => {
        console.log('data', data)
        if (!data.ok) throw Error(data.statusText)
        return data.json()
      })
      .then((data) => {
        if (!data.Item) {
          setErrors(['No user found'])
        } else {
          setIsLoggedIn(true)
          resetFields()
        }
      })
      .catch((err) => {
        console.log('err', err)
        setErrors([err.toString()])
      })
  }

  return (
    <div className="form">
      <h1>{isLoggedIn ? "You're logged in!" : 'Login'}</h1>
      {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(false)
          }}
        >
          Logout
        </button>
      ) : (
        <div>
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          {errors.map((error, i) => (
            <div key={`error-${i}`}>{error}</div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Login
