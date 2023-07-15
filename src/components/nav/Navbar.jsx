import React from 'react'
import "./navbar.scss"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const menu = ["About", "Careers", "Events", "Products", "Support"]
    const navigate = useNavigate()
    const openMenu = () => {
        navigate("mobile-menu")
    }
  return (
    <nav className='header-navbar'>
        <h2>loopstudios</h2>
        <div className='desktop-menu'>
            {menu.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
        <svg className='open-mobile' onClick={openMenu} width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-whiteidth="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <path d="M20 7L4 7" stroke="white" stroke-whiteidth="1.5" stroke-linecap="round"/> <path d="M20 12L4 12" stroke="white" stroke-whiteidth="1.5" stroke-linecap="round"/> <path d="M20 17L4 17" stroke="white" stroke-whiteidth="1.5" stroke-linecap="round"/> </g>
        </svg>
    </nav>
  )
}

export default Navbar