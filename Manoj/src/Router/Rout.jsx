import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Nav from './Nav'
const Rout = () => {
  return (
    <div>
        <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="#" element={<h1>404 Error</h1>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Rout