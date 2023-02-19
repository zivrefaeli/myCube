import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Policy from "./Policy"
import Model from "./Model"

function App() {
  return <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/model' element={<Model />} />
      <Route path='/policy' element={<Policy />} />
      <Route path='/api' element={<div>api</div>} />
    </Routes>
  </>
}

export default App