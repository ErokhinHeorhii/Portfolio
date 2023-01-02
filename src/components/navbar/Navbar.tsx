import React from 'react';
import s from "./Navbar.module.scss"

function Navbar() {
    return (
        <div className={s.navbar}>
            <ul className={s.navList}>
                <li className={s.navItem}>
                    <a className={s.navLink} href={"#main"}>Main</a></li>
                <li className={s.navItem}>
                    <a className={s.navLink} href={"#mySkills"}>Skills</a></li>
                <li className={s.navItem}>
                    <a className={s.navLink} href={"#myWorks"}>Projects</a></li>
                <li className={s.navItem}>
                    <a className={s.navLink} href={"#myContact"}>Contact</a>
                </li>
            </ul>

        </div>
    );
}

export default Navbar;