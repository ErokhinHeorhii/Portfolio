import React from 'react';
import s from "./Main.module.css"
import   "../../App.css"

function Main() {
    return (
        <div className={`${s.wrapperMain} + wrapper`}>
            <div className={`${s.main} + container `}>
                <div className={s.description}>
                    <h1 className={s.h1}> Hello Everyone</h1>
                    <div> My name is Yarokhin Heorhi</div>
                    <div> And J`m Frontend -Developer</div>
                </div>
                <div className={s.picture}></div>
            </div>
        </div>

    );
}

export default Main;