import s from "./FooterLink.module.scss";
import React from "react";

type FooterLinkType ={
    href:string
    img:string
}

export const FooterLink= (props: FooterLinkType) => {

    return <li className={s.footerItem}>
        <a href={props.href} className={s.link}>
            <img className={s.image} src={props.img} alt={"img"}/>
        </a>
    </li>;
}