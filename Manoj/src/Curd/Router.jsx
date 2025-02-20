import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Edit from './Edit'
const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Add' element={<Create/>}/>
        <Route path='/Edit/:id' element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router