import React from "react";
import s from "./Contacts.module.scss"
import   "../../App.css"
import {Title} from "../../common/components/title/Title";
import classnames from "classnames";

function Contacts() {
    return (
        <div className={classnames(s.wrapperContacts, 'wrapper')} id={"myContacts"}>
            <div className={classnames(s.contacts,'container')}>
                <Title title={"Contact me"}/>
                <form className={s.wrapperInput}>
                    <input  className={s.input} placeholder="E-mail"></input>
                    <input className={s.input} placeholder="Phone"></input>
                    <textarea className={s.textarea} placeholder="Message"></textarea>
                    <button type='submit' className={s.button}>Send Me</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts;