import React from "react";
import s from "./Contacts.module.scss"
import   "../../App.css"
import {Title} from "../../common/components/title/Title";
import classnames from "classnames";
import {Zoom} from "react-awesome-reveal";

function Contacts() {
    return (
        <div className={classnames(s.wrapperContacts, 'wrapper')} id={"myContact"}>
            <div className={classnames(s.contacts,'container')}>
                <Title title={"Contact me"}/>
                <Zoom triggerOnce={true} className={s.wrapperInput} >
                <form className={s.wrapperInput}>
                    <input  className={s.input} placeholder="E-mail"></input>
                    <input className={s.input} placeholder="Phone"></input>
                    <textarea className={s.textarea} placeholder="Message"></textarea>
                    <button type='submit' className={s.button}>Send Me</button>
                </form>
                </Zoom>
            </div>
        </div>
    )
}

export default Contacts;