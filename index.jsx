import React from 'react'
import ReactDOM from 'react-dom'

import Login from './src/components/Login'
import CreateUser from './src/components/CreateUser'
import UserList from './src/components/UserList'

const Index = () => (
  <div>
    <Login />
    <CreateUser />
    <UserList />
  </div>
)

const app = document.querySelector('#app')
ReactDOM.render(<Index />, app)
