import React from 'react';
import s from "./Contacts.module.css"

function Contacts() {
    return (
        <div className={s.wrapperContacts}>
            <div className={s.contacts}>
                <h2 className={s.title}>Contact me</h2>
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