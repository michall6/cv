import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProviderUser from './context/Authentication.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

<ProviderUser>
   <App />

</ProviderUser>

)


