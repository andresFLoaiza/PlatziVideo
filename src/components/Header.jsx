import Logo from '../assets/style/static/logo-platzi-video-BW2.png';
import UserIcon from '../assets/style/static/user-icon.png'
import '../assets/style/components/header.scss';
import React from 'react';


const headeer=()=>
   (
        <header className="header">
        <img className="header__img" src={Logo} alt="Platzi Video" />
        <div className="header__menu">
        <div className="header__menu--profile">
            <img src={UserIcon} alt="" />
            <p>Perfil</p>
        </div>
        <ul>
            <li><a href="/">Cuenta</a></li>
            <li><a href="/">Cerrar Sesión</a></li>
        </ul>
        </div>
    </header>
   )

export default headeer;