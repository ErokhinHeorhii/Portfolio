import React from 'react';
import s from "./Works.module.scss"
import {ImgType} from "./Works";

type PropsType = {
    title: string
    description: string
    style: ImgType
}

function ItemWork(props: PropsType) {
    return (
        <div className={s.wrapperItem}>
            <div className={s.wrapperForImageButton}>
                <div className={s.image} style={props.style}>
                    <a className={s.button} href={"###"}>
                        <span className={s.buttonTitle}>Look</span>
                    </a>
                </div>
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