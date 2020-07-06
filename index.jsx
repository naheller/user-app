import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import AuthProvider, { useAuthContext } from './src/context/AuthProvider'

import Login from './src/components/Login'
import CreateUser from './src/components/CreateUser'
import UserList from './src/components/UserList'

const Index = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
)

const App = () => {
  const { user } = useAuthContext()
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
}

const AuthenticatedApp = () => {
  const { setUser } = useAuthContext()

  return (
    <div className="wrapper">
      <UserList />
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  )
}

const UnauthenticatedApp = () => (
  <div className="wrapper">
    <Login />
    <CreateUser />
  </div>
)

const app = document.querySelector('#app')
ReactDOM.render(<Index />, app)
