import { useState, useEffect } from 'react'
import { auth } from '../backend/firebase'
import './App.css'
import Navbar from './pages/Navbar'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import Code from './pages/Code'
import Choice from './pages/Choice'
import Doc from './pages/Doc'
import Checkout from './pages/Checkout'
import { StateProvider } from './components/StateProvider'
import { useStateValue } from "./components/StateProvider";
import VillagersProfile from './pages/villagersProfile';
import reducer, { initialState } from './components/reducer';

function App() {
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    
    <StateProvider initialState={initialState} reducer={reducer}>
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path = "/login" element = {<Login />}></Route>
        <Route path='/signup' element = {<Register/>}></Route>
        <Route path = '/code' element= {<Code/>}></Route>
        <Route path = '/choice' element= {<Choice/>}></Route>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/villagerProfile" element={<VillagersProfile/>}/>
      </Routes>
      </BrowserRouter>
      </StateProvider>
  )
}

export default App
