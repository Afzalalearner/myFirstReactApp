import React from 'react'
import ReactDOM  from 'react-dom/client'

import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
// import "bootstrap/js/src/collapse.js";
// import 'bootstrap/dist/js/bootstrap.min.js'


import '@fortawesome/fontawesome-free/css/all.css'

import App from './App'



// ReactDOM.render(<App/>,document.getElementById('root'))

ReactDOM
.createRoot(document.getElementById('root'))
.render(<React.StrictMode>
    <App/>
    </React.StrictMode>)