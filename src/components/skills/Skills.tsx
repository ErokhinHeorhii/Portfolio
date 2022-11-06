import React from 'react';
import s from "./Skills.module.css"
import ItemSkills from "./ItemSkills";

function Skills() {
    return (
        <div className={s.wrapperSkills}>
            <div className={s.skills}>
                <h2>My Skills</h2>
                <div className={s.description}>
                    <ItemSkills title={"React"} description={"Made AP with React"}
                                img={require("../../assets/svg/React.png")}/>
                    <ItemSkills title={"JS"} description={"Made AP with React"}
                                img={require("../../assets/svg/Js.png")}/>
                    <ItemSkills title={"HTML/CSS"} description={"Made AP with React"}
                                img={require("../../assets/svg/Html.png")}/>
                </div>
            </div>
        </div>

    );
}

export default Skills;