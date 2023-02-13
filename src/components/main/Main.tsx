import React from 'react';
import s from "./Main.module.css"
import   "../../App.css"
import classnames from 'classnames'

function Main() {
    return (
        <div className={classnames(s.wrapperMain, 'wrapper')} id={'main'}>
            <div className={classnames(s.main, 'container')}>
                <div className={s.description}>
                    <h1 className={s.h1}> Hello Everyone</h1>
                    <div className={s.title}> My name is Yarokhin Heorhi</div>
                    <div className={s.title}> And J`m Frontend-Developer</div>
                </div>
                <div className={s.picture}></div>
            </div>
        </div>

    );
}

export default Main;