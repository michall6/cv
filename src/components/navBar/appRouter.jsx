import React from 'react'
import {  Route, Routes, useHistory } from 'react-router-dom'
import FormRusume from '../FormRusume'
import Login from '../Login'
import Register from '../Register'
import PdfRusume from '../PdfRusume'
import ManagementRusume from '../ManagementRusume'
import NoPage from '../404'




export default function AppRouter() {

    const history = useHistory();

    
    return (
    <Routes>
    <Route path='/formRusume' element={<FormRusume/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/PdfRusume' element={<PdfRusume/>} />
    <Route path='/managementRusume' element={<ManagementRusume/>} />

    <Route path='*' element={<NoPage />} />
  </Routes>
  )
}
