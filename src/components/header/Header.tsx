import React from 'react';
import s from "./Header.module.css"
import Navbar from "../navbar/Navbar";

function Header() {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <div className={s.logo}></div>
                <Navbar/>
            </div>
        </div>
    );
}

export default Header;