import { useState } from 'react'
import './App.css'
import Navbar from './pages/Navbar'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import Code from './pages/Code'
import Choice from './pages/Choice'
import Doc from './pages/Doc'

function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path = "/login" element = {<Login />}></Route>
        <Route path='/signup' element = {<Register/>}></Route>
        <Route path = '/code' element= {<Code/>}></Route>
        <Route path = '/choice' element= {<Choice/>}></Route>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
