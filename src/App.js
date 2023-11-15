import React from 'react'
import { Route, Routes } from 'react-router-dom'

//Pages
import Home from "./pages/Home"
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
