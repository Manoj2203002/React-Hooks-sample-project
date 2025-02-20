import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/'  element={<Login/>}/>
            <Route path='/Signup'  element={<Signup/>}/>
            <Route path='/Home'  element={<Home/>}/>

        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router