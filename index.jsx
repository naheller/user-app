import React from 'react'
import ReactDOM from 'react-dom'

import Login from './src/components/Login'

const Index = () => <Login />

const app = document.querySelector('#app')
ReactDOM.render(<Index />, app)
