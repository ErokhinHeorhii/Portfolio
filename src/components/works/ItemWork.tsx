import React from 'react';
import s from "./Works.module.css"

type PropsType = {
    title: string
    description: string
    img: string
}

function Skills(props: any) {
    return (
        <div className={s.wrapperItem}>
            <div className={s.wrapperForImageButton}>
            <img className={s.image} src={props.img} alt={"img"}/>
                <a className={s.button} href={"#"}>Look
                </a>
            </div>
            <h3>{props.title}</h3>
            <div className={s.d}>
                {props.description}
            </div>
        </div>

    );
}

export default Skills;