import React from 'react';
import s from "./Footer.module.css"

function Footer() {
    return (
        <div className={s.wrapperFooter}>
            <div className={`${s.footer} + container`}>
                <div>
                    <h2  className={s.footerTitle}>Heorhi Yarokhin</h2>
                </div>
                <div className={s.wrapperForContact}>
                    <ul className={s.wrapperForFooterItem}>
                        <li className={s.footerItem}></li>
                        <li className={s.footerItem}></li>
                        <li className={s.footerItem}></li>
                        <li className={s.footerItem}></li>
                    </ul>
                </div>
                <div className={s.wrapperForData}>
                    <p className={s.footerSpan}>©</p>
                    <p className={s.footerSpan}>2022</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;