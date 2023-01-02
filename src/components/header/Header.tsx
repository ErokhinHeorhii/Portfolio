import React from 'react';
import s from "./Header.module.scss"
import {ReactComponent as Logo} from '../../assets/svg/portfolio-svgrepo-com.svg';
import Navbar from "../navbar/Navbar";

function Header() {
    return (
        <div className={s.header}>
            <div className={s.container}>
                <Logo className={s.logo}/>
                <Navbar/>
            </div>
        </div>
    );
}

export default Header;