import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <a href="#"><img src="https://cdn.icon-icons.com/icons2/61/PNG/128/point_mac_logo_12332.png" alt="logo" /></a>
            <div className={s.loginblock}>
                {props.isAuth
                    ? props.login
                    : <NavLink to={'/login'} >Login</NavLink>}

            </div>
        </header>
    );
}

export default Header;