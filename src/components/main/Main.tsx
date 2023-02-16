import React from 'react';
import s from "./Main.module.scss"
import "../../App.css"
import classnames from 'classnames'
import {Particle} from "../particle/Particle";
import Photo from "../../assets/img/mainImage-removebg-preview (1).png"
import Fade from "react-awesome-reveal";
// @ts-ignore
import Tilt from 'react-tilt'

function Main() {
    return (
        <div className={classnames(s.wrapperMain, 'wrapper')} id={'main'}>
            <Particle/>
            <div id="container" className={classnames(s.main, 'container')}>
                <Tilt className="Tilt" options={{max: 25, transition: true}} style={{transition:".5s"}}>
                    <div className={s.description}>
                        <h1 className={s.h1}> Hello Everyone</h1>
                        <div className={s.title}> My name is
                            <span className={s.span}> Yarokhin Heorhi </span>
                        </div>
                        <div className={s.title}> And J`m Frontend-Developer</div>
                    </div>
                </Tilt>
                <Fade delay={500} triggerOnce={true}>

                    <img src={Photo} className={s.picture} alt={'img'}></img>


                </Fade>
            </div>
        </div>
    );
}

export default Main;