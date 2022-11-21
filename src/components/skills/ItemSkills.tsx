import React from 'react';
import s from "./Skills.module.css"

type PropsType = {
    title: string
    description: string
    img: string
}

function Skills(props: PropsType) {
    return (
        <div className={s.wrapperItem}>
            <img className={s.image} src={props.img} alt={"img"}/>
            <h2>{props.title}</h2>
            <div className={s.d}>
                {props.description}
            </div>
        </div>

    );
}

export default Skills;