import { useState,useContext } from 'react'
import './App.css'
import FormRusume from './components/FormRusume'
import ProviderRusume, { Rusume_Context } from './context/RusumeContext'
import pdfRusume from './components/PdfRusume'
import ProviderUser, { UserContext } from './context/Authentication'
import Login from './components/Login'
import Register from './components/Register'

import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import ManagementRusume from './components/ManagementRusume'
import LogOut from './components/LogOut'


function App() {
  const [count, setCount] = useState(0)

  const { currentUser } = useContext(UserContext);

  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignInClick = () => {
    setIsSignIn(true);
  };

  const handleRegisterClick = () => {
    setIsSignIn(false);
  };

  return (

    <ProviderRusume>

      <BrowserRouter>


        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />

          {currentUser ?
            <Route path='/formRusume' element={<FormRusume />}></Route> : <Route path='*' element={<Navigate to='/login' />} />}
          {currentUser ?
            <Route path='/pdfRusume' element={<pdfRusume />}></Route> : <Route path='*' element={<Navigate to='/login' />} />}
          {currentUser ?
            <Route path='/managementRusume' element={<ManagementRusume />}></Route> : <Route path='*' element={<Navigate to='/login' />} />}
 

        </Routes>

      </BrowserRouter>
      <LogOut></LogOut>
    </ProviderRusume>




  )
}

export default App


