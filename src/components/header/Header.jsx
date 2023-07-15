import React, { useState } from 'react'
import Navbar from '../nav/Navbar'
import NavbarMobile from '../nav-mobile/NavbarMobile'
import "./header.scss"

const Header = () => {
  return (
    <header>
        <Navbar/>
        <div className='header--title'>
            <h1>Immersive experiences that deliver</h1>
        </div>
    </header>
  )
}

export default Header