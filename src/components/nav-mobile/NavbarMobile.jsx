import React from 'react'
import "./nav-mobile.scss"
import { useNavigate } from 'react-router-dom'

const NavbarMobile = () => {
    const menu = ["About", "Careers", "Events", "Products", "Support"]
    const navigate = useNavigate()
    const closeMenu = () => {
        navigate("/")
    }
  return (
    <section className='header--opening-menu'>
        <div className='opening-menu--logo'>
            <h2>loopstudios</h2>
            <svg onClick={closeMenu} width="25px" height="25px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 21.32L21 3.32001" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 3.32001L21 21.32" stroke="#FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
        {menu.map((item, index) => (
            <p key={index}>{item}</p>
        ))}
    </section>
  )
}

export default NavbarMobile