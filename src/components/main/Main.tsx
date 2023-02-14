import React from 'react';
import s from "./Main.module.scss"
import "../../App.css"
import classnames from 'classnames'
import {Particle} from "../particle/Particle";


function Main() {
    return (
        <div className={classnames(s.wrapperMain, 'wrapper')} id={'main'}>
            <Particle />
            <div id="container" className={classnames(s.main, 'container')}>
                <div className={s.description}>
                    <h1 className={s.h1}> Hello Everyone</h1>
                    <div className={s.title}> My name is
                        <span className={s.span}> Yarokhin Heorhi </span>
                    </div>
                    <div className={s.title}> And J`m Frontend-Developer</div>
                </div>
                <div className={s.picture}></div>
            </div>

        </div>

    );
}

export default Main;