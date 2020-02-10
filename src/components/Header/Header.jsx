import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <a href="#"><img src="https://cdn.icon-icons.com/icons2/61/PNG/128/point_mac_logo_12332.png" alt="logo" /></a>
            <a href="#">Help</a>
        </header>
    );
}

export default Header;