import React from 'react';
import s from "./Mean.module.css"

function Mean() {
    return (
        <div className={s.wrapperMean}>
            <div className={s.mean}>
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

export default Mean;