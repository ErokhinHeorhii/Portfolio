import React from 'react';
import s from "./Navbar.module.css"

function Navbar() {
    return (
        <div className={s.navbar}>
            <ul className={s.navList}>
                <li className={s.navItem}>
                    <a className={s.navLink} href={"###"}>Main</a></li>
                <li className={s.navItem}>
                    <a className={s.navLink} href='mySkills'>Skills</a></li>
                <li className={s.navItem}>
                    <a className={s.navLink} href={"###"}>Projects</a></li>
                <li className={s.navItem}>
                    <a className={s.navLink} href={"###"}>Contact</a>
                </li>
            </ul>

        </div>
    );
}

export default Navbar;