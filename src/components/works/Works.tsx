import React from 'react';
import s from "./Works.module.css"
import ItemSkills from "./ItemWork";

function Works() {
    return (
        <div className={s.wrapper}>
            <div className={s.skills}>
                <h2>My Works</h2>
                <div className={s.description}>
                    <ItemSkills title={"React"} description={"Made AP wietvdfvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvh React"}
                                img={require("../../assets/svg/React.png")}/>
                    <ItemSkills title={"JS"} description={"Made jkuttttttttttttttukyttttttttttttttttttttj,yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyttttttttttttttttttttttttttttttttttttAP with React"}
                                img={require("../../assets/svg/Js.png")}/>

                </div>
            </div>
        </div>

    );
}

export default Works;