import React, {ReactNode} from 'react';
import s from "./Skills.module.css"

type PropsType = {
    title: string
    description: string
    img?: string
    children?: ReactNode
}
    const Skills = (props: PropsType) => {
    return (
        <div className={s.wrapperItem}>
            <div className={s.wrapperIcon}>
                { props.img && <img className={s.image} src={props.img} alt={"img"}/>}
                {props.children}
            </div>
            <h2>{props.title}</h2>
            <div className={s.descriptionSkills}>
                {props.description}
            </div>
        </div>

    );
}

export default Skills;