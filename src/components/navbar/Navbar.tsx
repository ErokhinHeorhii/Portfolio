import React from 'react';
import s from "./Navbar.module.css"

function Navbar() {
    return (
        <div className={s.navbar}>
            <ul className={s.navList}>
                <li className={s.navItem}> Main</li>
                <li className={s.navItem}> Skills</li>
                <li className={s.navItem}> Projects</li>
                <li className={s.navItem}> Contact</li>
            </ul>

        </div>
    );
}

export default Navbar;