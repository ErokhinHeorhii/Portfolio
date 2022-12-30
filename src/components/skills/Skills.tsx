import React from 'react';
import s from "./Skills.module.css"
import ItemSkills from "./ItemSkills";
import   "../../App.css"

function Skills() {
    return (
        <div className={`${s.wrapperSkills} + wrapper`} id="mySkills">
            <div className ={`${s.skills} + container`} >
                <h2>My Skills</h2>
                <div className={s.description}>
                    <ItemSkills title={"React"} description={"Made API with React"}
                                img={require("../../assets/svg/React.png")}/>
                    <ItemSkills title={"JS"} description={"Made API with React"}
                                img={require("../../assets/svg/Js.png")}/>
                    <ItemSkills title={"HTML/CSS"} description={"Made API with React"}
                                img={require("../../assets/svg/Html.png")}/>
                </div>
            </div>
        </div>

    );
}

export default Skills;