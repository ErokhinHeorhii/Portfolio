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
            <h3>{props.title}</h3>
            <div className={s.d}>
                {props.description}
            </div>
        </div>

    );
}

export default Skills;