import React from 'react';
import s from "./Footer.module.scss"
import classnames from "classnames";
import {FooterLink} from "./footerLink/FooterLink";

const linkForLinkedin = "https://www.linkedin.com/in/heorhi-yarokhin-739261248"
const linkForGit = "https://github.com/Geo070684"
const linkForTelegram ="https://t.me/Heo07"
const linkForGmail = "mailto:georgii070684@gmail.com"

function Footer() {
    return (
        <div className={s.wrapperFooter}>
            <div className={classnames(s.footer, 'container')}>
                <div>
                    <h2 className={s.footerTitle}>Heorhi Yarokhin</h2>
                </div>
                <div className={s.wrapperForContact}>
                    <ul className={s.wrapperForFooterItem}>
                        <FooterLink href={linkForLinkedin} img={require('../../assets/svg/linkedin-color-svgrepo-com.png')}/>
                        <FooterLink href={linkForGit} img={require('../../assets/svg/git-svgrepo-com.png')}/>
                        <FooterLink href={linkForTelegram} img={require('../../assets/svg/telegram.png')}/>
                        <FooterLink href={linkForGmail} img={require('../../assets/svg/gmail.png')}/>
                    </ul>
                </div>
                <div className={s.wrapperForData}>
                    <p className={s.footerSpan}>©</p>
                    <p className={s.footerSpan}>2023</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;