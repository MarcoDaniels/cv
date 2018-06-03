import * as React from 'react'
import { render } from 'react-dom'
import App from './App'
import './Styles/normalize.css'
import './Styles/skeleton.css'
import './Styles/main.css'

const WrappedApp = (<App/>)

render(WrappedApp, document.getElementById('root'))