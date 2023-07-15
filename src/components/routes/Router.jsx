import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarMobile from '../nav-mobile/NavbarMobile'
import Home from '../home/Home'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='mobile-menu' element={<NavbarMobile/>}/>
        </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default Router