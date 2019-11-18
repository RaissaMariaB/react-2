import React from 'react'
import './style.css'
import Logo from '../../assets/RocketChat.png'
import Menu from './Menu/index.js'


function Nav (){
    return(
        <nav className="navbar">
            <img  src={Logo} 
            alt="logo tipo da Rocketchat" 
            className="navbar-logo">
            </img>
            <Menu/>          
        </nav>
    )
}


export default Nav