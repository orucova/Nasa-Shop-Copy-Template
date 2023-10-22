import React from 'react'
import { Route, Routes } from 'react-router-dom'

//Pages
import Home from "./pages/Home"
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}  />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
