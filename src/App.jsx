import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Meals from './Components/Meals'
import Nav from './Components/Nav'

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Meals/>} />
      </Routes>
      
    </div>
  )
}

export default App
