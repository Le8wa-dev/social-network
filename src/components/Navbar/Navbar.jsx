import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    return (
        <div className={s.navbar}>
            <nav className={s.nav}>
                <ul>
                    <li className={s.item}>
                        <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default Navbar;