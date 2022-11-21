import React from 'react';
import s from "./Works.module.css"

type PropsType = {
    title: string
    description: string
    img: string
}

function ItemWork(props: PropsType) {
    return (
        <div className={s.wrapperItem}>
            <div className={s.wrapperForImageButton}>
                <img className={s.image} src={props.img} alt={"img"}/>
                <a className={s.button} href={"###"}>Look
                </a>
            </div>
            <div className={s.wrapperForDescriptions}>
                <h2>{props.title}</h2>
                <div className={s.workDescription}>
                    {props.description}
                </div>
            </div>

        </div>

    );
}

export default ItemWork;