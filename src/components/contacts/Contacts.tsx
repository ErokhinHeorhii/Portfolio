import React from "react";
import s from "./Contacts.module.css"
import   "../../App.css"
import {Title} from "../../common/components/title/Title";

function Contacts() {
    return (
        <div className={`${s.wrapperContacts} + wrapper`} id={"myContacts"}>
            <div className={`${s.contacts} + container`}>
                <Title title={"Contact me"}/>
                <form className={s.wrapperInput}>
                    <input  className={s.input} placeholder="E-mail"></input>
                    <input className={s.input} placeholder="Phone"></input>
                    <textarea className={s.textarea} placeholder="Message"></textarea>
                </form>
                <button className={s.button}>Send Me</button>
            </div>

        </div>

    )
}

export default Contacts;