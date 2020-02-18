import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import logo from './../../assets/images/header-logo.png'

const Header = (props) => {
    return (
        <header className={s.header}>
            <a href="#"><img src={logo} alt="logo" /></a>
            <div className={s.loginblock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'} >Login</NavLink>}

            </div>
        </header>
    );
}

export default Header;