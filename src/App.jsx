import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Model from './Model'
import Policy from './Policy'
import Api from './Api'

function App() {
  return <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/model' element={<Model />} />
      <Route path='/policy' element={<Policy />} />
      <Route path='/api' element={<Api />} />
    </Routes>
  </>
}

export default App